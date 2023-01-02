// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
// findNemo("Nemo is me") ➞ "I found Nemo at 1!"
// findNemo("I Nemo am") ➞ "I found Nemo at 2!"

let phrase = "I am finding Nemo";
let splitPhrase = phrase.split(' ');
let indexGetNemo = splitPhrase.indexOf('Nemo');

if (indexGetNemo == -1) {
    console.log(`I can't find Nemo :(`);
} else {
    console.log(splitPhrase)
    console.log(`${phrase} in position on ${indexGetNemo + 1}`)
};
