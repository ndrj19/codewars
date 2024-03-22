const warnTheSheep = (arr) => {
  const revArr = arr.reverse();
  const wolfPos = revArr.indexOf("wolf");
  return wolfPos === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${wolfPos}! You are about to be eaten by a wolf!`;
};

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]));
