# רחל פז אבגיל — אתר תדמית וגלריה

אתר סטטי (Astro) בעברית, RTL. אין תלות ב-Wix ואין צורך בשרת: התוצר הוא קבצים
סטטיים שאפשר לארח בכל מקום (Netlify, Cloudflare Pages, Vercel, GitHub Pages, שרת רגיל).

**תצוגה מקדימה חיה:** https://avgilx.github.io/rachel-paz-avgil/
(חסומה למנועי חיפוש — ראו "לפני העלייה לאוויר" בהמשך)

## הפעלה

```bash
npm install
npm run dev      # פיתוח, http://localhost:4321
npm run build    # בנייה לתיקיית dist/
npm run preview  # תצוגה מקדימה של התוצר הבנוי
```

`npm run dev` ו-`npm run preview` מכבדים משתנה סביבה `PORT`, ואם אין — עולים על 4321.

## פרסום עדכון לתצוגה המקדימה

⚠️ בנייה לפרסום דורשת `SITE_URL` ו-`BASE_PATH`, כי ב-GitHub Pages האתר יושב
בתת־נתיב. **התוצר הזה לא יעבוד בתצוגה מקומית** — אחריו צריך `npm run build`
רגיל כדי לחזור לגרסה המקומית.

```bash
SITE_URL=https://avgilx.github.io BASE_PATH=/rachel-paz-avgil npm run build
cd dist && git init -q && git checkout -qb gh-pages && git add -A \
  && git commit -qm "עדכון" \
  && git push -fq https://github.com/avgilx/rachel-paz-avgil.git gh-pages:gh-pages
```

## איפה משנים דברים

| מה                              | קובץ                       |
| ------------------------------- | -------------------------- |
| כל המלל באתר                    | `src/content/site.ts`      |
| רשימת העבודות והתיאורים         | `src/content/works.ts`     |
| צבעים, טיפוגרפיה, מרווחים       | `src/styles/global.css`    |
| כתובת האתר לצורכי SEO ושיתוף    | `astro.config.mjs`         |

## להוסיף עבודה חדשה

1. לשמור את התמונה תחת `src/assets/paintings/` או `src/assets/sculpture/`.
   רצוי JPEG, צלע ארוכה עד 2000 פיקסלים, ללא שוליים לבנים מיותרים.
2. להוסיף רשומה אחת ב-`src/content/works.ts`:

```ts
{
  id: 'my-new-work',
  category: 'paintings',              // או 'sculpture'
  image: 'paintings/my-new-work.jpg',
  alt: 'תיאור בעברית של מה שנראה בתמונה',
  displayOrder: 35,
}
```

3. זהו. הגלריה, ה-lightbox, התמונות הרספונסיביות והטעינה העצלה מתעדכנים לבד.

שדות אופציונליים: `title`, `medium`, `year`, `dimensions`, `availability`,
`description`, `featured`. **שדה שנשאר ריק פשוט לא מוצג באתר** — לעולם לא מופיע
שדה ריק או ערך מומצא למבקר.

- `featured: 1..6` — מיקום באזור "עבודות נבחרות" בעמוד הראשי.
- `displayOrder` — סדר בתוך הגלריה של הקטגוריה.
- `description` — אם קיים, מוצג ב-lightbox במקום ה-`alt`.

## סקריפטים להכנת תמונות

ב-`scripts/` יש שני כלי עזר (Python + Pillow, `pip install pillow`):

- `prepare-images.py` — לוקח את קבצי המקור מתיקיית `photos`, **חותך את השוליים
  הלבנים** של צילומי הציורים כך שכל עבודה שומרת על היחס האמיתי שלה, מקטין לצלע
  ארוכה של 2000 פיקסלים ושומר JPEG איכותי אל `src/assets/`.
  צילומי הפסלים והדיוקנאות אינם נחתכים כלל.
- `make-og-cards.py` — מייצר את כרטיסי השיתוף `public/og-*.jpg` בגודל 1200×630,
  היצירה במלואה על רקע שנהב ובלי חיתוך.

בשני הקבצים יש מיפוי מפורש בין שם קובץ המקור ל-`id` של העבודה — שם מוסיפים שורה
כשמצרפים עבודה חדשה.

## פרטי יצירת קשר

ב-`src/content/site.ts`, תחת `contact.channels`, יש שדות ריקים עם הערות TODO:
טלפון, וואטסאפ, אימייל, אינסטגרם, פייסבוק ומיקום.

**כל ערוץ שיישאר ריק פשוט לא יוצג באתר.** ברגע שממלאים ערך אמיתי אחד, הוא מופיע
בעמוד יצירת הקשר ובפוטר (לרשתות החברתיות), והמשפט הזמני "פרטי יצירת הקשר
יתפרסמו כאן בקרוב" נעלם מעצמו.

### טופס יצירת קשר

הטופס בנוי ומוכן, אבל **אינו מוצג כל עוד אין לו מנגנון שליחה אמיתי** — כדי שלא
יופיע באתר טופס שנראה פעיל ואינו שולח דבר.

להפעלתו: לפתוח חשבון בשירות טפסים (למשל Formspree או Web3Forms), ולהדביק את
כתובת ה-endpoint ב-`contact.formEndpoint`. הטופס שולח `FormData` ב-POST ומציג
הודעת הצלחה או שגיאה. יש בו גם שדה מלכודת נגד ספאם.

## לפני העלייה לאוויר

1. למלא `SITE_URL` (או את השדה `site` ב-`astro.config.mjs`) בכתובת הסופית —
   כך ייווצרו תגי `canonical` ו-Open Graph עם כתובות מלאות.
2. למלא לפחות ערוץ קשר אחד.
3. `npm run build` ולהעלות את תוכן `dist/`.

## מבנה

```
src/
  assets/        תמונות המקור (Astro מייצר מהן גרסאות webp רספונסיביות)
  components/    Header, Footer, Gallery, Lightbox, PageHeader
  content/       site.ts (מלל) · works.ts (עבודות)
  layouts/       Base.astro — meta, OG, structured data, גופנים
  lib/           images.ts — טעינת נכסי תמונה לפי נתיב
  pages/         index · paintings · sculpture · about · contact · 404
  styles/        global.css
```

הגופנים (Frank Ruhl Libre ו-Heebo) מוגשים מהאתר עצמו דרך `@fontsource` —
אין קריאות לשרתים חיצוניים ואין מעקב.
