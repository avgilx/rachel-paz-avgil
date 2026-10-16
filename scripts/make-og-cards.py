"""כרטיסי שיתוף 1200x630 — היצירה במלואה על רקע שנהב, בלי חיתוך."""
from PIL import Image
import os
SRC = "/Users/elchaiavgil/Projects/avgil-rachel/site/src/assets"
OUT = "/Users/elchaiavgil/Projects/avgil-rachel/site/public"
W, H, BG, PAD = 1200, 630, (250, 247, 241), 34

cards = {
    "og-default.jpg": "paintings/mishkan-bamidbar.jpg",
    "og-sculpture.jpg": "sculpture/halleluyah-sign.jpg",
    "og-about.jpg": "people/rachel-portrait.jpg",
}

for name, rel in cards.items():
    art = Image.open(os.path.join(SRC, rel)).convert("RGB")
    art.thumbnail((W - PAD * 2, H - PAD * 2), Image.LANCZOS)
    canvas = Image.new("RGB", (W, H), BG)
    canvas.paste(art, ((W - art.width) // 2, (H - art.height) // 2))
    canvas.save(os.path.join(OUT, name), "JPEG", quality=86, optimize=True, progressive=True)
    print(name, canvas.size, f"{os.path.getsize(os.path.join(OUT,name))//1024}KB  <- {rel}")
