const getDivisorsCnt = (n) => {
  let i = n;
  let numberDivisors = 0;
  while (i > 0) {
    if (n % i === 0) numberDivisors += 1;
    if (i === n) i;
    i--;
  }
  return numberDivisors;
};

console.log(getDivisorsCnt(30));
