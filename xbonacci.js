const Xbonacci = (signature, n) => {
  if (signature.length > n) return signature.slice(0, n);
  if (signature.length === n) return signature;
  const table = Array(n).fill(0);
  for (let i = 0; i < signature.length; i++) {
    table[i] = signature[i];
  }
  for (let i = signature.length; i < table.length; i++) {
    table[i] = table
      .slice(i - signature.length, i)
      .reduce((acc, cv) => acc + cv, 0);
  }
  return table;
};

console.log(Xbonacci([0, 0, 0, 0, 1], 10));
console.log(Xbonacci([1, 0, 0, 0, 0, 0, 1], 10));
console.log(
  Xbonacci(
    [7, 13, 8, 7, 7, 7, 10, 6, 2, 10, 6, 0, 0, 9, 14, 11, 14, 20, 17, 16],
    10
  )
);
console.log(
  Xbonacci([5, 11, 10, 10, 2, 17, 13, 12, 8, 6, 13, 15, 18, 19, 19, 7, 3], 1)
);
