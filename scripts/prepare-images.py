"""Prepare web-ready masters for the Rachel Paz Avgil site.

Paintings arrive as square PNGs with the artwork centred on white; we trim the
white padding so each work keeps its true proportions. Sculpture and portrait
photographs are studio shots on a seamless background and are left uncropped.
"""
import os
from PIL import Image, ImageChops

FULL = "/Users/elchaiavgil/Projects/avgil-rachel/photos /גודל מלא"
OUT = "/Users/elchaiavgil/Projects/avgil-rachel/site/src/assets"
MAX_EDGE = 2000
QUALITY = 88

# slug -> (source filename, trim_white)
PAINTINGS = {
    "mishkan-bamidbar":        ("RVE07953.png", True),
    "kotel-and-heavenly-city": ("RVE07956.png", True),
    "alpine-lake-framed":      ("RVE07959.png", True),
    "burning-bush":            ("RVE07968.png", True),
    "menorah-and-crown":       ("RVE07972.png", True),
    "towering-books":          ("RVE07975.png", True),
    "roses-bouquet":           ("RVE07978.png", True),
    "torah-in-the-cosmos":     ("RVE07982.png", True),
    "two-elders":              ("RVE07985.png", True),
    "music-and-dance":         ("RVE07987.png", True),
    "lake-and-waterfalls":     ("RVE07990.png", True),
    "altar-in-flame":          ("RVE08006.png", True),
    "jerusalem-in-his-hands":  ("RVE08009.png", True),
    "scholar-at-the-book":     ("RVE08012.png", True),
    "elephant-family":         ("RVE08016.png", True),
    "lion":                    ("RVE08018.png", True),
    "elder-over-the-page":     ("RVE08022.png", True),
    "cave-of-the-patriarchs":  ("RVE08023.png", True),
    "infant-in-light":         ("RVE08027.png", True),
    "night-covenant":          ("RVE08029.png", True),
    "tefillin-still-life":     ("RVE08034.png", True),
    "hands-in-the-curtain":    ("RVE08036.png", True),
    "portrait-in-dark-frame":  ("RVE08044.png", True),
    "raised-hand-portrait":    ("RVE08049.png", True),
    "newborn-in-his-arms":     ("RVE08052.png", True),
    "ima":                     ("RVE08065.png", True),
    "child-in-pink":           ("RVE08068.png", True),
    "girl-with-flower-crown":  ("RVE08071.png", True),
    "breaking-wave":           ("RVE080780.png", True),
    "jug-and-peaches":         ("RVE08086.png", True),
    "bottle-and-onion":        ("RVE08092.png", True),
    "girl-with-white-ribbon":  ("RVE08094.png", True),
    "roses-and-butterflies":   ("RVE08098.png", True),
    "shrine-of-light":         ("RVE08230.png", True),
}

SCULPTURES = {
    "tree-of-life-table": ("RVE08160-Edit.jpg", False),
    "tiger":              ("RVE08180-Edit.jpg", False),
    "stag-on-driftwood":  ("RVE08188-Edit.jpg", False),
    "dancer":             ("RVE08211-Edit-Edit.jpg", False),
    "shofar-pair":        ("RVE08359.jpg", False),
    "horn-player":        ("RVE08366.jpg", False),
    "tambourine-player":  ("RVE08371.jpg", False),
    "harp-player":        ("RVE08372-Edit.jpg", False),
    "halleluyah-sign":    ("RVE08376-Edit.jpg", False),
    "trumpet-player":     ("RVE08377.jpg", False),
    "cymbals-player":     ("RVE08383-Edit.jpg", False),
    "hands-planter":      ("RVE08403-Edit.jpg", False),
}

PEOPLE = {
    "rachel-portrait":  ("RVE08400.jpg", False),
    "rachel-with-work": ("RVE08122-Edit.jpg", False),
}


def content_bbox(im, thresh=12, pad_ratio=0.004):
    """Bounding box of everything that is not the white studio backdrop."""
    grey = im.convert("L")
    diff = ImageChops.difference(grey, Image.new("L", grey.size, 255))
    mask = diff.point(lambda p: 255 if p > thresh else 0)
    bb = mask.getbbox()
    if bb is None:
        return None
    l, t, r, b = bb
    pad = int(max(im.size) * pad_ratio)
    return (max(0, l - pad), max(0, t - pad),
            min(im.width, r + pad), min(im.height, b + pad))


def process(slug, filename, trim, subdir):
    src = os.path.join(FULL, filename)
    im = Image.open(src)
    if im.mode in ("RGBA", "LA", "P"):
        im = im.convert("RGBA")
        flat = Image.new("RGB", im.size, (255, 255, 255))
        flat.paste(im, mask=im.split()[-1])
        im = flat
    else:
        im = im.convert("RGB")

    if trim:
        bb = content_bbox(im)
        if bb:
            im = im.crop(bb)

    if max(im.size) > MAX_EDGE:
        scale = MAX_EDGE / max(im.size)
        im = im.resize((round(im.width * scale), round(im.height * scale)), Image.LANCZOS)

    dest_dir = os.path.join(OUT, subdir)
    os.makedirs(dest_dir, exist_ok=True)
    dest = os.path.join(dest_dir, slug + ".jpg")
    im.save(dest, "JPEG", quality=QUALITY, optimize=True, progressive=True,
            subsampling=1)
    kb = os.path.getsize(dest) // 1024
    print(f"{subdir}/{slug}.jpg  {im.width}x{im.height}  ratio={im.width/im.height:.3f}  {kb}KB   <- {filename}")


for slug, (fn, trim) in PAINTINGS.items():
    process(slug, fn, trim, "paintings")
print()
for slug, (fn, trim) in SCULPTURES.items():
    process(slug, fn, trim, "sculpture")
print()
for slug, (fn, trim) in PEOPLE.items():
    process(slug, fn, trim, "people")
