const isAllPossibilities = (x) => {
  for (let i = 0; i < x.length; i++) {
    if (!x.includes(i)) return false;
  }
  return x.sort((a, b) => b - a)[0] <= x.length - 1 ? true : false;
};

console.log(isAllPossibilities([0, 1, 2, 3]));
// console.log(isAllPossibilities([1, 2, 3, 4]));
