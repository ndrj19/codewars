const mixedFraction = (s) => {
  const arr = s.split("/");
  if (arr[1] === "0" || arr[1] === "-0")
    throw new Error("Must raise ZeroDivisionError");
  if (arr[0] === "0") return "0";
  let minus = false;
  if (arr[0].split("")[0] === "-") minus = !minus;
  if (arr[1].split("")[0] === "-") minus = !minus;
  console.log(minus);
  if (arr[0] === arr[1]) return "1";
  const denominator = Math.abs(Number(arr[1]));
  const int = Math.abs(Math.floor(Math.abs(arr[0]) / denominator));
  if (int === Math.abs(Number(arr[0])) / denominator) {
    return `${minus ? "-" : ""}${int}`;
  }
  const nominator = Math.abs(arr[0]) % denominator;
  let greatestCommonDivisor = 1;
  for (let i = 2; i <= nominator; i++) {
    if (nominator % i === 0 && denominator % i === 0) greatestCommonDivisor = i;
  }
  const fraction = `${nominator / greatestCommonDivisor}/${
    denominator / greatestCommonDivisor
  }`;
  if (int === 0) return `${minus ? "-" : ""}${fraction}`;
  return `${minus ? "-" : ""}${int} ` + fraction;
};

console.log(mixedFraction("42/9"));
console.log(mixedFraction("-91/95"));
// console.log(mixedFraction("0/18891"));
// console.log(mixedFraction("11/11"));
// console.log(mixedFraction("-10/7"));
