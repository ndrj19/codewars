const hamsterMe = (code, message) => {
  const alpha = Array(26)
    .fill()
    .map((_, i) => i + 97);
  const alphabet = alpha.map((x) => String.fromCharCode(x));

  const charCodes = code
    .split("")
    .sort()
    .map((e) => [alphabet.indexOf(e)]);

  for (let i = 0; i < charCodes.length - 1; i++) {
    for (let j = charCodes[i][0]; j < charCodes[i + 1][0] - 1; j++) {
      charCodes[i].push(j + 1);
    }
  }

  let i = charCodes[charCodes.length - 1][0] + 1;
  while (i <= 25) {
    charCodes[charCodes.length - 1].push(i);
    i++;
  }

  if (charCodes[0][0] !== 0) {
    let i = 0;
    while (i < charCodes[0][0]) {
      charCodes[charCodes.length - 1].push(i);
      i++;
    }
  }

  const charCodesTable = charCodes.map((e) => e.map((e) => alphabet[e]));
  const messageLetters = message.split("").map((e) => {
    for (charRow of charCodesTable) {
      if (charRow.includes(e)) {
        let str = charRow[0];
        return str + (charRow.indexOf(e) + 1);
      }
    }
  });

  return messageLetters.join("");
};

console.log(hamsterMe("hamster", "hamster"));
console.log(hamsterMe("hmster", "hamster"));
// console.log(hamsterMe("hamster", "helpme"));
// console.log(hamsterMe("hamster", "abcdefghijklmnopqrstuvwxyz"));
// console.log(hamsterMe("hhhhammmstteree", "hamster"));
