# Image assets

Drop production assets in this folder. The site references these paths:

- **`/img/johannes-portrait.jpg`** — hero portrait (used on home + about).
  Use the existing Stefan Marcel Gerard B&W press shot. Export at ~1600×2133px,
  WebP preferred, ≤ 250 KB. Aspect ratio 3:4.

- **`/img/og-default.jpg`** — Open Graph share image. 1200×630px. Should
  read on its own (logo + tagline + accent stripe). PNG or JPG, ≤ 200 KB.

Until real assets land, the site renders broken-image placeholders for the
portrait. Generate a temporary one with any image tool, or use a coloured
fallback by editing `src/components/home/Hero.astro`.
