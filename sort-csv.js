const sortCsvColumns = (csvFileContent) => {
  const csvArr = csvFileContent.split("\n").map((e) => e.split(";"));

  // create data per column
  let dataColumnArr = [];
  for (let i = 0; i < csvArr[0].length; i++) {
    const currentColumn = [];
    for (let j = 0; j < csvArr.length; j++) {
      currentColumn.push(csvArr[j][i]);
    }
    dataColumnArr.push(currentColumn);
  }

  // sort columns based on first row
  const sortedDataColumnArr = dataColumnArr.sort((a, b) =>
    a[0].localeCompare(b[0], undefined, { sensitivity: "base" })
  );

  // create sorted csv array
  const sortedCsvArr = [];
  for (let i = 0; i < sortedDataColumnArr[0].length; i++) {
    let currentRow = [];
    for (let j = 0; j < sortedDataColumnArr.length; j++) {
      currentRow.push(sortedDataColumnArr[j][i]);
    }
    sortedCsvArr.push(currentRow.join(";"));
  }
  return sortedCsvArr.join("\n");
};

console.log(
  sortCsvColumns(
    "myjinxin2015;raulbc777;smile67;Dentzil;SteffenVogel_79\n" +
      "17945;10091;10088;3907;10132\n" +
      "2;12;13;48;11"
  )
);
