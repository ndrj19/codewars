const doubleChar = (str) =>
  str
    .split("")
    .map((e) => e + e)
    .join("");
console.log(doubleChar("Hello world!"));
console.log(doubleChar("1234!_ "));
