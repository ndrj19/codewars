// const perfectPower = (n) => {
//   const squareRoot = n ** 0.5;
//   if (squareRoot === Math.floor(squareRoot)) {
//     return [squareRoot, 2];
//   }
//   for (let m = 2; m <= Math.ceil(squareRoot); m++) {
//     for (let k = 3; k <= Math.ceil(squareRoot); k++) {
//       if (m ** k === n) {
//         return [m, k];
//       }
//     }
//   }
//   return null;
// };

const perfectPower = (n) => {
  const squareRoot = n ** 0.5;
  if (squareRoot === Math.floor(squareRoot)) {
    return [squareRoot, 2];
  }
  for (let k = 3; k <= Math.ceil(squareRoot); k++) {
    let m = 2;
    while (m ** k <= n) {
      if (m ** k === n) {
        return [m, k];
      }
      m++;
    }
  }
  return null;
};

console.log(perfectPower(81));
console.log(perfectPower(1024));
console.log(perfectPower(2097152));
console.log(perfectPower(32));
console.log(perfectPower(8));
console.log(perfectPower(345667));
