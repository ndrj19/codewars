const isAnagram = (test, original) => {
  if (test.length !== original.length) return false;
  const letters = {};
  for (let i = 0; i < test.length; i++) {
    if (!letters[test[i]]) {
      letters[test[i]] = 1;
    } else letters[test[i]] += 1;
  }

  return letters;
};

console.log(isAnagram("foefet", "toffee"));
