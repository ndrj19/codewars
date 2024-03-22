const removeSmallest = (numbers) => {
  let smallestIndex = 0;
  let smallestInt = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallestInt) {
      smallestInt = numbers[i];
      smallestIndex = i;
    }
  }

  return numbers.filter((_, i) => i != smallestIndex);
};

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
