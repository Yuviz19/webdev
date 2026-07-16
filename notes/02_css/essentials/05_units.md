# UNITS

-- hardcoded values --

1. px (pixels)
  - it is the hardcoded digital dot on the screen
  - the catch is that they do not scale much (if the screen is big, the user may have problem reading)

-- font relative units --
- there size adjusts based on the text config 

2. em (element root)
  - it scales relative to its's parent size config
  - if parent's text size is 12px then 1em becomes 12px and 2em is 24px
  - the math using these could become hectic

3. rem (root element)
  - scales relative to the root element <html> element
  - by default most browsers set it to 16px
  - therefore 1rem is universally 16px
  - this also eliminates the compounding of the em unit

-- Viewport relative units --

4. vw (viewport width)
  - 1 vw is exactly 1% of the availble total width of the screen 
  - so 100vw addresses the total screen area

5. vh (viewport height)
  - same as vw but for the height
