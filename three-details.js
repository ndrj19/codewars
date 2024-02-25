const threeDetails = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 3) return 1;
  if (n < 3) return 0;
  memo[n] =
    threeDetails(Math.floor(n / 2), memo) +
    threeDetails(Math.ceil(n / 2), memo);
  return memo[n];
};

console.log(threeDetails(3));
console.log(threeDetails(6));
console.log(threeDetails(4));
console.log(threeDetails(10));
console.log(threeDetails(15));
console.log(threeDetails(30));
console.log(threeDetails(21));
