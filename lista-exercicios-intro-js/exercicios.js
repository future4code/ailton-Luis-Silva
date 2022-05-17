// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

const altura = prompt("qual a altura do rentagulo?")
const largura = prompt("qual a largura do retangulo?")
const area = altura * largura
console.log(area)

return area


} 

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
const ano = prompt("em qual ano estamos?")
const nascimento = prompt("qual seu ano de nascimento?")
const idade = ano - nascimento

console.log(idade)

return idade

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const peso = prompt(peso)
const altura = prompt(altura)
const imc = (peso + (altura * altura))

return imc

}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

const nome = prompt("qual seu nome?")
const idade = prompt("qual sua idade?")
const email = prompt("qual seu email?")

const frase = "meu nome é {nome}, tenho {idade}, e meu email é {email}"

console.log(`Meu nome é {nome}, tenho {idade} anos, e o meu email é {email}`)
return frase 

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
const cor1 = prompt("qual sua primeira cor favorita?")
const cor2 = prompt("qual sua segunda cor favorita?")
const cor3 = prompt("qual sua terceira cor favorita?")

const cores = (cor1, cor2, cor3)
console.log(cores)




}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
const palavra = string.toUpperCase()
console.log(string.toUpperCase)
return palavra




}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
const custo = (string)
const valorIngresso = (string1)
const diferenca = string / string1
return diferenca
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}