function validaArray(array, number) {
    try {
        if(!array || ! number) {
            throw new ReferenceError("Envie os parâmetros");
        // }else if(typeof(array) !== 'object') {
        }else if(typeof array !== 'object') {
            // throw Error(TypeError);
            throw new TypeError("O array precisa ser do tipo Object");
        // } else if(typeof(number) !== 'number') {
        } else if(typeof number !== 'number') {
            throw new TypeError("O número precisa ser do tipo Number");
        } else if(array.length !== number) {
            // new Error('RangeError');7
            throw new RangeError("Tamanho inválido!");
        } else {
            // console.log(array[number-1])
            return array;
        }
    } catch(e) {
        if(e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError');
            console.log(e.name);
            console.log(e.stack);
        } else if(e instanceof TypeError) {
            console.log('Este erro é um TypeError!');
            console.log(e.name);
            console.log(e.stack);
        } else if(e instanceof RangeError) {
            console.log('Este erro é um RangeError');
            console.log(e.name);
            console.log(e.stack);
        } else {
            console.log('Tipo de erro não esperado: ' + e);
            console.log(e.name);
            console.log(e.stack);
        }
    }
}

array = [1, 10, 20, 30];
number = 3;

// validaArray(array, number);

console.log(validaArray([1,2,3,4,5], 5));
