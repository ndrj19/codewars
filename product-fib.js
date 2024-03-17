/*const productFib = (prod) => {
  const table = Array(2)
    .fill()
    .map((e) => Array(2).fill(0));
  table[0][0] = 0;
  table[0][1] = 0;
  table[1][0] = 1;
  table[1][1] = 0;

  let i = 2;
  while (table[i - 1][1] < prod) {
    const nextFib = table[i - 2][0] + table[i - 1][0];
    const nextProd = table[i - 2][0] * table[i - 1][0];
    table.push([nextFib, nextProd]);
    i++;
  }

  if (table[table.length - 1][1] === prod) {
    return [table[table.length - 3][0], table[table.length - 2][0], true];
  } else {
    return [table[table.length - 3][0], table[table.length - 2][0], false];
  }
};*/

const productFib = (prod) => {
  let m = 5;
  let n = 8;

  while (m * n < prod) {
    const nextFib = m + n;
    m = n;
    n = nextFib;
  }
  return [m, n, m * n === prod];
};

console.log(productFib(4895)); // [55, 89, true])
console.log(productFib(5895)); // [89, 144, false])
console.log(productFib(74049690)); // [6765, 10946, true])
console.log(productFib(84049690)); // [10946, 17711, false])
console.log(productFib(193864606)); // [10946, 17711, true])
console.log(productFib(447577)); // [610, 987, false])
console.log(productFib(602070)); // [610, 987, true])
