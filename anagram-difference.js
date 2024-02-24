const anagramDifference = (w1, w2) => {
  const createLetterObj = (word) => {
    let letterObj = {};
    for (let letter of word) {
      if (letterObj[letter]) letterObj[letter] += 1;
      else letterObj[letter] = 1;
    }
    return letterObj;
  };

  const calcLettersToRemove = (obj1, obj2) => {
    let lettersToRemove = 0;
    for (let letter in obj1) {
      if (!obj2[letter]) lettersToRemove += obj1[letter];
      else if (obj1[letter] > obj2[letter])
        lettersToRemove += obj1[letter] - obj2[letter];
    }
    return lettersToRemove;
  };

  const letterObj1 = createLetterObj(w1);
  const letterObj2 = createLetterObj(w2);

  return (
    calcLettersToRemove(letterObj1, letterObj2) +
    calcLettersToRemove(letterObj2, letterObj1)
  );
};

console.log(anagramDifference("acdeorsw", "aacehkknrr"));
console.log(anagramDifference("hackerrank", "codewars"));
