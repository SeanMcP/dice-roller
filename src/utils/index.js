export const randomRoll = (sides) => {
  if (Number(sides) === 0) {
    return 0;
  }
  return Math.floor(Math.random() * Number(sides) + 1);
}
