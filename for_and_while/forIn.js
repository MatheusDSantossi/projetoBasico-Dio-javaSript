function forInExemplo(obj) {
    for(prop in obj) {
        console.log(`Propriety: ${prop}`);
        console.log(`Propriety value: ${obj[prop]}`);
    }
}

const meuObjeto = {
    nome: "Matheus",
    idade: "20",
    cidade: "Salvador"
}

forInExemplo(meuObjeto);
