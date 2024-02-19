const toPretty = (seconds) => {
  if (seconds === 0) return "just now";
  const divisors = [1, 60, 3600, 3600 * 24, 3600 * 24 * 7];
  const units = ["second", "minute", "hour", "day", "week"];
  for (let i = 0; i < divisors.length; i++) {
    const nextBigger = Math.floor(seconds / divisors[i]);
    if (seconds < divisors[i + 1] || i === divisors.length - 1)
      return nextBigger === 1
        ? `${units[i] === "hour" ? "an" : "a"} ${units[i]} ago`
        : `${nextBigger} ${units[i]}s ago`;
  }
};

console.log(toPretty(1));
console.log(toPretty(3700));
console.log(toPretty(40000));
console.log(toPretty(10000));
console.log(toPretty(400000));
console.log(toPretty(10000000));
