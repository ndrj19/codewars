/*const accum = (s) => {
  const table = Array(s.length).fill(null);
  for (let i = 0; i < s.length; i++) {
    let str = "";
    for (let j = 1; j <= i + 1; j++) {
      if (j === 1) str += s[i].toUpperCase();
      else str += s[i].toLowerCase();
    }
    table[i] = str;
  }

  return table.join("-");
};*/

const accum = (str) =>
  str
    .toLowerCase()
    .split("")
    .map((e, i) => e.toUpperCase() + e.repeat(i))
    .join("-");

console.log(accum("abcd")); // -> "A-Bb-Ccc-Dddd")
console.log(accum("RqaEzty")); // -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")
console.log(accum("cwAt")); // -> "C-Ww-Aaa-Tttt")
