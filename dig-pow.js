/*
89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

const digPow = (n, p) => {
  const nString = n.toString();
  let target = 0;
  for (let i = 0; i < nString.length; i++) {
    target += nString[i] ** (p + i);
  }
  return target / n === Math.floor(target / n) ? target / n : -1;
};

console.log(digPow(89, 1));
console.log(digPow(695, 2));
console.log(digPow(46288, 3));
