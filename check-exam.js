const checkExam = (array1, array2) => {
  const score = array1
    .map((e, i) => (e === array2[i] ? 4 : array2[i] === "" ? 0 : -1))
    .reduce((acc, cv) => acc + cv);
  return score < 0 ? 0 : score;
};

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]));
