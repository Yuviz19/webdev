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

### Method - 1

- inside the @keyframes property
- use 2 code blocks from{} and to{}
- from decides from what state to start the animation 
- and to decides at what state to end the animation

```css
@keyframes mario_drive {
	from{
	     transform: translateX(0);
	}
	to{
	     transform: translateX(100vw);
	}
}
```
- and then apply the animations with

```css
.mario {
    position: absolute;
    top: -45px;
    left: 0px;
    animation: mario_drive 9s linear ease; // u can also add the animation-timing-function (or declare separately)(default -> ease)
    animation-iteration-count: 3; // can also be set to infinite
}
```

### Method - 2

- setting up keystamps (in terms of percentages) to change the animation time to time

```css
@keyframes luigi_drive {
    0% {
        transform: translateX(0) scaleX(1);
    }
    49% {
        transform: translateX(92vw) scaleX(1);
    }
    50% {
        transform: translateX(92vw) scaleX(-1);
    }
    99% {
        transform: translateX(0) scaleX(-1);
    }
    100% {
        transform: translateX(0) scale(1);
    }
}
```

## Animation fill mode

- "animation-fill-mode" decides what styles are applied to an animated object before and after the animation starts or ends
- it's 4 values 
  - none -> this is the default
    - no impact on the object outside the active runtime
  - forwards -> the object permanantly retains the keyframe's last keyframe property, when the animation completes
  - backwards -> the object starts at the keyframes's first property as soon as the animation starts
    - this becomes quite broken when an animation-delay property is attached, a sudden state change happens in this case
  - both -> this is the combination of both forwards and backwords

## Animation Direction 

- "animation-direction" that decides weather an animation plays forward or backwards or alternate back and forth
- it's values
  - normal -> (default) -> plays from 0% to 100%
  - reverse -> plays from 100% to 0%
  - alternate -> plays forward on odd instances and backwards on even
    - this requires the animation-iteration-count to be at least 2 or more
  - alternate-reverse -> same as alternate but with forwards on even and backwords on odd

## Animation Timming functioon 

- "animation-timing-function" -> *already knows*
- u can add a custom atf with the cubic-bezier(a, b, c, d) *if u know it*
  - or u can search it up to make for custom values

- *ANIMATION SHORTHAND*
  - animation: name duration timing-function delay iteration-count direction fill-mode;
  - u can chain up multiple animations with a comma in b/w them
