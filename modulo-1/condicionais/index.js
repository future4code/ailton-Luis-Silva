
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// // }

// // // e) Explique o que o código faz. Qual o teste que ele realiza? 
// quer saber se o numer é par
// // // b) Para que tipos de números ele imprime no console "Passou no teste"? 
// pares 
// // // c) Para que tipos de números a mensagem é "Não passou no teste"? 
// impares

// #2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
// pede a pessoa para inserir uma fruta, e mostra o preço dela 
// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// o preço da fruta maça, é R$ 2.25
// ) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?

// #3//

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)


// a) O que a primeira linha está fazendo?
// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.


// //1 
//  Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`


    // // let condicao1 = ( >== 18)
    // // let condicao2 = ( < 18)
    
    // let idade = Number(prompt("qual sua idade"))
    // if (condicao1 >= 18)
    // if (condicao2 < 18)
    // console.log(idade)

   // //2
    // Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
    // Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const turno = prompt(" digitar M (matutino) ou V (Vespertino) ou N (Noturno)")

// if (turno === "M") {
//  console.log("bom dia")
// }else if (turno === "V") {
//     console.log("boa tarde")
// } else {
//        console.log("boa noite")
//         }



//     //3
//     // Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
// let turno = prompt(" digitar M (matutino) ou V (Vespertino) ou N (Noturno)")

// switch(turno)  {
//     case 'M':
//         console.log('bom dia')
//         break 
//         case 'V':
//             console.log('boa tarde')
//             case 'N':
//                 console.log('boa noite')
// break
// default:
//     console.log('opção incorreta')
// }

//     // //4
    
//     // Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

