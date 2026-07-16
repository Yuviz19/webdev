# MEDIA QUERY

- it is a tool used to make responsive web design

## CORE ANATOMY

```css
/* Normal styles that apply to everyone */
body {
  background-color: white;
  font-size: 16px;
}

/* The Media Query */
@media (max-width: 768px) {
  /* These styles ONLY activate if the screen is 768px wide or narrower */
  body {
    background-color: lightgray;
    font-size: 14px;
  }
}
```

1. BREAKPOINTS
  - it is the screen width where the website's layout changes to accommodate a different device size

2. max-width (desktop first)
  - "apply these styles upto a max width of x"
  - the style applies to smaller screens than the number x

3. min-width (mobile-first)
  - "apply the styles starting at a minimum widht of x"
  - styles are applied to larger screens

## COMMON STANDARDS

| Screen Range | Device Target | Typical Breakpoint |
|--------------|---------------|--------------------|
| `<= 576px` | Mobile portrait | No media query |
| `>= 576px` | Mobile landscape | `@media (min-width: 576px)` |
| `>= 768px` | Medium Tablets (iPads) | `@media (min-width: 768px)` |
| `>= 992px` | Large Tablets / Small Laptops | `@media (min-width: 992px)` |
| `>= 1200px` | Standard Desktops | `@media (min-width: 1200px)` |

## CHECKING OUT FOR DARK MODE

- we can also check the user's theme preference (on device)

```css
/* System-wide Dark Mode Detector */
@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: #ffffff;
  }
}
```
