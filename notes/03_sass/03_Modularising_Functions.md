# Code Modularisation

- for a large project we can modularise our code, putting it into separate files
- to do so 

1. make the scss file (other than main) start with an '_'
2. then include those files in the main file (at the top) with
3. "@use './file_name'" (without the _)
  - @import is depricated

# Functions

- so we try to replace the map-get($font-weights, bold), thing to a function

```scss
@function weight($weight-name){
    @return map-get($font-weights, $weight-name)
}
```
- then to use it
```scss
font-weight: weight(bold);
```
