const beginning = (xs) => {
  for (let i = 1; i <= xs.length; i++) {
    const getNext = (arr, currentNum, currentLength) =>
      arr
        .split("")
        .slice(currentLength, currentLength + String(currentNum + 1).length)
        .join("");

    let num = Number(xs.split("").slice(0, i).join(""));
    if (String(num).length === xs.length) return num;

    let currentLength = String(num).length;
    let next = getNext(xs, num, currentLength);

    while (String(num + 1) === next) {
      currentLength += String(num + 1).length;
      if (currentLength === xs.length)
        return Number(xs.split("").slice(0, i).join(""));
      num = num + 1;
      next = getNext(xs, num, currentLength);
    }
  }
};

console.log(beginning("123"));
console.log(beginning("91011"));
console.log(beginning("17181920"));
console.log(beginning("1235"));
