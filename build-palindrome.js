const buildPalindrome = (str) => {
  const reverseString = (str) => str.split("").reverse().join("");
  if (str === reverseString(str)) return str;
  for (let i = 0; i < str.length; i++) {
    const isPal = str + reverseString(str.slice(0, i + 1));
    if (isPal === reverseString(isPal)) return isPal;
  }
};

console.log(buildPalindrome("abcdc"));
console.log(buildPalindrome("reliefpf"));
