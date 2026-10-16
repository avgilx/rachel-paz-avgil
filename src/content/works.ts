/**
 * מאגר העבודות של האתר.
 *
 * להוספת עבודה חדשה:
 *   1. לשמור את קובץ התמונה תחת  src/assets/paintings/  או  src/assets/sculpture/
 *   2. להוסיף כאן רשומה אחת עם id ייחודי, category, image ו-alt.
 *   3. זהו. הגלריה, ה-lightbox והאופטימיזציה של התמונה מתעדכנים לבד.
 *
 * שדות ריקים פשוט לא מוצגים למבקר — לעולם לא מופיע שדה ריק באתר.
 *
 * ⚠️ TODO פנימי: title / medium / year / dimensions / availability עדיין לא ידועים
 * לאף עבודה. כשרחל תמסור אותם — למלא כאן, והם יופיעו אוטומטית בעמוד היצירה.
 * אין להמציא ערכים.
 */

export type Category = 'paintings' | 'sculpture';

export interface Work {
  /** מזהה ייחודי, משמש גם ככתובת התמונה */
  id: string;
  /** שם היצירה — ריק כל עוד לא נמסר */
  title?: string;
  category: Category;
  /** נתיב יחסי בתוך src/assets */
  image: string;
  /** תיאור חזותי בעברית — חובה. משמש כ-alt וגם ככיתוב ב-lightbox */
  alt: string;
  /** טכניקה, למשל 'שמן על בד' */
  medium?: string;
  /** שנת יצירה */
  year?: string;
  /** מידות, למשל '80×60 ס״מ' */
  dimensions?: string;
  /** זמינות, למשל 'זמינה לרכישה' */
  availability?: string;
  /** טקסט אוצרותי של רחל. אם קיים — מוצג ב-lightbox במקום ה-alt */
  description?: string;
  /** מיקום באזור "עבודות נבחרות" בעמוד הראשי. 1 = ראשון. ריק = לא מוצג שם. */
  featured?: number;
  /** סדר בתוך הגלריה של הקטגוריה */
  displayOrder?: number;
}

