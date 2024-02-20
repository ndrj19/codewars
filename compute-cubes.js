const findSummands = (n) => {
  let middle = n ** 3 / n;
  if (middle % 2 === 0) middle += 1;
  const elementsToLeft = Math.floor(n / 2);
  const start = middle - elementsToLeft * 2;

  return Array(n)
    .fill()
    .map((_, i) => start + 2 * i);
};

// n = 3, result = [7, 9, 11], because 7 + 9 + 11 = 27, the cube of 3.
// Note that there are only n = 3 elements in the array.

console.log(findSummands(3));
console.log(findSummands(4)); // 19 17 15 13
console.log(findSummands(5)); //  29 27 25 23 21
