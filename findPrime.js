function findPrime(...params) {
    for (let index = 0; index < params.length; index++) {
      let isPrime = true;
      const element = params[index];
      for (let i = 0; i < element + 1; i++) {
        if (element % i == 0 && i != 1 && i != element) {
          isPrime = false;
        }
      }
      if (isPrime == true) {
        console.log("Number: " + element + " is a prime number.");
      } else {
        console.log("Number: " + element + " is not a prime number.");
      }
    }
  }
  
findPrime(2, 5, 8, 21, 13);
