const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * מוסיף לנתיב את קידומת הבסיס של האתר.
 * נחוץ כשהאתר מתארח בתת־נתיב (כמו GitHub Pages).
 * כשהאתר יעבור לדומיין משלו — BASE_URL יהיה '/' והפונקציה לא תשנה דבר.
 */
export const withBase = (path: string) => {
  if (/^(https?:)?\/\//.test(path) || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }
  return `${BASE}${path.startsWith('/') ? path : `/${path}`}`;
};
