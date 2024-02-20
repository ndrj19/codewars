/*
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.
*/

const countTheDigit = (n, d) => {
  const arr = Array(n + 1).fill(null);
  for (let i = 0; i <= n; i++) {
    arr[i] = i * i;
  }
  return arr
    .join("")
    .split("")
    .filter((e) => e === d.toString()).length;
};

console.log(countTheDigit(10, 1));
console.log(countTheDigit(25, 1));
