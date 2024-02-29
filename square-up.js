const squareUp = (n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(Array.from({ length: i + 1 }, (_, i) => i + 1));
  }

  return result
    .map((e) =>
      e
        .reverse()
        .join("")
        .padStart(n, "0")
        .split("")
        .map((e) => Number(e))
    )
    .flatMap((subArray, index) => [...subArray]);
};

// console.log(squareUp(2));
// console.log(squareUp(3));
// console.log(squareUp(4));
console.log(squareUp(10));
