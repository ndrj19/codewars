const findOutlier = (nums) => {
  let oddArray;
  const start = nums.slice(0, 3);
  const numOddsStart = start.filter((num) => num % 2 !== 0).length;
  if (numOddsStart > 1) oddArray = true;
  else oddArray = false;
  for (const num of nums) {
    if (oddArray) {
      if (num % 2 === 0) return num;
    } else {
      if (num % 2 !== 0) return num;
    }
  }
};

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
