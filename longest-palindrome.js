const longestPalindrome = (str) => {
  let palLength = 0;
  let hasOneWithOne = false;
  let hasOneWithOdd = false;
  const chars = str
    .toLowerCase()
    .split("")
    .filter((e) => e.match(/^[a-z0-9]+$/i))
    .reduce((acc, cv) => {
      acc[cv] = (acc[cv] || 0) + 1;
      return acc;
    }, {});

  for (const char in chars) {
    if (chars[char] === 1) hasOneWithOne = true;
    else if (chars[char] % 2 !== 0) hasOneWithOdd = true;
  }

  for (const char in chars) {
    if (chars[char] % 2 === 0) palLength += chars[char];
    if (chars[char] % 2 !== 0 && chars[char] >= 3) palLength += chars[char] - 1;
  }
  if (hasOneWithOdd || hasOneWithOne) palLength += 1;

  return palLength;
};

console.log(longestPalindrome("aabbcc_yYx_"));
console.log(longestPalindrome("xyz__a_/b0110//a_zyx"));
console.log(longestPalindrome("$aaabbbccddd_!jJpqlQx_.///yYabababhii_"));

// alpha-numeric regex /^[a-z0-9]+$/i
