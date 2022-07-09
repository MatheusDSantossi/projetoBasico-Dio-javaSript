function logLetras(palavra, nums) {
    for(letra of palavra) {
        console.log(letra);
    }

    for(num of nums) {
        console.log(num)
    }
}

const palavra = "abacaxi";
const nums = [30, 20, 233, 2];

logLetras(palavra, nums);
