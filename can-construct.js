const canConstruct = (target, words) => {
  const table = Array(target.length + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of words) {
        const suffix = target.slice(i);
        if (suffix.indexOf(word) === 0) {
          table[i + word.length] = true;
        }
      }
    }
  }

  return table[target.length];
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("abcdef", ["ab", "cd", "ef"]));
console.log(canConstruct("purple", ["r", "pu", "l", "p", "ple"]));
console.log(canConstruct("purple", ["pu", "l", "p", "ple"]));
