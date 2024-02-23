const sortArray = (arr) => {
  const odds = arr.filter((e) => e % 2 !== 0).sort((a, b) => a - b);
  let k = 0;
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      res.push(odds[k]);
      k++;
    } else res.push(arr[i]);
  }
  return res;
};

console.log(sortArray([5, 8, 6, 3, 4]));
