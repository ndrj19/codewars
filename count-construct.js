const countConstruct = (target, words) => {
  const table = Array(target.length + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= target.length; i++) {
    if (table[i]) {
      for (let word of words) {
        const remainder = target.slice(i);
        if (remainder.indexOf(word) === 0) {
          table[i + word.length] += table[i];
        }
      }
    }
  }
  return table[target.length];
};

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef"]));
console.log(countConstruct("abcdef", ["ab", "cd", "ef"]));
console.log(countConstruct("purple", ["r", "pu", "l", "p", "ple", "e", "le"]));
console.log(countConstruct("purple", ["pu", "l", "p", "ple"]));
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
