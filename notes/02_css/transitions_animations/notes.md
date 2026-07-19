# TRANSITIONS AND ANIMATIONS

## Transforms

- it is use to transform stuff on the web
- property name -> "transform: "
- key values 
  - translate -> used to shift items on the x and/or y axes (note the sign of the axes)
  - scale -> used to scale up or down an item (increase/decrease in size)
    - > 1 -> scales up 
    - < 1 -> scales down
    - you can decide along what axis to do so with scaleX() and scaleY()
  - rotate -> used to rotate the item along some axes
    - X axis -> runs horizontal to the screen
    - Y axis -> runs vertical to the screen
    - Z axis -> runs in/out or perpendicular to the screen

> [!NOTE]
> on rotation, the axes also change
> so rotating on z axis, the y and x axis also rotate with it

  - skew -> skews and element along the x and/or y axes
    - this property makes the object bit distorted 
    - something like a parallelogram along an axes

## Transitions

- they are simpler way to do animations
- they transitiona an object from one state to another in a certain way, over a set amount of time

- let there be a circle
- u can also pass another argument to apply a delay time (after what time the transition to follow)
- another argument that it takes is timing function 
  - linear -> makes the transition to happen at a constant rate
  - ease-in -> start slow and gradually speed up
  - ease-out -> opposite of above
  - ease-in-out -> start slow, speed up and end slow then

```css
.circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: pink;
    transition: background 1s, transform 0.4s 0.5s;
}

.circle:hover {
    background: salmon;
    transform: rotateZ(360)
}
```

## Keyframes

- they are used to complex, multi-stage animations by defining how the animations work at different points of time
