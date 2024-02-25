const spinWords = (str) => {
  return str
    .split(" ")
    .map((e) => (e.length < 5 ? e : e.split("").reverse().join("")))
    .join(" ");
};

console.log(spinWords("Hey fellow warriors"));
console.log(spinWords("Welcome"));
