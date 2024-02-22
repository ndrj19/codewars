const capitals = (word) => {
  let result = [];
  word.split("").forEach((e, i) => {
    if (e.match(/[A-Z]/g)) result.push(i);
  });
  return result;
};
