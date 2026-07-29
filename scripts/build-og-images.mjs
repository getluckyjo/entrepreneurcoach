/**
 * Render every OG panel to a 1200×630 PNG.
 *
 * Why PNG: src/lib/og.ts used to assert that LinkedIn accepts SVG. It does not
 * — it renders a grey placeholder — and nor do WhatsApp or Facebook reliably.
 * Every share of this site was previewing broken.
 *
 * Panel copy is imported from src/lib/og.ts so there is still one source of
 * truth; this only changes how it's rasterised. Node strips the TS types.
 *
 * Usage:  node scripts/build-og-images.mjs
 * Needs:  the gstack browse binary (headless Chromium) and a free port.
 */
import { execFileSync, spawn } from "node:child_process";
import { mkdirSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { homedir, tmpdir } from "node:os";

const ROOT = resolve(import.meta.dirname, "..");
const OUT_DIR = join(ROOT, "public", "img", "og");
const PORT = 8931;
const BROWSE = join(homedir(), ".claude/skills/gstack/browse/dist/browse");

const { ogPanels } = await import(join(ROOT, "src/lib/og.ts"));

/** "" (home) has no slug; nested slugs become nested files. */
const fileFor = (slug) => (slug === "" ? "home" : slug);

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const card = (slug, p) => `
<section class="card" id="og-${fileFor(slug).replace(/\//g, "--")}">
  <div class="stripe"></div>
  <p class="eyebrow">${esc(p.eyebrow)}</p>
  <h1>
    <span class="l1">${esc(p.line1)}</span><br />
    <span class="l2">${esc(p.line2)}</span>
  </h1>
  <div class="foot">
    ${p.kicker ? `<p class="kicker">${esc(p.kicker)}</p>` : ""}
    <p class="domain">entrepreneurcoach.co.za</p>
  </div>
</section>`;

const html = `<!doctype html><html><head><meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
<style>
  /* Brand tokens from DESIGN.md — kept in step with the site. */
  :root {
    --paper:#fff; --ink:#0E0E10; --muted:#6F6F73; --red:#F25C2A;
    --font:"Geist","Inter Tight",-apple-system,"Helvetica Neue",sans-serif;
  }
  *{margin:0;padding:0;box-sizing:border-box}
  body{background:#666;font-family:var(--font)}
  .card{
    width:1200px;height:630px;background:var(--paper);position:relative;
    padding:78px 80px 64px;display:flex;flex-direction:column;
    justify-content:space-between;overflow:hidden;margin:24px auto;
  }
  .stripe{position:absolute;inset:0 0 auto 0;height:14px;background:var(--red)}
  .eyebrow{
    font-size:21px;font-weight:600;letter-spacing:.18em;
    text-transform:uppercase;color:var(--muted);
  }
  h1{font-weight:800;letter-spacing:-.045em;line-height:.92;margin-top:auto}
  /* 88px keeps the longest line ("An operator who coaches.", 24 chars) inside
     the 1040px content box. Larger clipped it. */
  .l1{font-size:88px;color:var(--ink)}
  .l2{font-size:88px;color:var(--red);font-style:italic}
  .foot{margin-top:auto}
  .kicker{font-size:23px;font-weight:500;color:var(--muted);margin-bottom:26px}
  .domain{
    font-size:18px;font-weight:600;letter-spacing:.16em;
    text-transform:uppercase;color:var(--ink);
  }
</style></head><body>
${Object.entries(ogPanels).map(([slug, p]) => card(slug, p)).join("\n")}
</body></html>`;

if (!existsSync(BROWSE)) {
  console.error(`browse binary not found at ${BROWSE}`);
  process.exit(1);
}

/*
 * Serve from a separate process. An in-process node http server deadlocks
 * here: the browse calls below are synchronous, so the event loop never gets
 * back to answering the request and `goto` times out.
 */
const serveDir = join(tmpdir(), "og-build");
mkdirSync(serveDir, { recursive: true });
writeFileSync(join(serveDir, "index.html"), html);

const server = spawn("python3", ["-m", "http.server", String(PORT)], {
  cwd: serveDir,
  stdio: "ignore",
  detached: true,
});
execFileSync("sleep", ["2"]);

const b = (...args) => execFileSync(BROWSE, args, { encoding: "utf8" });

try {
  b("viewport", "1300x1400");
  b("goto", `http://localhost:${PORT}/`);
  // Give the webfont a beat; a fallback render would ship the wrong typeface.
  b("js", "document.fonts.ready.then(()=>1); 'ok'");
  execFileSync("sleep", ["3"]);

  const loaded = b("js", "document.fonts.check('800 88px Geist') ? 'yes' : 'no'");
  if (!loaded.includes("yes")) console.warn("⚠ Geist did not load — check the render before shipping");

  let n = 0;
  for (const slug of Object.keys(ogPanels)) {
    const file = fileFor(slug);
    const dest = join(OUT_DIR, `${file}.png`);
    mkdirSync(dirname(dest), { recursive: true });
    b("screenshot", `#og-${file.replace(/\//g, "--")}`, dest);
    console.log("  ✓", `/img/og/${file}.png`);
    n++;
  }
  console.log(`\nrendered ${n} OG images to public/img/og/`);
} finally {
  try { process.kill(-server.pid); } catch {}
  rmSync(serveDir, { recursive: true, force: true });
}
