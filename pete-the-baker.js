const cakes = (recipe, available) => {
  let numCakes = null;

  for (let i in recipe) {
    let inStock = false;
    for (let j in available) {
      if (i === j) {
        inStock = true;
        const quantRecipe = recipe[i];
        const quantAvailable = available[j];
        if (quantAvailable < quantRecipe) return 0;
        const cakesPossible = Math.floor(quantAvailable / quantRecipe);
        if (cakesPossible < numCakes || !numCakes) {
          numCakes = cakesPossible;
        }
      }
    }
    if (!inStock) return 0;
  }
  return numCakes;
};

// must return 2
console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
// must return 0
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);

const fibonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return memo[n];
};

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
