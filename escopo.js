// let estudante;
const estudante = 'Caroline';

if (1 > 0) {

    // se declarar a variavel como let ira criar duas variaveis pois js auto declara a segunda como var
    //let estudante = 'Caroline';   
    
    //estudante = 'Caroline';
    console.log(estudante);
}
// var vvv
//estudante = 'Ana';
console.log(estudante);

const nome = 'Camila'; // variável global

function cumprimentar() {
  console.log(`Olá, ${nome}!`); // Acessa a var global
}

cumprimentar(); // ‘Olá, Camila!”

if (1 > 0) {
    let nome = 'Ana';
    console.log(nome); // ‘Ana’
  }
  
  // variável `nome` não está acessível
  console.log(nome); // Error: nome is not defined

  function cumprimentar() {
    const nome = 'Camila'; // variável local
    const cumprimento = 'Olá'; // variável local
    console.log(`${cumprimento}, ${nome}!`); // “Olá, Camila!”
  }
  
  // as variáveis não podem ser acessada de fora da função
  console.log(`${cumprimento}, ${nome}!`); // Dará erro de “not defined” no console