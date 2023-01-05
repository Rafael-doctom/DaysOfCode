

let total = 0;

let socks = 'RAFARAFA';

let cut = socks.split('').sort();

console.log(cut);

for (let inicio = 0; inicio < cut.length; inicio++) {
    if (cut[inicio] === cut[inicio + 1]) {
        total++
        inicio++
    };
};


console.log(total);

