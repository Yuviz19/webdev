# THE BOX MODEL

- width & height (The Canvas)
  - What it is: Sets the dimensions of the element's actual content area (like text or an image).
  - Analogy: The size of the canvas you are painting on.

- padding (The Bubble Wrap)
  - What it is: The space inside the element, clearing the area between the actual content and its outer border. Padding adopts the element's background color.
  - Analogy: The protective bubble wrap inside the box that pushes the painting away from the box edges.

- border (The Wooden Frame)
  - What it is: A line that wraps directly around the padding and content. You can adjust its thickness, style (solid, dashed), and color.
  - Analogy: The solid wooden frame wrapped tightly around the bubble wrap.

- margin (The Social Distance)
  - What it is: The space outside the element's border. It pushes neighboring elements away from this item. Margins are always completely transparent.
  - Analogy: The empty buffer space you leave between this box and other shipping boxes in the truck so they don't bump into each other.

## THE BOX SIZING 

- by default it is set to "box-sizing: content-box"

```css
.box {
    width: 200px;
    padding: 20px;
    border: 10px solid black;
}
```

- this becomes 
  - Content = 200px
  - Padding = 20px left + 20px right
  - Border = 10px left + 10px right
- hence width now becomes 260px not 200px

- box-sizing: border-box -> makes it so that everything is contained inside the 200px container

```css
.box {
    width: 200px;
    padding: 20px;
    border: 10px solid black;
    box-sizing: border-box;
}
```
- so now this becomes
  - Total width = 200px
  - Padding = 40px
  - Border = 20px
  - Content = 140px (actual content)
