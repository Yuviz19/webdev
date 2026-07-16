# COLOR & TRANSPARENCY

-- the color formats

1. hex
  - It starts with a # followed by 6 characters (using numbers 0-9 and letters A-F).
  - It is split into three pairs of 2-digit values representing Red, Green, and Blue: #RRGGBB
  - adding 2 numeric values adds that percentage of tranceparency
    - #0000ff80 (50% transparent)

2. rgb(red, blue, green)
  - A function that lets you declare colors using standard base-10 numbers from 0 to 255.
  - 0 means that color channel is off; 255 means it is at maximum brightness.
    - Example: rgb(255, 0, 0) is pure Red.

3. rgba(red, blue, green, alpha)
  - The Alpha channel is a decimal scale from 0.0 to 1.0. (adds transparency)
    - Example: rgba(255, 0, 0, 0.5) is a 50% transparent red.
  - now rgb(red, blue, green / alpha) works

4. hsl() Hue, Saturation, Lightness
  - hue -> A degree on a color wheel from 0 to 360 (where 0 is red, 120 is green, and 240 is blue).
  - saturation -> The color's intensity from 0% (gray/grayscale) to 100% (vibrant, full color).
  - lightness -> How dark or bright the color is from 0% (pure black) to 100% (pure white). 50% is normal brightness.
    - Example: hsl(0, 100%, 50%) is pure, bright Red.

- OPACITY (opacity)
  - A property you apply to an element to make the entire element (including its background, borders, and any text or images inside it) transparent.


- a code for *GLASS MORPHISM*, an html and css is attached to the current directory
