// Map
function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key);
        }
    } 
    return admins;
}

const usuarios = new Map();

usuarios.set('Matheus', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Admin');

console.log(getAdmins(usuarios));


// Set ||set e maps são coleções chaveadas, enquanto arrays e objects não são
 
const meuArray = [30, 30, 40, 5, 223, 2, 3049, 3034, 5];

function valoresUnicos(arr) {
    const mySet = new Set(arr);

    // return mySet; // return apenas os valores unicos do array

    return [...mySet];
}

console.log(valoresUnicos(meuArray));
