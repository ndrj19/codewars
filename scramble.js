// const scramble = (s1, s2) => {
//   const letters = s1.split("");
//   const table = Array(s2.length + 1).fill(false);
//   table[0] = true;

//   for (let i = 0; i < table.length - 1; i++) {
//     if (table[i]) {
//       if (letters.includes(s2[i])) {
//         table[i + 1] = true;
//         letters.splice(letters.indexOf(s2[i]), 1);
//       } else return false;
//     }
//   }
//   return table[table.length - 1];
// };

const scramble = (s1, s2) => {
  const count = {};
  for (const char of s1) {
    count[char] = (count[char] || 0) + 1;
  }
  for (const char of s2) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
};

console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("javscripts", "javascript"));
console.log(scramble("jscripts", "javascript"));
console.log(scramble("aabbcamaomsccdd", "commas"));
