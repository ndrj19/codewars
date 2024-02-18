const allConstruct = (target, words) => {
  const table = Array(target.length + 1).fill(null);
  table[0] = [];
  let solutions = [];

  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (let word of words) {
        const remainder = target.slice(i);
        if (remainder.indexOf(word) === 0) {
          table[i + word.length] = [...table[i], word];
          if (i + word.length === target.length) {
            solutions.push(table[target.length]);
          }
        }
      }
    }
  }
  return solutions;
};

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef"]));
console.log(allConstruct("abcdef", ["ab", "cd", "ef"]));
console.log(allConstruct("purple", ["r", "pu", "l", "p", "ple", "e", "le"]));
console.log(allConstruct("purple", ["pu", "l", "p", "ple"]));
