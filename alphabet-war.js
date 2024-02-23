const alphabetWar = (str) => {
  const left = { w: 4, p: 3, b: 2, s: 1 };
  const right = { m: 4, q: 3, d: 2, z: 1 };

  const bombKills = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*") {
      bombKills.push(i - 1, i, i + 1);
    }
  }

  const afterBomb = str.split("").filter((_, i) => !bombKills.includes(i));

  let leftPower = afterBomb.reduce(
    (acc, cv) => (left[cv] ? acc + left[cv] : acc + 0),
    0
  );

  let rightPower = afterBomb.reduce(
    (acc, cv) => (right[cv] ? acc + right[cv] : acc + 0),
    0
  );

  return leftPower === rightPower
    ? "Let's fight again!"
    : leftPower > rightPower
    ? "Left side wins!"
    : "Right side wins!";
};

console.log(alphabetWar("zdqmwpbs"));
console.log(alphabetWar("*wwwwww*z*"));
