import { defineConfig } from 'astro/config';

// כתובת האתר ותת־הנתיב שבו הוא מתארח.
// בפיתוח מקומי שניהם ריקים והאתר יושב על השורש.
// בפרסום ל-GitHub Pages מריצים:  SITE_URL=https://avgilx.github.io BASE_PATH=/rachel-paz-avgil npm run build
// כשיהיה דומיין משלה — מספיק SITE_URL, בלי BASE_PATH.
const site = process.env.SITE_URL || undefined;
const base = process.env.BASE_PATH || undefined;

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  image: {
    responsiveStyles: false,
  },
  devToolbar: { enabled: false },
});
