const queueTime = (customers, n) => {
  if (customers.length === 0) return 0;
  let queueObj = {};

  for (let i = 0; i < customers.length; i++) {
    if (Object.keys(queueObj).length < n) {
      queueObj["key" + i] = customers[i];
    } else {
      const lowest = Object.values(queueObj).sort((a, b) => a - b)[0];
      const key = Object.keys(queueObj).find((key) => queueObj[key] === lowest);
      queueObj[key] += customers[i];
    }
  }
  return Object.values(queueObj).sort((a, b) => b - a)[0];
};

// console.log(queueTime([2, 2, 3, 3, 4, 4], 2));
// console.log(queueTime([2, 2, 3, 3, 4, 4], 3));
// console.log(queueTime([1, 2, 3, 4], 1));
// console.log(queueTime([10, 2, 3, 3], 2));
console.log(queueTime([2, 3, 10, 2], 2));
console.log(queueTime([], 1));
console.log(queueTime([5, 3, 4], 1));
