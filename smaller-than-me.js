// const smaller = (nums) =>
//   nums.map((num, i) => nums.slice(i + 1).filter((e) => e < num).length);

const smaller = (nums) => {
  const countSmaller = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[i]) {
        count++;
      }
    }
    countSmaller.push(count);
  }

  return countSmaller;
};

console.log(smaller([5, 4, 3, 2, 1]));
console.log(smaller([1, 2, 0]));
