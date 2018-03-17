# dice-roller

A handy dandy dice roller for tabletop gaming

### Utilizing
- React

### Features
- Create multiple dice at a time
- Create popular sets with one click
- Roll die individually or all at once
- Find the total (so you don't have to math!)
- Select die style

### To Do
- Add sound
- Change naming convention for die styles
- Add more die styles

### Considerations
- Die components need to receive side and style information once. After that point, the data should be stored in Die state.

### Bugs
- The custom side input on the Die component allows your to input a number that is too high or too low. Write a check on the handle change function to prevent inproper input.
