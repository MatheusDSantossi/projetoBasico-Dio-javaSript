// numerOne = 1;

// console.log(numberOne + 2);

// var numberOne; # funciona do mesmo jeito

// let  numberOne; # não funcona que nem o de cima
// esses casos acontece por conta do hoisting


var firstName = 'Matheus';
let lastName = 'Santos';

if(firstName === 'Matheus') {
    let lastName = 'Isso';
    var firstName = 'D.';
    lastName = 'Rezende';
    var firstName = 'Matheus D.'
    console.log(lastName)
}

console.log(firstName, lastName);
