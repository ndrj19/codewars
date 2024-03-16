const variance = (numbers) => {
  const avg = numbers.reduce((acc, cv) => acc + cv) / numbers.length;
  const variance =
    numbers.map((e) => (e - avg) ** 2).reduce((acc, cv) => acc + cv) /
    numbers.length;
  return variance;
};

// console.log(variance([1, 2, 2, 3]));
console.log(variance([-10, 0, 10, 20, 30]));
// console.log(variance([8, 9, 10, 11, 12]));
// 400 100 0 100 400
