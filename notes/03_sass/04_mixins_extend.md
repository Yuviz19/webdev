# Mixin

- these are used to make the code less repetative
- they take in some properties so that we do not have to write it again and again

- let's say we want to repeat the following

```scss
display: flex;
justify-content: center;
align-items: center;
```

- so we can define a mixin here

```scss
// we can also include an argument (or set a default value), or be it completely without it
@mixin flexCenter($direction: row) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}

// and to use it
.main {
  @import flexCenter(column);
}
```

-- if statement in mixin

```scss
@mixin theme($light-theme: true) {
  @if $light-theme {
    background: lighten($primary-color, 100%);
    color: darken($text-color, 100%);
  }
  // else behave normally
}

.light {
  @include theme($light-theme: true);
}
```

-- mixin with media query

```scss
@mixin mobile {
  @media (max-widht: 800px) {
    @content;
  }
}

@include mobile {
  flex-direction: column;
}
```

# Extends

- to extend, or to use the styles of a current element, we can extend it
- let's say we have 2 paragraph, but we only want to change the secons a little bit

```scss
.main {
  width: 80%;
  margin: 0 auto;

  #{&}__paragraph1 {
    font-weight: map-get($font-weights, bold);
    &:hover {
      color: pink;
    }
  }

  #{&}__paragraph2 {
    @extend .main_paragraph1;
    &:hover {
      color: $accent-color;
    }
  }
}
```
