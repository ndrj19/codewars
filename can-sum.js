const canSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= targetSum; i++) {
    if (table[i]) {
      for (let num of numbers) {
        if (table[i + num] <= targetSum) table[i + num] = true;
      }
    }
  }
  return table[targetSum];
};

console.log(canSum(8, [2, 3, 5]));
console.log(canSum(7, [4, 5]));
