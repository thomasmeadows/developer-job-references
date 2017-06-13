var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var count;


// Big Theta(n) or Θ(n)
// c​1 * n + c2
var linearSearch = function(array, targetValue) {
  count = 0;
  for (var guess = 0; guess < array.length; guess++) {
    count++;
    if (array[guess] === targetValue) {
        return guess;
    }
  }
  return -1;
};

primes.forEach(prime => {
  console.log('index', linearSearch(primes, prime), 'prime', prime, 'iterations', count);
})
