function isPrime(number){
    let prime = true;

    if(number == 1){
        return false;
    }

    for (let index = 2; index <= number/2; index++) {
       prime = number % index != 0;

       if(!prime){
        return false;
       }
    }

    return prime;
}



console.log(isPrime(1));


module.exports = { isPrime };
