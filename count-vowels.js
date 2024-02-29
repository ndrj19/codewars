const countVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .reduce((acc, char) => (vowels.includes(char) ? acc + 1 : acc), 0);
};

console.log(countVowels("fkfdfdfaaaa"));
console.log(countVowels("andrej"));
