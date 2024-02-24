const persistence = (num, calls = 0) => {
  if (num < 10) return 0;
  calls += 1;
  const digitsMultiplied = String(num)
    .split("")
    .reduce((acc, cv) => acc * cv, 1);
  if (String(digitsMultiplied).length === 1) return calls;
  return persistence(digitsMultiplied, calls);
};

console.log(persistence(39));
console.log(persistence(25));
console.log(persistence(999));
console.log(persistence(4));
