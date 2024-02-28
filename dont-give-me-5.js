function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!String(i).split("").includes("5")) {
      count++;
    }
  }
  return count;
}

// console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
