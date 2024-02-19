const sumDigits = (num) => {
  if (num === 0) return +0;
  return String(Math.abs(num))
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
};

console.log(sumDigits(99));
console.log(sumDigits(10));
console.log(sumDigits(-32));
console.log(sumDigits(0));
