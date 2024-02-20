const gimme = (triplet) => {
  let min = triplet[0];
  let max = triplet[0];
  for (let i = 1; i < triplet.length; i++) {
    if (triplet[i] < min) min = triplet[i];
    if (triplet[i] > max) max = triplet[i];
  }
  return triplet.filter((e) => e !== min && e !== max)[0];
};

console.log(gimme([5, 10, 14]));
console.log(gimme([2, 3, 1]));
console.log(gimme([2.1, 3.2, 1.4]));
