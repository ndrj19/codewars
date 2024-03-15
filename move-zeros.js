/**
 *
 * @param {Array} arr
 */
const moveZeros = (arr) => {
  let zeros = [];
  for (let i of arr) {
    if (i === 0) zeros.push(i);
  }
  const result = arr.filter((el) => el !== 0);
  result.push(...zeros);
  return result;
};

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
