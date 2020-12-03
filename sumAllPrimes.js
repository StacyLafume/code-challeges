//SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17

const sumAllPrimes = range => {
    const isPrime = number => {
        for(let j = 2; j < number; j++){
            if(number % j === 0){
                return false
            }
        }
        return true
    }
    let total = 0;
    for(let i = 2; i <= range; i++){
        if(isPrime(i)){
            total += i
        } 
    }
    return total;
}


console.log(sumAllPrimes(10))