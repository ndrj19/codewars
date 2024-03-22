const getNumbers = (numbers, targetSum) => {
  const table = Array(targetSum + 1)
    .fill([])
    .map(() => []);
  table[0] = [[]];

  for (let i = 0; i <= targetSum; i++) {
    if (table[i].length > 0) {
      for (let num of numbers) {
        if (i + num <= targetSum) {
          const newCombo = table[i].map((subarray) =>
            [...subarray, num].sort((a, b) => b - a)
          );
          table[i + num].push(...newCombo);
        }
      }
    }
  }
  return table[targetSum];
};

// console.log(getNumbers([100, 25, 15, 7, 3], 24));
// console.log(getNumbers([4, 2, 1], 8));
// console.log(getNumbers([5, 3, 4, 7], 7));
console.log(getNumbers([100, 25, 15, 7, 3], 301));
// console.log(getNumbers([3, 7, 15, 25, 100], 301));
