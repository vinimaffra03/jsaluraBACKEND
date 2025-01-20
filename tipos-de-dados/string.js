const estudante = 'Caroline';
const docente = 'Ana';
const cumprimento = "nosso lema é 'estudar bastante !'";
const citacao = `Ju diz: "nosso lema é 'estudar bastante'"`;

console.log(cumprimento);
console.log(citacao);

console.log('A estudante chama' + estudante);

// template string

console.log(`A estudante chama ${estudante}`);


const senha = 'SenhaSegura123' + estudante.toUpperCase();
console.log(senha);

// unicode 
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)