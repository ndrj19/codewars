const diagonalDifference = (arr) => {
  const n = arr.length;
  const sumDiagonal1 = arr
    .map((subArray, i) => subArray.filter((_, j) => i === j))
    .flat()
    .reduce((acc, cv) => acc + cv);
  const sumDiagonal2 = arr
    .map((subArray, i) => subArray.filter((_, j) => i === n - 1 - j))
    .flat()
    .reduce((acc, cv) => acc + cv);

  return Math.abs(sumDiagonal1 - sumDiagonal2);
};

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
