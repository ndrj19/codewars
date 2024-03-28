const number = (busStops) => {
  const getOn = busStops.map((e) => e[0]).reduce((a, b) => a + b);
  const getOff = busStops.map((e) => e[1]).reduce((a, b) => a + b);
  return getOn - getOff;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ])
);
console.log(number([[0, 0]]));
