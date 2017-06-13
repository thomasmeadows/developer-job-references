var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
var count;

// Θ(log n)

const binarySearch = function(array, targetValue) {
  count = 0;
  var min = 0;
  var max = array.length - 1;
  var guess;
  while (max >= min) {
    count++;
    guess = Math.floor((max + min) / 2);
    if (array[guess] === targetValue) { return guess; }
    if (array[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
};

primes.forEach(prime => {
  console.log('index', binarySearch(primes, prime), 'prime', prime, 'iterations', count);
})
