const miniMaxSum = (arr) => {
  const nums = arr.sort((a, b) => a - b);
  const min4 = nums.slice(0, 4).reduce((acc, cv) => acc + cv);
  const max4 = nums.slice(1).reduce((acc, cv) => acc + cv);
  console.log(`${min4} ${max4}`);
};

console.log(miniMaxSum([5, 4, 9, 7, 2]));
