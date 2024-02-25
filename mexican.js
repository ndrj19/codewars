const wave = (str) =>
  str
    .split("")
    .map(
      (e, i) =>
        (e = str
          .split("")
          .map((e, j) => (i === j ? e.toUpperCase() : e))
          .join(""))
    )
    .filter((e) => e.match(/[A-Z]/));
console.log(wave("hello"));
console.log(wave("two words"));
