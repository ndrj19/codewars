const sumMultiples3or5 = (num) => {
  if (num <= 3) return 0;
  if (num < 5) return 3;
  arr = [];
  for (let i = 3; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((a, b) => a + b);
};

console.log(sumMultiples3or5(10));
