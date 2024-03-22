const createTwoSetsOfEqualSum = (n) => {
  const numbers = [...Array(n + 1).keys()];
  numbers.shift();
  const sumOfDigits = numbers.reduce((acc, cv) => acc + cv);

  if (sumOfDigits % 2 !== 0) {
    return [];
  }

  const equalSumGoal = sumOfDigits / 2;

  const possibleCombinations = (numbers) => {
    const combinations = [[]];
    for (let num of numbers) {
      const len = combinations.length;
      for (let i = 0; i < len; i++) {
        const temp = combinations[i].slice();
        temp.push(num);
        if (temp.reduce((acc, cv) => acc + cv, 0) === equalSumGoal) {
          const remainingNumbers = numbers.filter((num) => !temp.includes(num));
          return remainingNumbers.reduce((acc, cv) => acc + cv, 0) ===
            equalSumGoal
            ? [temp, remainingNumbers]
            : null;
        }
        combinations.push(temp);
      }
    }
    return [];
  };

  return possibleCombinations(numbers);
};

console.log(createTwoSetsOfEqualSum(8));

// divide and conquer
