const alunos = [
    {
        nome: 'Matheus',
        nota: 10,
        turma: '2',

},
    {
        nome: 'Sofia',
        nota: 2,
        turma: '3',
    },
    {
        nome: 'Pauli',
        nota: 7,
        turma: '32',
    },
];

function alunosAprovados(arr, media) {
    let aprovados = []

    for(let i = 0; i < arr.length; i++) { 

        const {nota, nome} = arr[i];
        
        // if(arr[i].nota >= media) {
        if(nota < media) {
            aprovados.push(nome); 
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));


// This manipulation

function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade += anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 30
};

const pessoa2 = {
    nome: "Carla",
    idade: 26
};

const animal = {
    nome: "Fiona",
    idade: 5,
    raca: "Pug"
};

// console.log(calculaIdade.call(pessoa2, 30));
console.log(calculaIdade.apply(animal, [3]));
