/*
    Exibir a frase "João Lucas Moraes tem 21 anos, pesa 115 kg, tem 1.75 de altura e seu IMC é de 37.55" e a frase "João Lucas nasceu em 2005." utilizando variáveis.
*/

const nome = "João Lucas";
const sobrenome = "Moraes";
const idade = 21;
const peso = 115;
const altura = 1.75;
let imc = peso / (altura * altura);
let anoNascimento = 2026 - idade;


// Concatenando as variáveis com strings
console.log(nome, sobrenome, 'tem ' + idade + ' anos, pesa ' + peso + ' kg, tem ' + altura + ' de altura e seu IMC é de ' + imc.toFixed(2));
console.log(nome, 'nasceu em ' + anoNascimento);

// Utilizando template string (interpolação de variáveis)
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} de altura e seu IMC é de ${imc.toFixed(2)}`);
console.log(`${nome} nasceu em ${anoNascimento}`);