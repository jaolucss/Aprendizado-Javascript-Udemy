// Primeira diferença entre var e let

var nome = 'João';
var nome = 'Lucas';
console.log(nome); // Lucas

// Se você declara uma variável com var dentro de uma função, ela pertence a essa função. Mas se você declará-la dentro de um bloco (como um if ou um for), ela vaza para fora desse bloco.

let sobrenome = 'Moraes';

// O let respeita as chaves { }. Se você declarar uma variável com let dentro de um if, for ou while, ela só existe ali dentro.

// Não criar variáveis sem especificar var, let ou const, pois cria variáveis globais, o que pode causar problemas de escopo e segurança no código.

