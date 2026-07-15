---

# 1. Selectors ⭐⭐⭐⭐⭐

You should be comfortable with:

```css
.class
#id
element
*
.class1.class2
.parent .child
.parent > .child
:hover
:focus
:first-child
:last-child
:nth-child()
:not()
::before
::after
```

If selectors feel slow, everything else becomes frustrating.

---

# 2. The Box Model ⭐⭐⭐⭐⭐

Know this inside out.

```text
Margin
┌───────────────────┐
│      Border       │
│ ┌───────────────┐ │
│ │    Padding    │ │
│ │ ┌───────────┐ │ │
│ │ │ Content   │ │ │
│ │ └───────────┘ │ │
│ └───────────────┘ │
└───────────────────┘
```

Understand

* width
* height
* padding
* margin
* border
* `box-sizing`

Especially

```css
box-sizing: border-box;
```

---

# 3. Positioning ⭐⭐⭐⭐⭐

Learn

```css
static
relative
absolute
fixed
sticky
```

Understand

* positioning context
* `top`
* `left`
* `right`
* `bottom`
* `z-index`

Many layout bugs come from weak positioning knowledge.

---

# 4. Display ⭐⭐⭐⭐⭐

Know exactly what these do.

```css
block
inline
inline-block
none
flex
grid
```

---

# 5. Flexbox ⭐⭐⭐⭐⭐

Master it.

Know

```css
flex-direction
justify-content
align-items
align-content
gap
flex-wrap
order
flex-grow
flex-shrink
flex-basis
```

You should be able to build:

* navbar
* cards
* forms
* hero sections

using only Flexbox.

---

# 6. Grid ⭐⭐⭐⭐⭐

Know

```css
grid-template-columns
grid-template-rows
repeat()
fr
gap
grid-column
grid-row
span
minmax()
auto-fit
auto-fill
justify-items
align-items
justify-content
align-content
```

---

# 7. Units ⭐⭐⭐⭐☆

Understand when to use

```text
px
%
em
rem
vw
vh
fr
```

Especially

* `rem`
* `%`
* `fr`

---

# 8. Responsive Design ⭐⭐⭐⭐⭐

Learn

```css
@media
```

Understand

* mobile-first
* breakpoints
* responsive images
* flexible layouts

---

# 9. Typography ⭐⭐⭐☆

Know

```css
font-family
font-size
font-weight
line-height
letter-spacing
text-transform
text-align
```

---

# 10. Colors ⭐⭐⭐☆

Know

```css
rgb()
rgba()
hsl()
hex
opacity
```

Also

```css
currentColor
```

is worth learning.

---

# 11. Backgrounds ⭐⭐⭐☆

Know

```css
background
background-image
background-size
background-repeat
background-position
```

---

# 12. Transitions ⭐⭐⭐⭐☆

Very important.

```css
transition
```

Understand

```css
transition:
transform
opacity
background-color
```

---

# 13. Transform ⭐⭐⭐⭐☆

```css
translate()
rotate()
scale()
skew()
```

These power many UI interactions.

---

# 14. Animation ⭐⭐⭐☆

Know

```css
@keyframes
animation
```

You don't need to become an animation wizard immediately.

---

# 15. Pseudo Elements ⭐⭐⭐⭐☆

```css
::before
::after
```

They appear everywhere.

---

# 16. CSS Variables ⭐⭐⭐⭐⭐

Very important.

```css
:root{
    --primary:#4CAF50;
}

button{
    color:var(--primary);
}
```

Every modern project uses custom properties.

---

# 17. Specificity ⭐⭐⭐⭐⭐

Probably the most misunderstood topic.

Know why

```css
#id
```

beats

```css
.class
```

and why

```css
!important
```

is usually a last resort.

---

# 18. Overflow ⭐⭐⭐☆

```css
overflow
overflow-x
overflow-y
```

---

# 19. Object Fit ⭐⭐⭐☆

Useful for images.

```css
object-fit:cover;
```

---

# 20. Modern Layout Patterns ⭐⭐⭐⭐⭐

Be able to build

* Navbar
* Sidebar
* Dashboard
* Hero section
* Pricing cards
* Login page
* Gallery
* Blog layout

without copying tutorials.

---

# After that...

Only then start learning frameworks.

## Bootstrap

You'll recognize things like

```html
<div class="row">
<div class="col-md-6">
```

because they're abstractions over Flexbox/Grid and responsive breakpoints.

## Bulma

Mostly Flexbox utilities and ready-made components.

## Materialize / Material UI

Prebuilt components following Material Design. Understanding CSS helps you customize them instead of fighting them.

## Sass

This one is different. It's **not a CSS framework**; it's a **CSS preprocessor**.

It adds features like:

```scss
$primary: blue;

@mixin center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  @include center;
  color: $primary;
}
```
