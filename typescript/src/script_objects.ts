function resumo(usuario: {nome: string, idade?: number}) {
    if(usuario.idade !== undefined) {

    return `Olá ${usuario.nome}, tudo bem? Vejo que você possui ${usuario.idade} anos.`;

    } else {
        return `Olá ${usuario.nome}, tudo bem?`;
    }
}

//Implementação
let pessoa = {
    nome: "Jiovane",
    idade: 24
};

resumo(pessoa);