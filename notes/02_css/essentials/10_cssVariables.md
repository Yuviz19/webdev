# Variables in CSS

## The Anatomy

### Declaring the Variables

```css
:root {
  --primary-color: #3b82f6;      /* A vibrant blue */
  --main-font: 'Inter', sans-serif;
  --card-padding: 1.5rem;
}
```
- :root is a special selector that selects the highest html element (the <html> tag)

### Using the Variable

```css
.btn-primary {
  background-color: var(--primary-color);
  font-family: var(--main-font);
  padding: var(--card-padding);
}

h1 {
  color: var(--primary-color); /* Reusing the same blue! */
}
```
- while using them, we can also create a fallback value 

```css
.badge {
  /* If --accent-color doesn't exist, use red instead */
  background-color: var(--accent-color, red); 
}
```

- we can also add dynamic scoping to the variables

```css
:root {
  --text-color: black; /* Global default */
}

.dark-section {
  --text-color: white; /* Overrides text-color ONLY inside this section */
  background-color: #121212;
}

p {
  color: var(--text-color); 
}
```

## A Real-World Example

```css
/* 1. Define Light Mode Defaults */
:root {
  --bg-color: #ffffff;
  --text-color: #1f2937;
  --card-bg: #f3f4f6;
}

/* 2. Swap Values for Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #121212;
    --text-color: #f9fafb;
    --card-bg: #1e1e1e;
  }
}

/* 3. Style your components ONCE using the variables */
body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

.card {
  background-color: var(--card-bg);
  border: 1px solid var(--text-color);
}
```
