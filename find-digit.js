const solveExpression = (str) => {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  // find operator index
  const operator = [];
  const equalSign = [];
  for (let i = 1; i < str.length; i++) {
    if (
      (str[i] === "+" || str[i] === "-" || str[i] === "*") &&
      (str[i - 1] === "?" || digits.includes(str[i - 1]) === true)
    ) {
      operator[0] = str[i];
      operator[1] = i;
    }
    if (str[i] === "=") {
      equalSign[0] = str[i];
      equalSign[1] = i;
    }
  }

  // get numbers (w/ or w/o "?")
  const a = str.split("").slice(0, operator[1]).join("");
  const b = str
    .split("")
    .slice(operator[1] + 1, equalSign[1])
    .join("");
  const c = str
    .split("")
    .slice(equalSign[1] + 1)
    .join("");

  // replace '?'
  switch (operator[0]) {
    case "+":
      for (let i = 0; i <= 9; i++) {
        console.log(
          a.replace(/\?/g, i),
          b.replace(/\?/g, i),
          c.replace(/\?/g, i)
        );
        if (
          Number(a.replace(/\?/g, i)) + Number(b.replace(/\?/g, i)) ===
          Number(c.replace(/\?/g, i))
        )
          if (
            a.replace(/\?/g, i).length > 1 &&
            Number(a.replace(/\?/g, i)[0] !== 0)
          )
            return i; // CHECK WHY
      }
    case "-":
      for (let i = 0; i <= 9; i++) {
        if (
          Number(a.replace(/\?/g, i)) - Number(b.replace(/\?/g, i)) ===
          Number(c.replace(/\?/g, i))
        )
          return i;
      }
    case "*":
      for (let i = 0; i <= 9; i++) {
        if (
          Number(a.replace(/\?/g, i)) * Number(b.replace(/\?/g, i)) ===
          Number(c.replace(/\?/g, i))
        )
          return i;
      }
  }
  return -1;
};
//console.log(solveExpression("1+1=?"));
//console.log(solveExpression("123*45?=5?088"));
//console.log(solveExpression("-5?*-1=5?"));
//console.log(solveExpression("19--45=5?"));
//console.log(solveExpression("??*??=302?"));
//console.log(solveExpression("?*11=??"));
//console.log(solveExpression("??*1=??"));
console.log(solveExpression("??+??=??"));

/*
['1+1=?', 2],
['123*45?=5?088', 6],
['-5?*-1=5?', 0],
['19--45=5?', -1],
['??*??=302?', 5],
['?*11=??', 2],
['??*1=??', 2],
['??+??=??', -1]];
*/

// Number(a.replace("?", i)) +
//Number(b.replace("?", i) === Number(c.replace("?", i)))
