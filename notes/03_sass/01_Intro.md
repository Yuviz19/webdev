# SASS (Syntactically Awsome Style Sheets)

## Installation (w/ node)

1. npm install -g sass
2. compiler command
  - sass --watch style.scss:style.css   (Syntax: sass --watch input.scss:output.css)
  - sass --watch scss:css (Watches all files in the "scss" folder and compiles them into the "css" folder)

## Folder Structure

1. for smaller projects

```md
scss/
├── main.scss
├── _variables.scss
├── _mixins.scss
├── _base.scss
├── _layout.scss
├── _components.scss
└── _utilities.scss
```
- and the scss file
```scss
// main.scss

@use "variables";
@use "mixins";
@use "base";
@use "layout";
@use "components";
@use "utilities";
```

2. for larger projects

```md
scss/
│
├── abstracts/
│   ├── _variables.scss
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _placeholders.scss
│
├── base/
│   ├── _reset.scss
│   ├── _typography.scss
│   ├── _animations.scss
│   └── _base.scss
│
├── layout/
│   ├── _header.scss
│   ├── _footer.scss
│   ├── _navbar.scss
│   ├── _sidebar.scss
│   └── _grid.scss
│
├── components/
│   ├── _button.scss
│   ├── _card.scss
│   ├── _modal.scss
│   ├── _form.scss
│   └── _badge.scss
│
├── pages/
│   ├── _home.scss
│   ├── _about.scss
│   └── _contact.scss
│
├── themes/
│   ├── _light.scss
│   └── _dark.scss
│
├── vendors/
│   └── _normalize.scss
│
└── main.scss
```
- and main file

```scss
@use "abstracts/variables";
@use "abstracts/mixins";

@use "base/reset";
@use "base/base";
@use "base/typography";

@use "layout/header";
@use "layout/navbar";
@use "layout/footer";

@use "components/button";
@use "components/card";

@use "pages/home";
```

- and for the compiled command
sass --watch src/scss/main.scss:src/css/main.css
- for compressed output (in prod) (minifies the output)
sass --style=compressed src/scss/main.scss src/css/main.css

## Some basic stuff

- there are 2 syntaxes of sass 
1. scss -> sassy css (uses brackets and colon)
2. sass (uses indentation)

- also any valid css is also a valid scss
