// Crie uma função que recebe dois números parâmetros
// confira se os números são iguais
// confisa se a soma dos números é maior que 10 ou menor que 20
// retorne uma string dizendos os numeros num1 e num2 não sã/o iguais 
// .sua soma é soma maior/me nor que 10 e maior/menor que 20

// Exemplo:
// input 1, 2
// output: Os números 1 e 2 não sao iguais. Sua soma é 3, que é
// menor que 10 e menor que 20

function superSum(n1, n2) {
    // testing functions and ternarios
    let sum = n1 + n2;

    function equal(n1, n2) {
        let isEqual;
        n1 === n2 ? isEqual = "são" : isEqual = "não são";
        
        return isEqual;
    }

    function sumIsGreater10(n1, n2) {
        let isGreater10;
        sum > 10 ? isGreater10 = "maior" : isGreater10 = "menor";
        
        return isGreater10;
    }

    function sumIsGreater20(n1, n2) {
        let isGreater20;
        sum > 20 ? isGreater20 = "maior" : isGreater20 = "menor"

        return isGreater20;
    }

    // Os números 1 e 2 não sao iguais. Sua soma é 3, que é
// menor que 10 e menor que 20

    return `Os números ${n1} e ${n2} ${equal(n1, n2)} iguais. Sua soma é ${sum}, que é ${sumIsGreater10(n1, n2)} que 10 e ${sumIsGreater20(n1, n2)} que 20!!`

}

console.log(superSum(10, 10));

// teacher code

function compararNumeros(num1, num2) { 
    if(!num1 || !num2) return 'Defina dois números!';

    const primeraFrase = criarPrimeiraFrase(num1, num2);
    const segundaFrase = criarSegundaFrase(num1, num2);

    return `${primeraFrase} ${segundaFrase}`
}    

function criarPrimeiraFrase(num1, num2) {
    let saoIguais = '';
    
    if (num1 !== num2) {
        saoIguais = 'não'
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
}
    
function criarSegundaFrase(num1, num2) {
    const soma = num1 + num2;
    
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10) {
        resultado10 = 'maior';
    }

    if(compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
 }

console.log(compararNumeros());
