const multiplicationTable = (size) => {
  const table = [];
  for (let i = 1; i <= size; i++) {
    table.push(
      Array(size)
        .fill()
        .map((_, j) => i * (j + 1))
    );
  }
  return table;
};

console.log(multiplicationTable(3));
console.log(multiplicationTable(4));
