const camelCase = (str) =>
  str
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((letter, i) => (i === 0 ? letter.toUpperCase() : letter))
        .join("")
    )
    .join("");

console.log(camelCase("camel case"));
