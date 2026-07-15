# Flex Box

- an easy way to arrange items in a site
- flex-box is direction agnostic (both vertical and horizontal)

```css
display: flex; // on the main container
flex-direction: row; // or column for horizontal (it is row by default)
```

- the flex direction decides the direction of the main axis
- and its perpendicular axis becomes the cross axis

- justify-content options (moves the entire group of items along the main axis)
1. flex-start -> puts item to the start
2. flex-end -> items to the end
3. centre -> items to the centre
4. space-between -> puts items with "auto" width between them (no spaces around them)
5. space-around -> almost same as above, but with some spaces around them too.

- for responsivness, u need to use media-queries
- sometimes the flex-wrap also works

```css
flex-wrap: wrap; // this makes it wrap the children elements to other lines
```

- align-items (moves the items along the cross axis)
1. flex-start -> puts the items to the start
2. flex-end -> puts the items to the end
3. centre -> puts the items to the centre

- align-content
  - does nothing unless multiple rows or columns
  - hence flex-wrap is needed

- let
```md
A B C
D E F
G H I
```

- it controls the spacing between those rows (ie along the cross axis)
