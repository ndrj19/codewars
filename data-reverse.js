const dataReverse = (data) => {
  const bytes = [];
  for (let i = 0; i < data.length / 8; i++) {
    const byte = data.slice(i * 8, i * 8 + 8);
    bytes.push(byte);
  }
  return bytes.reverse().flat();
};

console.log(
  dataReverse([
    1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1,
    0, 1, 0, 1, 0, 1, 0,
  ])
);
