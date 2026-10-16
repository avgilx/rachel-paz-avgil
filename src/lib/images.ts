import type { ImageMetadata } from 'astro';

const modules = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

/**
 * מחזיר את מטא־דאטת התמונה עבור נתיב יחסי בתוך src/assets,
 * למשל 'paintings/mishkan-bamidbar.jpg'.
 */
export function getAsset(relPath: string): ImageMetadata {
  const mod = modules[`/src/assets/${relPath}`];
  if (!mod) {
    throw new Error(
      `תמונה לא נמצאה: src/assets/${relPath}. ודאו שהקובץ קיים ושהנתיב ב-works.ts נכון.`,
    );
  }
  return mod.default;
}
