import type { APIRoute, GetStaticPaths } from "astro";
import { ogPanels, renderOgSvg } from "~/lib/og";

export const getStaticPaths: GetStaticPaths = () => {
  return Object.keys(ogPanels).map((key) => ({
    params: { slug: key === "" ? "home" : key },
    props: { panelKey: key },
  }));
};

export const GET: APIRoute = ({ props }) => {
  const panel = ogPanels[(props as { panelKey: string }).panelKey];
  if (!panel) return new Response("Not found", { status: 404 });
  return new Response(renderOgSvg(panel), {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};
