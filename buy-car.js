function nbMonths(
  startPriceOld,
  startPriceNew,
  savingperMonth,
  percentLossByMonth
) {
  let priceOld = startPriceOld;
  let priceNew = startPriceNew;
  let result = priceOld - priceNew;
  if (result >= 0) {
    return [0, Math.round(result)];
  }

  let month = 1;
  let savings = savingperMonth;
  let percentLoss = percentLossByMonth;
  while (result < 0) {
    const priceOldCurrent = priceOld - (priceOld * percentLoss) / 100;
    const priceNewCurrent = priceNew - (priceNew * percentLoss) / 100;
    result = priceOldCurrent - priceNewCurrent + savings;

    if (result > 0) {
      return [month, Math.round(result)];
    }

    priceOld = priceOldCurrent;
    priceNew = priceNewCurrent;
    month++;
    savings += savingperMonth;
    if (month % 2 === 0) percentLoss += 0.5;
  }
}

console.log(nbMonths(2000, 8000, 1000, 1.5)); // [6, 766]
