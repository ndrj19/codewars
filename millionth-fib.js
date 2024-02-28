// 0 1 2 3 4 5 6 7
// 0 1 1 2 3 5 8 13

const fib = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;
  for (let i = 2; i < table.length; i++) {
    table[i] = table[i - 2] + table[i - 1];
  }
  return table[n];
};

console.log(fib(5));
console.log(fib(20));
