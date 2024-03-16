const decode = (input) => {
  const vals = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
  ];

  const suits = ["c", "d", "h", "s"];

  return input
    .map((cardCode) => {
      const val =
        cardCode < 13
          ? vals[cardCode]
          : cardCode < 26
          ? vals[cardCode - 13]
          : cardCode < 39
          ? vals[cardCode - 26]
          : vals[cardCode - 39];
      const suit =
        cardCode < 13 ? "c" : cardCode < 26 ? "d" : cardCode < 39 ? "h" : "s";
      return val + suit;
    })
    .sort((a, b) => {
      if (a[1] === b[1]) {
        return vals.indexOf(a[0]) - vals.indexOf(b[0]);
      }
      return suits.indexOf(a[1]) - suits.indexOf(b[1]);
    });
};

console.log(decode([7, 22, 51]));
console.log(decode([50, 6, 13, 37, 30]));

const encode = (input) => {
  const vals = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "T",
    "J",
    "Q",
    "K",
  ];
  return input
    .map((card) =>
      card.split("").map((e, i) => {
        if (i === 0) {
          return vals.indexOf(e);
        } else {
          return e === "c" ? 0 : e === "d" ? 1 : e === "h" ? 2 : 3;
        }
      })
    )
    .map((valSuit) => valSuit[0] + valSuit[1] * 13)
    .sort((a, b) => a - b);
};

// console.log(encode(["Td", "8c", "Ks"]));
