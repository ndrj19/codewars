const chooseBestSum = (t, k, ls) => {
  // t = miles
  // k = towns
  // ls = list of distances
  if (ls.length < k) {
    return null;
  }
  const possibleCombinations = (ls) => {
    const result = [[]];
    for (let num of ls) {
      const len = result.length;
      for (let i = 0; i < len; i++) {
        const temp = result[i].slice();
        temp.push(num);
        result.push(temp);
      }
    }
    return result.filter((combination) => combination.length === k);
  };

  const result = possibleCombinations(ls)
    .map((combination) => combination.reduce((acc, cv) => acc + cv))
    .filter((sum) => sum <= t)
    .sort((a, b) => b - a)
    .shift();
  return result ? result : null;
};

console.log(chooseBestSum(173, 3, [50, 55, 57, 58, 60]));
console.log(chooseBestSum(173, 1, [50]));
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));
console.log(chooseBestSum(163, 3, [50, 55]));
