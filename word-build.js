const getOptionsCount = (target, arr) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (let subStr of arr) {
        const remainder = target.slice(i);
        if (remainder.indexOf(subStr) === 0) {
          table[i + subStr.length] += table[i];
        }
      }
    }
  }
  return table[target.length];
};

console.log(getOptionsCount("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(getOptionsCount("abcdef", ["ab", "cd", "ef"]));
console.log(getOptionsCount("purple", ["r", "pu", "l", "p", "ple"]));
console.log(getOptionsCount("purple", ["pu", "l", "p", "ple"]));
// console.log(getOptionsCount("example", ["exa", "exam", "ple"]));
console.log(getOptionsCount("example", ["ex", "am", "exam", "pl", "ple"]));
