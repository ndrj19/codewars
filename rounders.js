const rounders = (num) => {
  const digits = String(num)
    .split("")
    .map((e) => Number(e))
    .reverse();

  for (let i = 0; i < digits.length - 1; i++) {
    digits[i] >= 5 ? (digits[i + 1] = digits[i + 1] + 1) : digits[i + 1];
    digits[i] = 0;
  }

  return Number(digits.reverse().join(""));
};

console.log(rounders(1234));
console.log(rounders(1445));
