function isPrime() {

    // let isPrime = 75797;
    // let isNotPrime = 757972;

    let number = 75797;
    let init = 2;

    for (init; init <= number; init++) {
        if (number % init === 0) {
            console.log('false: is not prime')
            break
        } else {
            console.log('true: é prime')
            break
        }
    };
}


isPrime();