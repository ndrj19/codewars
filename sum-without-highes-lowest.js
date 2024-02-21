const sumArray = (array) =>
  array.length
    ? array.length > 2
      ? array
          .sort((a, b) => a - b)
          .filter((_, i) => i !== 0 && i !== array.length - 1)
          .reduce((a, b) => a + b)
      : 0
    : 0;
console.log(sumArray([0, 1, 6, 10, 10]));
