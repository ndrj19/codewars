const comp = (arr1, arr2) =>
  !arr1 || !arr2
    ? false
    : arr1
        .sort((a, b) => a - b)
        .map((e) => e ** 2)
        .join("") === arr2.sort((a, b) => a - b).join("")
    ? true
    : false;

console.log(
  comp(
    [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  )
);
