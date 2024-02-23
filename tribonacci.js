const tribonacci = (signature, n) => {
  if (n === 0) return [];
  if (n <= 3) return signature.slice(0, n);
  const table = [...signature, ...Array(n - 3).fill(0)];
  for (let i = 3; i < n; i++) {
    table[i] = table.slice(i - 3, i).reduce((acc, cv) => acc + cv);
  }
  return table;
};

console.log(tribonacci([1, 1, 1], 10));

// [1, 1 ,1, 3, 5, 9, 17, 31, ...]
// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
