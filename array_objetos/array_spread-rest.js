//Spread: uma forma de lidar separadamente com elementos

function sum(x, y, z) {
    return x + y + x;
}

const numbers = [3, 3, 3];

console.log(sum(...numbers));

// Rest: combina os argumentos em um array

function confereTamanho(...args) {
    console.log(args.length);
}

confereTamanho(); // 0
confereTamanho(1, 2); // 2
confereTamanho(1, 2, 5, 6); // 4
