const capitalize = (str) => {
  let even = "";
  let odd = "";
  str
    .toLowerCase()
    .split("")
    .map((char, i) => {
      if (i % 2 === 0) {
        even += char.toUpperCase();
        odd += char;
      } else {
        even += char;
        odd += char.toUpperCase();
      }
    });
  return [even, odd];
};

console.log(capitalize("codewarriors"));
