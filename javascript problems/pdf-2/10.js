function findPrimes(a , b){
    const primes = [];
  
    // Loop through the range from start to end
    for (let num = a; num <=  b; num++) {
      let isPrime = true;
  
      // Check if num is prime
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
          isPrime = false;
          break;
        }
      }
  
      // If it's prime, add to the primes array
      if (isPrime && num > 1) {
        primes.push(num);
      }
    }
    
    return primes;
}

console.log(findPrimes(10, 20));

