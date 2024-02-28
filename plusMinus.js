const plusMinus = (arr) => {
  const len = arr.length;
  const posNegZero = arr.reduce(
    (acc, cv) =>
      cv === 0 ? (acc[2]++, acc) : cv > 0 ? (acc[0]++, acc) : (acc[1]++, acc),
    [0, 0, 0]
  );

  console.log(
    (posNegZero[0] / len).toFixed(6),
    "\n",
    (posNegZero[1] / len).toFixed(6),
    "\n",
    (posNegZero[2] / len).toFixed(6)
  );
};

console.log(plusMinus([1, 1, 0, -1, -1]));
