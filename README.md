# dice-roller

A handy dandy dice roller for tabletop gaming

## About

### Utilizing
- React

### Features
- Create die with anywhere from two to 999,999,999 sides
- Create popular sets with one click
- Roll die individually or all at once
- Find the total (so you don't have to math!)
- Hear the authentic sound of a real die roll (or not)
- Select from nine die styles (including Settler's red and yellow)

## Maintenance

### To Do
- Create favicon.ico
- Add tests
- Standardize grid throughout
- Make Die size responsive
- Clean up components (App, ~~CreateMenu~~, ~~Die~~, ~~Emoji~~, IconButton, If, Modal, ~~Navigation~~, ~~SettingsMenu~~, ~~StyleMenu~~, ~~StyleOption~~)
- Fix bugs
- Custom die style
- Fill all die with certain style
- Create multiple custom dice

### Considerations
- ~~Consider changed the custom side input into a text field to prevent the browser default increment/decrement buttons~~
- Toggle an `input[type=range]` to change the number of sides on a die

### Bugs
- crickets

## Style guide

### Spacing
All elements should be sized and positioned based on a 12px grid system. Acceptable fractions of one unit are 6px and 3px.

### Colors
Use [Google's Material color palette](https://material.io/guidelines/style/color.html#color-color-palette). The primary color is "Blue Gray" and the secondary "Blue." Errors should be "Orange."

### Transition & Animation
Transitions and animations should last 150ms and use `ease-in-out` unless inappropriate. Use `@keyframe` animations whenever possible.
