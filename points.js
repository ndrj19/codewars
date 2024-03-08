const points = (games) => {
  return games.reduce((acc, cv) => {
    const score = cv.split(":").map((e) => Number(e));
    const points = score[0] > score[1] ? 3 : score[0] < score[1] ? 0 : 1;
    return (acc += points);
  }, 0);
};

console.log(points(["1:0", "2:0", "3:0", "4:0"]));
