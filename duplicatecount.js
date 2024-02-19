/**
 *
 * @param {string} word
 */
const duplicateCount = (word) => {
  const lowerCaseWord = word.toLocaleLowerCase();
  const letters = {};
  for (let i = 0; i < lowerCaseWord.length; i++) {
    if (lowerCaseWord[i] in letters) {
      letters[lowerCaseWord[i]] += 1;
    } else {
      letters[lowerCaseWord[i]] = 1;
    }
  }
  let numDuplicates = 0;
  for (const prop in letters) {
    letters[prop] > 1 ? numDuplicates++ : null;
  }
  return numDuplicates;
};

console.log(duplicateCount("hello"));
console.log(duplicateCount("helloo"));
console.log(duplicateCount("Indivisibilities"));
console.log(duplicateCount("Ii"));
