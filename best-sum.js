const bestSum = (targetSum, numbers) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        if (i + num <= targetSum) {
          const combo = [...table[i], num];
          if (!table[i + num] || combo.length < table[i + num].length)
            table[i + num] = combo;
        }
      }
    }
  }
  return table[targetSum];
};

console.log(bestSum(8, [5, 3, 2]));
//console.log(bestSum(8, [3, 5, 2]));
//console.log(bestSum(8, [2, 3, 5]));
//console.log(bestSum(8, [8, 3, 5]));
//console.log(bestSum(10, [10, 3, 2]));
