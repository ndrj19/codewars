const landPerimeter = (arr) => {
  const arr2D = arr.map((str) => str.split(""));
  let perimeter = 0;
  for (let i = 0; i < arr2D.length; i++) {
    for (let j = 0; j < arr2D[0].length; j++) {
      if (arr2D[i][j] === "X") {
        let perimeterCurrent = 4;
        if (arr2D[i - 1] && arr2D[i - 1][j] === "X") perimeterCurrent -= 1;
        if (arr2D[i + 1] && arr2D[i + 1][j] === "X") perimeterCurrent -= 1;
        if (arr2D[i][j - 1] && arr2D[i][j - 1] === "X") perimeterCurrent -= 1;
        if (arr2D[i][j + 1] && arr2D[i][j + 1] === "X") perimeterCurrent -= 1;
        perimeter += perimeterCurrent;
      }
    }
  }
  return `Total land perimeter: ${perimeter}`;
};

console.log(landPerimeter(["XOOXO", "XOOXO", "OOOXO", "XXOXO", "OXOOO"]));
