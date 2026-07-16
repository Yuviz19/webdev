# BACKGROUNDS

- Key background properties

1. background-image
  - Sets a visual backdrop behind an element. You can pull in external image files or generate gradients on the fly.
    - To load an image file: background-image: url('ocean-sunset.jpg');
    - To load a gradient: background-image: linear-gradient(to right, #4facfe, #00f2fe);

2. background-size
  - Tells the browser how to resize your background image to fit the container.
    - auto (Default) — The image displays at its original, native size. If it's too big, it gets cropped. If it's too small, it leaves empty space.
    - cover — (Most Common) Stretches and crops the image so it covers the entire background area of the container completely. There will be no empty space, but parts of the image might get cut off.
    - contain — Scales the image up or down just enough so that the entire image is visible inside the box. If the box has a different shape than the image, this leaves empty "bars" on the sides (letterboxing).

3. background-repeat
  - By default, if your background image is smaller than the container, the browser will tile (repeat) it infinitely to fill the space.
    - repeat (Default) — Tiles the image vertically and horizontally.
    - no-repeat — (Most Common) Renders the image exactly once.
    - repeat-x — Tiles the image only horizontally (left to right).
    - repeat-y — Tiles the image only vertically (top to bottom).

4. background-position
  - Controls the alignment of your background image. It tells the browser where to anchor the image inside the box.
  - You can use keywords (center, top, bottom, left, right) or percentages/pixels.
    - u can use combination of 2 values too
    - background-position: center; — Perfect for hero images; keeps the absolute middle of the image in the center of the container.
    - background-position: top right; — Anchors the image to the top-right corner.

- The Universal "background" attribute

```css
background: [color] [image] [repeat] [position] / [size] [attachment];

.hero {
  background-color: #121212;
  background-image: url('banner.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.hero {
  background: #121212 url('banner.jpg') no-repeat center / cover;
}
```

# SIMILAR IMAGE ATTRIBUTES

- object-fit (related to background-size)
  - controls how an image scales to fit into its defined content box.
  - values ->
    - cover - Scales the image to fill the container completely while maintaining its aspect ratio. Just like background-size: cover, it clips (crops) the excess off the sides or top/bottom so the image never stretches or squishes
    - contain: Scales the entire image down so the whole thing fits inside the box while keeping its aspect ratio. It will never be cropped, but this can leave blank space around it if the shapes don't match.
    - fill (The Default): The browser's default behavior. It stretches and warps the image to perfectly fill the box, ignoring the original aspect ratio.
    - none: Keeps the image at its absolute, original size, ignoring your CSS width and height.

- object-position (twin of background position)
