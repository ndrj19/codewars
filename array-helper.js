Array.prototype.square = function () {
  if (this.length === 0) return [];
  return this.map((e) => e ** 2);
};
Array.prototype.cube = function () {
  if (this.length === 0) return [];
  return this.map((e) => e ** 3);
};
Array.prototype.average = function () {
  if (this.length === 0) return NaN;
  return this.reduce((acc, cv) => acc + cv) / this.length;
};
Array.prototype.sum = function () {
  if (this.length === 0) return 0;
  return this.reduce((acc, cv) => acc + cv);
};
Array.prototype.even = function () {
  if (this.length === 0) return [];
  return this.filter((e) => e % 2 === 0);
};
Array.prototype.odd = function () {
  if (this.length === 0) return [];
  return this.filter((e) => e % 2 !== 0);
};
