
function upperCase(nome: string): string {
    let firstL = nome.charAt(0).toUpperCase();
    return firstL+nome.substring(1);
}

let nome = upperCase("jiovane");