# TYPOGRAOHY

- some of the key attributes are

1.  font-family
  - specified the font used in the in the webpage

```css
h1 {
  font-family: "Helvetica Neue", Arial, sans-serif;
}
```
- "Try to load Helvetica Neue. If the user doesn't have it, use Arial instead. If they don't have that either, use their computer's default sans-serif (clean, no-little-feet) font."
- *using web fonts*
  - to not rely on the user to have a certain font 
  - use google fonts hosting and link the intended fonts in the <head> of the html file

```html
<head>
  <!-- Preconnecting makes the font load slightly faster -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  
  <!-- This requests the font from Google's servers -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
</head>
```

2. font-size
  - determines how large the fonts are

```css
p { font-size: 1rem; }    /* 16px by default */
h1 { font-size: 2.5rem; } /* 40px by default */
```

3. font-weight
  - determines the thickness or boldeness of the fonts
  - Values: You can use keywords (normal, bold) or precise numeric values spanning from 100 (thin) to 900 (ultra-bold).

--- spatial spacing and alignment --- 

4. line-height
  - Controls the vertical distance between rows of text (like single-spacing or double-spacing in a word document)

```css
body {
  line-height: 1.6; /* Gold standard for clean, readable body paragraphs */
}
```

5. letter-spacing
  - Adjusts the tracking, or global spacing, between individual characters.
  - use case
    - Slightly increase spacing for all-caps headings to make them look sophisticated and readable (letter-spacing: 0.1em;).
    - Slightly decrease spacing for giant layout titles to pull them closer together (letter-spacing: -0.02em;).

6. text-transform
  - Changes the capitalization state of your text visually without altering the underlying raw HTML text string
  - key values ->
    - uppercase — SHIFTS ALL LETTERS TO CAPITAL LETTERS.
    - lowercase — forces all letters to lowercase.
    - capitalize — Capitalizes The First Letter Of Each Word.

7. text-align
  - Controls the horizontal alignment of inline text elements within their parent block container.
  - key values ->
    - left 
    - right
    - center
    - justify - Stretches the letter spaces so every single line hits both the left and right walls exactly (like a newspaper column). Use this cautiously, as it can cause weird white gaps.
