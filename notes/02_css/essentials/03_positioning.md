# POSITIONING

- "compared to what element this element should be moved"
- attribute -> position

1. static (default)
  - they appear in normal document flow
  - positioning context -> top, right, left and bottom does't work with them

2. relative
  - this is just like static, but now it allows us to use the positioning context
  - now the element would'nt follow the normal document flow
  - *The Catch* -> the place where the items were originally kept is still reserved 

3. absolute
  - when this property is applied, the element is completely removed from the natural flow of the document 
  - it's space is also consumed by other elements
  - when positioning contexts are used with it
  - it aligns itself to the ancestor that has the position other than static

4. fixed
  - it ignore scrolling 
  - and also breaks the natural document flow and aligns itself with the html element and no other

5. sticky
  - it is the combination of relative and fixed positioning 
  - it's relative until and unless it's surroundings are in the view
  - when scrolled down it becomes fixed

## POSITIONING CONTEXT

- left, right, top and bottom - define the distance b/w the element and it's containing block
- z-index -> controls the 3-D stacking order of overlapping elements
  - elements with higher z-index appear on top of elements with lower z-index values

- example

```html
<div class="container">
  <div class="box red-box">Red Box (Bottom)</div>
  <div class="box blue-box">Blue Box (Middle)</div>
  <div class="box green-box">Green Box (Top)</div>
</div>
```

```css
/* Base styles to force the boxes to overlap */
.container {
  position: relative;
  height: 200px;
}

.box {
  width: 150px;
  height: 150px;
  position: absolute; /* Enforces positioning so z-index works */
  color: white;
  padding: 10px;
}

/* Layering the boxes using z-index */

.red-box {
  background-color: red;
  top: 0;
  left: 0;
  z-index: 1; /* Lowest layer */
}

.blue-box {
  background-color: blue;
  top: 30px;
  left: 30px;
  z-index: 2; /* Sits on top of Red */
}

.green-box {
  background-color: green;
  top: 60px;
  left: 60px;
  z-index: 3; /* Sits on top of Blue and Red */
}
```
