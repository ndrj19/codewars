const persistence = (num) => {
  if (num.toString().length === 1) return 1;

  let count = 0;
  let n = num;
  while (n.toString().length >= 2) {
    n = n
      .toString()
      .split("")
      .map((e) => Number(e))
      .reduce((a, b) => a * b);
    count++;
  }
  return count;
};

console.log(persistence(999));
