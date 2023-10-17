

let pessoa = {nome: "Jiovane", 
            idade: 34,
            caracteristicas: ['sorridente', 'simpatico', 'top'],
            estetica: {
                altura: 1.75,
                peso: 91 + "kg  "
            }};
console.log(pessoa.caracteristicas[2]);
console.log(pessoa.estetica.peso);

// JSON.perse

let exemplo = '{"nome": "jiovane", "idade": "34"}';
console.log(JSON.parse(exemplo));

// JSON.stringify

let exemplo_2 = JSON.stringify({nome: "Jiovane", idade: 34});
console.log("Exemplo Stingify: " + exemplo_2);