# VARIABLES

- sass has had variables long before css

## Declaration and Usage of Variables

```scss
$primary-color: #272727;
$accent-color: #ff652f;
$text-color: #fff;
// u can also create maps
$font-weight: (
    "regular": 400,
    "medium": 550,
    "bold": 700
)

body {
    background: $primary-color;
    font-weight: map-get($font-weights, bold)
}
```

# NESTING

- this is the syntax where we nest the child elements directly under the parent and not separately

```css
.main {...}
.main p {...} // instead of this, we can nest stuff
```
```css
.main {
  width: 80%;
  margin: 0 auto;

  #{&}__paragraph {
    font-weight: map-get($font-weights, bold);
  }
}
```

- the ampersand compiles down to whatever tha parent was named
- but only this would make a new property with just

```css
// with just an ampersand, the following will be created
.main__paragraph {...} 
```

- so we use, interpolation technique
- #{&} which adds the parent name infront of it
  - resulting in .main .main__paragraph
