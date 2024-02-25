const digitalRoot = (n) => {
  if (n < 10) return n;
  const sumOfDigits = String(n)
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
  return digitalRoot(sumOfDigits);
};

console.log(digitalRoot(456));
console.log(digitalRoot(16));
console.log(digitalRoot(8));
