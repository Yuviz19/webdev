# CSS (Cascading Style Sheet)

- not a programming language
  - it is rather used to give style to a plain html site
- 3 ways to add style to html code
  1. inLine (in html tags) (NO!)
  2. in HTML script as style tag (OK!)
  3. as a separate css file (YES!)

## 1. The Core Anatomy of CSS

Before looking at properties, remember how CSS attaches itself to HTML. It operates on a **Selector-Property-Value** blueprint.

```css
selector {
  property: value;
}
```

* **Selector:** The target HTML element (e.g., `h1`, `.class-name`, `#id-name`).
* **Property:** The feature you want to change (e.g., `color`, `font-size`).
* **Value:** The setting you want to apply (e.g., `red`, `16px`).

## 2. Text & Typography Styling

These properties handle how your copy looks on the page. They inherit by default, meaning if you apply them to the `<body>`, most child elements will inherit them.

### `font-family`

Defines the typeface. Always provide fallback fonts separated by commas, ending with a generic family (`sans-serif`, `serif`, `monospace`).

```css
p {
  font-family: "Inter", "Helvetica Neue", Arial, sans-serif;
}
```

### `font-size`

Sets text size. While beginners often start with pixels (`px`), it is best practice to use relative units like `rem` (Root EM) for accessibility. `1rem` typically equals the browser's default font size (usually `16px`).

```css
h1 {
  font-size: 2.5rem; /* 2.5 times the root font size (~40px) */
}
p {
  font-size: 1rem;   /* ~16px */
}

```

### `font-weight`

Controls the thickness of text. Can use keywords or numeric values (typically spanning 100 to 900).

```css
span {
  font-weight: bold; /* Or use numbers: 400 = regular, 700 = bold */
}

```

### `line-height`

Controls the spacing between lines of text. Use unitless numbers (like `1.5`) as a multiplier of the current font size to maintain proportional scaling.

```css
p {
  line-height: 1.6; /* Highly readable spacing for body text */
}

```

### `text-align`

Aligns text *inside* its parent container.

```css
h2 {
  text-align: center; /* Left, right, center, or justify */
}

```

### `text-decoration`

Mainly used to add or remove underlines. Essential for styling links.

```css
a {
  text-decoration: none; /* Removes the default underline from links */
}

```

## 3. Colors & Backgrounds

CSS offers multiple ways to define color: Keywords (`red`), Hexadecimal (`#ff0000`), RGB (`rgb(255, 0, 0)`), and HSL (`hsl(0, 100%, 50%)`).

### `color`

Changes the text color.

```css
body {
  color: #1a1a1a; /* Dark charcoal for clean contrast */
}

```

### `background-color`

Changes the surface color of an element.

```css
div {
  background-color: rgba(0, 0, 0, 0.05); /* 5% opaque black */
}

```

### `opacity`

Controls the transparency of the entire element (including its text). Ranges from `0.0` (invisible) to `1.0` (fully solid).

```css
.card-disabled {
  opacity: 0.6;
}

```

## 4. The Box Model (Spacing & Sizing)

Every single element in CSS is a rectangular box. Understanding how these layers interact is crucial for predicting layouts.

* **Content:** The actual text or image.
* **Padding:** Clear space *inside* the element, surrounding the content. Inherits the background color.
* **Border:** A line wrapping around the padding.
* **Margin:** Clear space *outside* the element, separating it from other elements.

### `box-sizing: border-box`

> **Important Note:** By default, adding padding or borders makes an element wider than the width you specified. To fix this, apply `box-sizing: border-box` to every element. It forces the browser to include padding and borders *inside* your defined width.

```css
* {
  box-sizing: border-box; /* Put this at the top of every CSS file */
}

```

### `width` & `height`

Sets the dimensions of the content area.

```css
.hero-image {
  width: 100%;       /* Spans full width of its parent */
  max-width: 600px;  /* Prevents it from blowing up on large screens */
  height: auto;      /* Maintains aspect ratio */
}

```

### `padding`

Adds internal breathing room. You can specify all sides at once or individually.

```css
.btn {
  padding: 12px 24px; /* Shorthand: Top/Bottom Right/Left */
}

/* Individual breakdown equivalents:
   padding-top: 12px;
   padding-right: 24px;
   padding-bottom: 12px;
   padding-left: 24px; 
*/
```

### `margin`

Adds external separation. A common trick to center a block element horizontally within its container is setting left and right margins to `auto`.

```css
.container {
  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto; /* Centers the block if it has a fixed width */
}

/* Shorthand equivalent: */
.container {
  margin: 40px auto; /* Top/Bottom Left/Right */
}
```

## 5. Borders & Radii

Properties that define structural outlines and edge shapes.

### `border`

Shorthand property to set width, style, and color in a single line.

```css
input {
  border: 1px solid #ccc; /* Width | Style | Color */
}
```

* **Common styles:** `solid`, `dashed`, `dotted`, `none`.

### `border-radius`

Rounds the corners of an element's box.

```css
.avatar {
  border-radius: 8px;   /* Subtle rounded corners */
}
.circle {
  border-radius: 50%;   /* Makes a perfect square element into a circle */
}
```

## 6. Visibility & Display Basics

Even without diving into complex grid or flex layouts, you must understand how elements naturally show up on the page.

### `display`

Determines the elemental nature of the box.

```css
span {
  display: block; /* Turns an inline item (like a span or link) into a block that accepts top/bottom margins and forces a new line */
}
```

* `block`: Takes up the full width available. Starts on a new line (e.g., `<div>`, `<p>`, `<h1>`).
* `inline`: Takes up only as much width as its content. Does not start on a new line and ignores top/bottom margins (e.g., `<span>`, `<a>`, `<strong>`).
* `inline-block`: Sits inline with text but allows you to set custom widths, heights, and padding.
* `none`: Entirely removes the element from the document structure (it won't take up any space).

### `visibility`

Hides an element while preserving its physical footprint.

```css
.hidden-placeholder {
  visibility: hidden; /* The element is invisible, but the blank space remains */
}
```

### `overflow`

Controls what happens if content is too large to fit inside its specified width or height.

```css
.scroll-box {
  width: 300px;
  height: 200px;
  overflow: auto; /* Adds scrollbars automatically if content overflows */
}
```

* `visible`: Default. Content spills outside the boundary.
* `hidden`: Content outside the boundary is cut off and invisible.
* `auto`/`scroll`: Adds structural scrollbars to read the remaining content.

## 7. Interactive Polish (`:hover`)

The simplest way to make an interface feel responsive is styling state changes. The `:hover` pseudo-class applies styles when a user moves their cursor over an element.

```css
.button {
  background-color: #0076ff;
  color: white;
}

.button:hover {
  background-color: #0056b3; /* Darkens on hover to signify interactiveness */
  cursor: pointer;          /* Changes the cursor to a pointing hand */
}
