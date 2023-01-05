let fruits = ['banana', 'apple', 'banana', 'pineapple', 'pear'];
let variavel = 0;

for (value in fruits) {
    if (fruits[value].includes('banana')) {
        variavel++
    } else {
        console.log('not found')
    }
};

console.log(variavel);
