# 🌐 HTML – Foundations & Semantics

## 📌 What is HTML?

**HTML (HyperText Markup Language)** is used to define the **structure** of a webpage.

- HTML uses **tags**
- Most tags have an **opening** and a **closing**
- A tag + its content = **element**

Example:

```html
<h1>Hello</h1>
````

## Basic HTML Skeleton

1. <!DOCTYPE html>

- Tells the browser this is an **HTML5 document**

2. `<html lang="en">`

- Root element of the document
- `lang` helps accessibility and SEO
    
3. `<head>`

Contains metadata:
- `<title>` → Browser tab name
- `<meta charset="UTF-8">` → Character encoding
- `<meta name="viewport">` → Responsive design

4. `<body>`

- All visible content lives here

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Hello World</h1>
</body>
</html>
```

## Emmet

**Emmet** is a shorthand system to write HTML/CSS faster.
Example:

```text
lorem50
```
→ generates 50 words of dummy text.

**Why Emmet?**  

Typing raw HTML is like dribbling past 11 defenders when a one-touch pass would score.

## Images

### Basic Image

```html
<img src="./image.jpg" alt="description">
```
- `alt` → shown if image fails + accessibility

### Using `<figure>`

```html
<figure>
  <img src="image.jpg" alt="A landscape" width="600">
  <figcaption>A beautiful landscape</figcaption>
</figure>
```

## Video

```html
<video src="video.mp4" width="250" controls></video>
```

## Audio

```html
<audio src="audio.mp3" controls></audio>
```

## Links

```html
<a href="https://chaicode.com">Click here</a>
```

- `href` = hyper reference

### Email Link

```html
<a href="mailto:example@gmail.com">Mail me</a>
```

## Block vs Inline Elements

### Block Elements

- Take full width
- Start on new line  
    Examples: `h1`, `p`, `div`
    
### Inline Elements

- Take only required space  
    Examples: `a`, `img`, `span`

## Attributes

- Extra information inside a tag
Example (tooltip):

```html
<h1 title="Hello">Hover me</h1>
```

## Headings

HTML has **6 headings**:

```text
h1 → h6
```

## Lists

### Ordered List

```html
<ol>
  <li>Wake up</li>
  <li>Code</li>
</ol>
```

### Unordered List

```html
<ul>
  <li>Milk</li>
  <li>Eggs</li>
</ul>
```

### Description List

```html
<dl>
  <dt>HTML</dt>
  <dd>Structure of the web</dd>
</dl>
```

### Nested List

```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
</ul>
```

## Containers

### `<div>`

- Generic container
- Used for grouping elements

### Text Formatting

- `<strong>` → semantic bold
- `<b>` → visual bold
- `<em>` → semantic emphasis
- `<i>` → visual italics

## 📊 Tables

```html
<table>
  <tr>
    <th>Name</th>
    <th>DOB</th>
  </tr>
  <tr>
    <td>Yuvraj</td>
    <td>30-03-2006</td>
  </tr>
</table>
```

## Forms

### Basic Input

```html
<form>
  <input type="text">
</form>
```

### Login Form

```html
<form>
  <label>
    Email:
    <input type="email" name="email">
  </label>

  <label>
    Password:
    <input type="password" name="password">
  </label>

  <button type="submit">Submit</button>
</form>
```

## Semantic HTML

Semantic tags give **meaning**, not just structure.

```html
<header>Intro content</header>
<nav>Navigation links</nav>
<article>Standalone content</article>
<section>Grouped content</section>
<footer>Bottom info</footer>
```

### Example Layout

```html
<header>
  <h1>Learn to pass</h1>
</header>

<nav>
  <ul>
    <li><a href="#">Home</a></li>
  </ul>
</nav>

<article>
  <section>
    <p>Passing technique explained.</p>
  </section>
</article>

<footer>
  <p>&copy; Yuvi</p>
</footer>
```

## Time Tag

```html
<time datetime="2025-06-05">June 5th</time>
```

## Special Characters

Use `&` to insert special symbols:

- `&copy;` → ©
- `&lt;` → <
- `&gt;` → >

## ARIA (Accessibility)

**ARIA = Accessible Rich Internet Applications**
Used to help:
- Screen readers
- Keyboard navigation
- Disabled users

Example:

```html
<button aria-label="Close">X</button>
```

⚠️ Use ARIA **only when semantic HTML is not enough**.
