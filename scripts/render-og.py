"""Render the static Open Graph cards. Re-run after changing the lockup."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "og"
SERIF = Path("/tmp/og-font/InstrumentSerif-Regular.ttf")
INTER = Path("/usr/share/fonts/truetype/macos/Inter-Medium.ttf")
INTER_REG = Path("/usr/share/fonts/truetype/macos/Inter-Regular.ttf")

W, H = 1200, 630
BG = (243, 241, 235)
INK = (26, 25, 22)
MUTED = (78, 74, 68)
RULE = (210, 206, 198)


def card(kicker: str, title: str, line: str, filename: str) -> None:
    image = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(image)
    serif = ImageFont.truetype(str(SERIF), 92)
    medium = ImageFont.truetype(str(INTER), 28)
    regular = ImageFont.truetype(str(INTER_REG), 22)
    label = ImageFont.truetype(str(INTER), 18)

    draw.text((80, 148), kicker, font=label, fill=MUTED)
    draw.text((80, 186), title, font=serif, fill=INK)
    draw.line((80, 430, 420, 430), fill=RULE, width=1)
    draw.text((80, 456), line, font=medium, fill=INK)
    draw.text((80, 530), "ash.bhimasani.com", font=regular, fill=MUTED)
    image.save(OUT / filename, "PNG", optimize=True)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    card(
        "PRODUCT DESIGNER  &  SOFTWARE ENGINEER",
        "Ash Bhimasani",
        "New York  ·  Austin",
        "ash.png",
    )
    card(
        "ABOUT",
        "Ash Bhimasani",
        "I build my designs.",
        "about.png",
    )
    card(
        "WORK",
        "Ash Bhimasani",
        "Case studies and projects",
        "work.png",
    )


if __name__ == "__main__":
    main()
