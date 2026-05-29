// Não se pode criar variáveis com palavras reservadas, como: let, var, if...
// É uma boa prática criar váriaveis com nomes significativos.
// Não começar o nome de uma variável com números ou caracteres especiais.

let nome = 'João'; // String // Variável declarada e inicializada

// String literais sem uso de variáveis

console.log('João nasceu em 2005.');
console.log('Em 2026 João tem 21 anos.');
console.log('João faz faculdade de ADS.');
console.log('O cachorro de João se chama Zorro.');

// String literais com uso de variáveis

console.log(nome, 'nasceu em 2005.');
console.log('Em 2026', nome, 'tem 21 anos.');
console.log(nome, 'faz faculdade de ADS.');
console.log('O cachorro de', nome, 'se chama Zorro.');

// Váriaveis podem ser reatribuídas
// Não podemos redeclarar uma variável usando let mas pode reatribuí-la.
console.log('Meu nome é', nome);
nome = 'Lucas';
console.log('Meu nome é', nome);

// Sempre que for utilizar algo que vai alterar o valor de uma variável use let e não var.