export const works: Work[] = [
  // ─────────────────────────────  ציורי שמן  ─────────────────────────────
  {
    id: 'mishkan-bamidbar',
    category: 'paintings',
    image: 'paintings/mishkan-bamidbar.jpg',
    alt: 'ציור בגוני חול וטרקוטה: מחנה אוהלים כהים ערוך במעגלים סביב חצר מוקפת יריעות לבנות ובתוכה מבנה זהוב. עמוד אור מיתמר מן החצר אל עבר פסגת הר, ובקדמת הציור זורם נחל בין סלעים. הציור נתון במסגרת מוזהבת.',
    displayOrder: 1,
  },
  {
    id: 'kotel-and-heavenly-city',
    category: 'paintings',
    image: 'paintings/kotel-and-heavenly-city.jpg',
    alt: 'ציור ובו חומת אבנים גדולות, דמות עוטת גלימה לבנה ניצבת לצידה, וקילוחי מים ואור נשפכים מטה. במרחק נגלית עיר בהירה ובה שולחן ערוך ודמויות זעירות, ומעליה ענני אור וקרני שמש. הציור נתון במסגרת מעוטרת.',
    featured: 1,
    displayOrder: 2,
  },
  {
    id: 'torah-in-the-cosmos',
    category: 'paintings',
    image: 'paintings/torah-in-the-cosmos.jpg',
    alt: 'ציור בגוני כחול לילה ובו דמות עוטה טלית לבנה מחזיקה ספר תורה, ניצבת על אי אבן שעליו מבנה מקדש. האי שט בחלל בין כוכבים וגלקסיות, ולמרגלותיו כדור הארץ. הציור נתון במסגרת מוזהבת.',
    featured: 2,
    displayOrder: 3,
  },
  {
    id: 'raised-hand-portrait',
    category: 'paintings',
    image: 'paintings/raised-hand-portrait.jpg',
    alt: 'ציור דיוקן של איש מבוגר בעל זקן לבן וכובע כהה. ידו האחת מורמת לברכה והאחרת נחה על ספר פתוח, על רקע בגוני חום וירוק עמוק.',
    displayOrder: 4,
  },
  {
    id: 'towering-books',
    category: 'paintings',
    image: 'paintings/towering-books.jpg',
    alt: 'ציור ובו ספרים גדולים בכריכות כהות ניצבים זה על זה כמגדל, על רקע שמי ערב בגוני תכלת וזהב ומצוק אבן. למרגלותיהם נראית דמות אדם זעירה.',
    featured: 3,
    displayOrder: 5,
  },
  {
    id: 'burning-bush',
    category: 'paintings',
    image: 'paintings/burning-bush.jpg',
    alt: 'ציור מדברי ובו שיח ירוק בוער בלב כדור אש בין שני מדרונות הרים חומים. דמות עוטת גלימה ניצבת למרגלות ההר ולצידה מקל רועים, ובקרבת המים רועה עז. הציור נתון במסגרת מוזהבת.',
    displayOrder: 6,
  },
  {
    id: 'shrine-of-light',
    category: 'paintings',
    image: 'paintings/shrine-of-light.jpg',
    alt: 'ציור ובו דמות עטופה בבד תכלת ולבן מרחפת באור מעל מבנה אבן מוכתר בכיפה, ולמרגלותיו דמויות זעירות במרחב חולי. הציור נתון במסגרת מוזהבת.',
    displayOrder: 7,
  },
  {
    id: 'menorah-and-crown',
    category: 'paintings',
    image: 'paintings/menorah-and-crown.jpg',
    alt: 'ציור ובו מנורת שבעה קנים דולקת על מסד זהוב, מעליה כתר עטוף להבות, ולצידה אישה בלבוש חגיגי. סביב ניצבות דמויות עטויות לבן על רקע קיר אבנים ווילון אדום, ואלכסון של אור כחול חוצה את התמונה. הציור נתון במסגרת כהה.',
    displayOrder: 8,
  },
  {
    id: 'altar-in-flame',
    category: 'paintings',
    image: 'paintings/altar-in-flame.jpg',
    alt: 'ציור ובו מבנה מקדש זהוב מרחף בתוך מערבולת של אש וענן, ומתחתיו מזבח אבן בהיר עטוף אור. הרקע כהה בגוני כחול וחום.',
    displayOrder: 9,
  },
  {
    id: 'jerusalem-in-his-hands',
    category: 'paintings',
    image: 'paintings/jerusalem-in-his-hands.jpg',
    alt: 'ציור ובו פני זקן בעל זקן לבן עולים מתוך רקע אפל, ומתחתיו זוג ידיים אוחזות בעיר עתיקה על גבעה — בתי אבן, כיפות ומגדלים באור זהוב.',
    displayOrder: 10,
  },
  {
    id: 'music-and-dance',
    category: 'paintings',
    image: 'paintings/music-and-dance.jpg',
    alt: 'ציור צבעוני ובו מערבולת אור במרכז, וסביבה כלי נגינה — עוגב, נבל ומצילתיים — ודמויות רוקדות ומנגנות. בתחתית הציור דמות עוטת לבן תוקעת בשופר.',
    displayOrder: 11,
  },
  {
    id: 'night-covenant',
    category: 'paintings',
    image: 'paintings/night-covenant.jpg',
    alt: 'ציור לילי בגוני חום ואפור ובו מדורה בוערת בשדה, לצידה בתרי בעלי חיים, עיט פורש כנפיים בשמים המעוננים, ודמות עטופה גלימה שרועה על האדמה.',
    displayOrder: 12,
  },
  {
    id: 'infant-in-light',
    category: 'paintings',
    image: 'paintings/infant-in-light.jpg',
    alt: 'ציור ובו עובר מכורבל בתוך כדור אור בגוני כתום ואדום. בצד אחד זורח כתם אור לבן, ובצד האחר נראים אותיות ושרטוט על רקע כהה.',
    featured: 6,
    displayOrder: 13,
  },
  {
    id: 'hands-in-the-curtain',
    category: 'paintings',
    image: 'paintings/hands-in-the-curtain.jpg',
    alt: 'עבודת תבליט בגוני כחול ושחור עמוקים ובה וילון כבד; שני זוגות אצבעות אוחזות ביריעה ופותחות בה סדק, ומתוכו מבצבצת זרוע חשופה.',
    displayOrder: 14,
  },
  {
    id: 'cave-of-the-patriarchs',
    category: 'paintings',
    image: 'paintings/cave-of-the-patriarchs.jpg',
    alt: 'ציור צבעוני של מבנה אבן מונומנטלי בגוני כתום ואדום עם צריחים, מדרגות רחבות עולות אליו ודמויות אנשים בדרכן פנימה, תחת שמים כחולים.',
    displayOrder: 15,
  },
  {
    id: 'elder-over-the-page',
    category: 'paintings',
    image: 'paintings/elder-over-the-page.jpg',
    alt: 'ציור ובו זקן עוטה טלית פסים, רכון מעל ספר פתוח: ידו האחת נשענת על ראשו והאחרת מונחת על הדף. הרקע חום ואחיד.',
    displayOrder: 16,
  },
  {
    id: 'scholar-at-the-book',
    category: 'paintings',
    image: 'paintings/scholar-at-the-book.jpg',
    alt: 'ציור ובו דמות מבוגרת בגלימה שחורה רקומה זהב ובכובע כחול, יושבת מול ספר פתוח גדול על רקע ארון ספרים מלא.',
    displayOrder: 17,
  },
  {
    id: 'portrait-in-dark-frame',
    category: 'paintings',
    image: 'paintings/portrait-in-dark-frame.jpg',
    alt: 'ציור דיוקן של איש מבוגר בעל זקן לבן, כובע שחור וחליפה כהה, על רקע חום. הציור נתון במסגרת עץ כהה ורחבה.',
    displayOrder: 18,
  },
  {
    id: 'two-elders',
    category: 'paintings',
    image: 'paintings/two-elders.jpg',
    alt: 'ציור בגוני אפור וכסף ובו שתי דמויות של זקנים: האחת ברקע אוחזת ספר, והשנייה בקדמת הציור עטופה בגלימה לבנה, פניה מחייכות ומבטה רך. הציור נתון במסגרת מעוטרת.',
    displayOrder: 19,
  },
  {
    id: 'newborn-in-his-arms',
    category: 'paintings',
    image: 'paintings/newborn-in-his-arms.jpg',
    alt: 'ציור ובו איש מחייך בחולצה לבנה וטלית על כתפיו, אוחז בזרועותיו תינוק עטוף לבן. הציור נתון במסגרת מוזהבת רחבה.',
    displayOrder: 20,
  },
  {
    id: 'ima',
    category: 'paintings',
    image: 'paintings/ima.jpg',
    alt: 'ציור דיוקן של אישה מבוגרת עם כיסוי ראש כהה, פניה מחייכות וידיה פשוטות לפנים. לצידה נכתבה המילה ״אמא״ באותיות זהב ומעליה כתר. הציור נתון במסגרת מוזהבת.',
    displayOrder: 21,
  },
  {
    id: 'tefillin-still-life',
    category: 'paintings',
    image: 'paintings/tefillin-still-life.jpg',
    alt: 'ציור טבע דומם בגוני חום וחול ובו ספר פתוח, ערימת ספרים כהים, תפילין וטלית מקופלת, כוסית תה וקופסת עץ תלויה על הקיר.',
    displayOrder: 22,
  },
  {
    id: 'breaking-wave',
    category: 'paintings',
    image: 'paintings/breaking-wave.jpg',
    alt: 'ציור ובו גל ים גדול מתגלגל ומתנפץ לקצף לבן, בגוני כחול עז וטורקיז תחת שמים מעוננים. פני הצבע בנויים בשכבות עבות ומורגשות.',
    displayOrder: 23,
  },
  {
    id: 'lake-and-waterfalls',
    category: 'paintings',
    image: 'paintings/lake-and-waterfalls.jpg',
    alt: 'ציור נוף ובו אגם כחול רחב, מפלי מים ניתזים בין סלעים, והרים מושלגים ברקע תחת שמים בהירים.',
    displayOrder: 24,
  },
  {
    id: 'alpine-lake-framed',
    category: 'paintings',
    image: 'paintings/alpine-lake-framed.jpg',
    alt: 'ציור נוף ובו הרים מושלגים בגוני ורוד ואפור, אגם שקט לרגליהם, עצי מחט כהים ואבנים על גדת המים. הציור נתון במסגרת מוזהבת.',
    displayOrder: 25,
  },
  {
    id: 'lion',
    category: 'paintings',
    image: 'paintings/lion.jpg',
    alt: 'ציור דיוקן של אריה בעל רעמה עשירה בגוני חום וזהב, מבטו ישיר, על רקע רך בגוני ירוק וקרם.',
    displayOrder: 26,
  },
  {
    id: 'elephant-family',
    category: 'paintings',
    image: 'paintings/elephant-family.jpg',
    alt: 'ציור ובו פילה בוגרת ניצבת בחזית שדה עשב יבש וסביבה שני פילים צעירים, על רקע חום וכתום של סוואנה.',
    displayOrder: 27,
  },
  {
    id: 'girl-with-flower-crown',
    category: 'paintings',
    image: 'paintings/girl-with-flower-crown.jpg',
    alt: 'ציור דיוקן של ילדה מחייכת עוטרת זר פרחים לבנים, עטופה בצעיף תחרה, על רקע כהה בגוני זית וזהב.',
    displayOrder: 28,
  },
  {
    id: 'child-in-pink',
    category: 'paintings',
    image: 'paintings/child-in-pink.jpg',
    alt: 'ציור דיוקן של פעוטה בעלת תלתלים חומים ועיניים כחולות, לבושה מעיל ורוד עם צווארון לבן, על רקע כתום רך.',
    displayOrder: 29,
  },
  {
    id: 'girl-with-white-ribbon',
    category: 'paintings',
    image: 'paintings/girl-with-white-ribbon.jpg',
    alt: 'ציור דיוקן של ילדה בשמלה לבנה עם צווארון מסולסל וסרט לבן בשיערה, על רקע חום רך.',
    displayOrder: 30,
  },
  {
    id: 'roses-and-butterflies',
    category: 'paintings',
    image: 'paintings/roses-and-butterflies.jpg',
    alt: 'עבודת תבליט ובה ורדים אדומים וכתומים ופרפרים בגוני זהב ולבן, בולטים מעל רקע חום עשיר.',
    displayOrder: 31,
  },
  {
    id: 'roses-bouquet',
    category: 'paintings',
    image: 'paintings/roses-bouquet.jpg',
    alt: 'ציור עדין של זר ורדים אדומים ולבנים על רקע בהיר בגוני תכלת וקרם. הציור נתון במסגרת מוזהבת.',
    displayOrder: 32,
  },
  {
    id: 'jug-and-peaches',
    category: 'paintings',
    image: 'paintings/jug-and-peaches.jpg',
    alt: 'ציור טבע דומם ובו קנקן חרס לבן ולצידו שלושה אפרסקים ועלים, על משטח כהה ורקע חום.',
    displayOrder: 33,
  },
  {
    id: 'bottle-and-onion',
    category: 'paintings',
    image: 'paintings/bottle-and-onion.jpg',
    alt: 'ציור טבע דומם צר וגבוה ובו בקבוק זכוכית ענברי, קערית מתכת, בצל ושן שום מונחים על משטח בהיר, על רקע חום.',
    displayOrder: 34,
  },

  // ───────────────────────────────  פיסול  ───────────────────────────────
  {
    id: 'halleluyah-sign',
    category: 'sculpture',
    image: 'sculpture/halleluyah-sign.jpg',
    alt: 'פסל מרשת מתכת ובו דמות עטופה גלימה מניפה שרביט כלפי מעלה, ולצידה שלט זהוב ועליו הכתובת ״הללו – יה, הללו בצלצלי שמע, כל הנשמה תהלל – יה, הללו – יה״.',
    featured: 4,
    displayOrder: 1,
  },
  {
    id: 'stag-on-driftwood',
    category: 'sculpture',
    image: 'sculpture/stag-on-driftwood.jpg',
    alt: 'פסל של איל בעל קרניים מסועפות הניצב על גזע עץ סחוף, בגוני עץ טבעיים של חום וזהב.',
    featured: 5,
    displayOrder: 2,
  },
  {
    id: 'harp-player',
    category: 'sculpture',
    image: 'sculpture/harp-player.jpg',
    alt: 'פסל מרשת מתכת ובו דמות נשענת אל נבל זהוב גדול בעל מיתרים דקים, ראשה מוטה וידה מונחת לצד פניה.',
    displayOrder: 3,
  },
  {
    id: 'shofar-pair',
    category: 'sculpture',
    image: 'sculpture/shofar-pair.jpg',
    alt: 'פסל מרשת מתכת ובו שתי דמויות ניצבות זו לצד זו: האחת עטופה בטלית מרושתת, והשנייה מרימה שופר זהוב אל פיה.',
    displayOrder: 4,
  },
  {
    id: 'trumpet-player',
    category: 'sculpture',
    image: 'sculpture/trumpet-player.jpg',
    alt: 'פסל מרשת מתכת ובו דמות כורעת, ראשה מוטה לאחור וידיה מרימות חצוצרה זהובה כלפי מעלה.',
    displayOrder: 5,
  },
  {
    id: 'tambourine-player',
    category: 'sculpture',
    image: 'sculpture/tambourine-player.jpg',
    alt: 'פסל מרשת מתכת ובו דמות כורעת על ברך אחת, זרוע אחת מונפת מעלה והשנייה אוחזת בתוף מרים זהוב.',
    displayOrder: 6,
  },
  {
    id: 'cymbals-player',
    category: 'sculpture',
    image: 'sculpture/cymbals-player.jpg',
    alt: 'פסל מרשת מתכת ובו דמות יושבת על ברכיה ואוחזת שני מצלתיים זהובים — האחד מול החזה והשני מונף מעלה.',
    displayOrder: 7,
  },
  {
    id: 'horn-player',
    category: 'sculpture',
    image: 'sculpture/horn-player.jpg',
    alt: 'פסל מרשת מתכת ובו דמות חובשת כובע, גופה נטוי לאחור, מנגנת בכלי נשיפה זהוב ארוך המונף כלפי מעלה.',
    displayOrder: 8,
  },
  {
    id: 'dancer',
    category: 'sculpture',
    image: 'sculpture/dancer.jpg',
    alt: 'פסל של רקדנית בשמלה שחורה נוצצת עם גדילים: גופה נטוי לאחור בקשת, רגל אחת מונפת מעלה, זרועותיה פרושות ושיערה הארוך יורד כלפי מטה.',
    displayOrder: 9,
  },
  {
    id: 'tiger',
    category: 'sculpture',
    image: 'sculpture/tiger.jpg',
    alt: 'פסל של נמר בגוני כתום ולבן, פרוש בתנוחת זינוק על משטח זכוכית עגול, פניו מופנים קדימה ושפמו עשוי חוטים דקים.',
    displayOrder: 10,
  },
  {
    id: 'tree-of-life-table',
    category: 'sculpture',
    image: 'sculpture/tree-of-life-table.jpg',
    alt: 'שולחן עגול שבסיסו גזע עץ מגולף על שורשיו, ועליו משטח זכוכית ובתוכו עץ חיים מסועף בגוני זהב.',
    displayOrder: 11,
  },
  {
    id: 'hands-planter',
    category: 'sculpture',
    image: 'sculpture/hands-planter.jpg',
    alt: 'פסל בצורת שתי כפות ידיים גדולות ההופכות לאדנית, ובתוכו צמח ירוק רחב עלים. הפסל ניצב על רצפת אבן בהירה.',
    displayOrder: 12,
  },

];

export const byCategory = (category: Category) =>
  works
    .filter((w) => w.category === category)
    .sort((a, b) => (a.displayOrder ?? 999) - (b.displayOrder ?? 999));

export const featuredWorks = () =>
  works
    .filter((w) => typeof w.featured === 'number')
    .sort((a, b) => (a.featured ?? 999) - (b.featured ?? 999));

export const workById = (id: string) => works.find((w) => w.id === id);

/** האם יש לעבודה פרטים אמיתיים להצגה מעבר לתיאור */
export const hasDetails = (w: Work) =>
  Boolean(w.medium || w.year || w.dimensions || w.availability);
