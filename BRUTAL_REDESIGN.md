# OPERATION: THROAT CRUSH
## Design Direction - LOCKED

---

### WHAT WE LEARNED (THE HARD WAY)

**Every "bold display font" is owned by some corporate lifestyle brand:**
- Anton = Nike
- Bebas Neue = Olympic Speedo
- Rubik Dirt = Under Armour "distressed"
- Black Ops One = CrossFit/LA Bootcamp
- IBM Plex Mono = Williamsburg Coffee Shop

**The brutality isn't in the font. It's in how you USE the type.**

Drug Church doesn't use special fonts. They use:
1. Hand-drawn type (not achievable with web fonts)
2. Standard tight condensed type (Impact, etc.) as a MASK with images bleeding through

---

### THE WORKING FORMULA

**Hero Title Treatment:**
- Font: `Impact, 'Arial Black', sans-serif` - basic, tight, not trying to be special
- Image bleeds THROUGH the text using `background-clip: text`
- Same image in background (dimmed) and text (brighter) with `background-attachment: fixed` so they align
- `text-stroke: 3px` in bone color for legibility
- Grayscale filter with high contrast

**What DOESN'T work:**
- Text shadows (kills the background-clip effect)
- Chromatic aberration on masked text (same problem)
- Trying to find a "brutal font" - they're all owned by brands
- Designery bullshit like "01 — HOME" index numbers
- Vertical "SCROLL" text accents

---

### COLOR PALETTE - LOCKED

```css
--brutal-black: #000000;   /* Pure void, not #0a0a0a */
--brutal-bone: #e8e4dc;    /* Off-white, like dried bone */
--brutal-red: #ff2200;     /* Single accent, used sparingly */
```

That's it. No pink. No cyan. No gradients.

---

### TYPOGRAPHY RULES

**Headlines/Titles:**
- Impact or Arial Black for masked text treatments
- ALL CAPS
- Tight line-height (0.85)
- Negative letter-spacing

**Body/UI Text:**
- System sans or IBM Plex Mono
- Bone color on black
- Wide letter-spacing for uppercase labels
- No fancy styling - just readable

**Links:**
- No underlines or borders by default
- Red on hover
- Simple, functional

---

### WHAT NEEDS TO HAPPEN FOR REST OF SITE

**Global Changes:**
1. Replace all pink/cyan (`radical-primary`, `radical-secondary`) with bone/red
2. Kill all `backdrop-blur` and glass morphism
3. Kill all `border-radius`
4. Replace dot/grid backgrounds with the noise texture
5. Update navbar to match brutal palette
6. Update footer to match

**Section-by-Section:**

**Who I Am Section:**
- Black background
- Kill the numbered boxes with hover states
- Stacked content, high contrast
- Maybe same image-mask treatment for section headers

**Visual/Image Section:**
- All images pushed to high-contrast B&W
- Keep the posterized treatment but in grayscale
- Remove colored overlays

**Quote Section (CRT):**
- KEEP the CRT effect - it works
- Update colors to bone/black instead of cyan
- Maybe increase the scanline intensity

**CTA Section:**
- Black background
- Kill the decorative circles
- Stark, simple "Let's talk" energy
- Red accent only on interactive elements

---

### CSS CLASSES THAT WORK

```css
/* Hero background */
.brutal-hero {
  background: #000000;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

/* Noise overlay */
.brutal-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,..."); /* noise SVG */
  opacity: 0.08;
  pointer-events: none;
  z-index: 1;
}

/* Title base */
.brutal-title {
  font-family: Impact, 'Arial Black', sans-serif;
  font-weight: 900;
  font-size: clamp(5rem, 20vw, 16rem);
  line-height: 0.85;
  letter-spacing: -0.03em;
  text-transform: uppercase;
}

/* Image-through-text mask */
.brutal-text-mask {
  background-image: url('/path/to/image.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: grayscale(100%) contrast(1.3) brightness(1.2);
  -webkit-text-stroke: 3px var(--brutal-bone);
}

/* Scanlines */
.brutal-scanlines::after {
  content: "";
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    transparent 0px,
    transparent 2px,
    rgba(0, 0, 0, 0.15) 2px,
    rgba(0, 0, 0, 0.15) 4px
  );
  pointer-events: none;
  z-index: 2;
}
```

---

### REFERENCE ENERGY

**Drug Church album covers:**
- Image bleeding through tight condensed type
- High contrast B&W
- Not trying to be "designed"

**FIGHT poster:**
- Massive type that dominates
- Black void
- Grid tension

**"BARELY ALIVE" collage:**
- Existential text as design element
- Wireframe 3D
- Stacked words with different weights

---

### THE BOTTOM LINE

Stop trying to find a "brutal font."

The brutality is in:
1. How you use the type (image masks, scale, tension)
2. What you remove (all the designery portfolio bullshit)
3. The contrast and commitment to black/bone/red only

The current hero works. Now apply the same energy to every other section.
