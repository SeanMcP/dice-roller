# dice-roller

A handy dandy dice roller for tabletop gaming

### Utilizing
- React

### Features
- Create multiple dice at a time
- Create popular sets with one click
- Roll die individually or all at once
- Find the total (so you don't have to math!)
- Hear the authentic sound of a real die roll (or not)
- Select die style

### To Do
- Create favicon.ico
- Change naming convention for die styles
- Add more die styles
- Add tests
- Standardize grid throughout
- Make Die size responsive
- Clean up components (App, CreateMenu, ~~Die~~, ~~Emoji~~, If, Modal, Navigation, SettingsMenu, StyleMenu, StyleOption)
- Fix bugs

### Considerations
- ~~Consider changed the custom side input into a text field to prevent the browser default increment/decrement buttons~~
- Toggle an `input[type=range]` to change the number of sides on a die

### Bugs
- The custom side input can accept some non-numbers, but it I haven't found a breaking case yet.

---
## Style guide

### Spacing
All elements should be sized and positioned based on a 12px grid system. Acceptable fractions of one unit are 6px and 3px.

### Colors
Use [Google's Material color palette](https://material.io/guidelines/style/color.html#color-color-palette). The primary color is "Blue Gray" and the secondary "Blue."

### Transition & Animation
Transitions and animations should last 150ms and use `ease-in-out` unless inappropriate. Use `@keyframe` animations whenever possible.
