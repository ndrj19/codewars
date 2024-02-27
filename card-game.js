const winner = (deckSteve, deckJosh) => {
  const cardValues = [
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
    "A",
  ];

  let scoreSteve = 0;
  let scoreJosh = 0;

  for (let i = 0; i < deckSteve.length; i++) {
    const cardSteveIndex = cardValues.indexOf(deckSteve[i]);
    const cardJoshIndex = cardValues.indexOf(deckJosh[i]);
    cardSteveIndex > cardJoshIndex
      ? scoreSteve++
      : cardJoshIndex > cardSteveIndex
      ? scoreJosh++
      : null;
  }

  return scoreSteve > scoreJosh
    ? `Steve wins ${scoreSteve} to ${scoreJosh}`
    : scoreJosh > scoreSteve
    ? `Josh wins ${scoreJosh} to ${scoreSteve}`
    : "Tie";
};

console.log(winner(["A", "7", "8"], ["K", "5", "9"]));
