const candleHeights = (candles) => {
  const sortedCandles = candles.sort((a, b) => b - a);
  const highestCandles = sortedCandles.filter(
    (candle) => candle === sortedCandles[0]
  );
  return highestCandles.length;
};

console.log(candleHeights([1, 3, 4, 4]));
