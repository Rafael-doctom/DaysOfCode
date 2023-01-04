let churras = [
    "--xo--x--ox--",
    "--xx--x--xx--",
    "--oo--o--oo--",
    "--xx--x--ox--",
    "--xx--x--ox--"
];

const veganNoVegan = () => {

    let vegetariano = 0;
    let noVegetariano = 0;

    for (let espetos in churras) {
        if (churras[espetos].toLocaleLowerCase().includes('x')) {
            vegetariano++
        } else {
            noVegetariano++
        }
    }

    console.log(vegetariano, noVegetariano)

};


veganNoVegan();