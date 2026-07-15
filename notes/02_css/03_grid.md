# Grid System

- a 2d model

## Turining into grid

- in the parent container
- display: grid;

## Creating Grids

- grid-template-columns: 200px 200px 200px;
- set all the objects into 3 pieces of 200 columns each
- u can alter the size of the pieces

## fr Unit

- stands for fraction (no need of hardcodes values)
- grid-template-columns: 1fr 1fr 1fr;
- every column is now 1/3 length long
- we can also alter those values

## Gap

- u can now set spaces between each item 
- gap: 20px;
- this sets for both the items on rows as well as columns
- u can explicitly set the values with 
- row-gap: 20px and column-gap: 20px;

## Repeat

- instead of grid-template-columns: 200px 200px 200px
  - u can write grid-template-columns: repeat(3, 200px); or maybe in fraction

## Items Positioning and Span

- for a specific child element, u can
- grid-column:1/3; -> makes the item take 1/3 of the space
- same can be used for rows

### Span

- instead of the above method and keeping the note of number of row/columns 
- u can -> span: 2; -> takes the space of 2 columns

## minmax()

```css
grid-template-columns: repeat(3,minmax(200px,1fr));
```

- the above statement states that never let a column become less than 200px, but allow it to grow upto 1fr of the available space

## Auto-fit and auto-fill

```css
grid-template-columns:
repeat(auto-fit,minmax(250px,1fr));
```

- fits the items accordingly

## Allignment

- justify-items → align items horizontally inside their grid cells.
- align-items → align items vertically inside their grid cells.
- justify-content → align the entire grid horizontally if the grid is smaller than the container.
- align-content → align the entire grid vertically if the grid is smaller than the container.

----

RULE OF THUMB

- *-items -> controls how items are positioned inside their own allocated space
- *-content -> controls how the entire grid of flexbox is positioned inside the container
