let valor = parseFloat(prompt("Digite o valor1 que você vai pagar: "))
let valor1 = Math.floor(valor)
cem1 = Math.floor((valor1 / 100))
cem = valor1 % 100
cin1 = Math.floor((cem / 50))
cin = valor1 % 50
vinte1 = Math.floor((cin / 20))
vinte = valor1 % 20
dez1 =Math.floor((vinte / 10))
dez = valor1 % 10
cinco1 = Math.floor((dez / 5))
cinco = valor1 % 5
dois1 = Math.floor((cinco / 2))
dois = valor1 % 2
um1 = Math.floor((dois / 1))
um = valor1 % 1
if (cem1 > 0) {
    console.log(`Foram usadas ${cem1} moedas/notas de 100`);
}
if (cin1 > 0) {
    console.log(`Foram usadas ${cin1} moedas/notas de 50`);
}
if (vinte1 > 0) {
    console.log(`Foram usadas ${vinte1} moedas/notas de 20`);
}
if (dez1 > 0) {
    console.log(`Foram usadas ${dez1} moedas/notas de 10`);
}
if (cinco1 > 0) {
    console.log(`Foram usadas ${cinco1} moedas/notas de 5`);
}
if (dois1 > 0) {
    console.log(`Foram usadas ${dois1} moedas/notas de 2`);
}
if (um1 > 0) {
    console.log(`Foram usadas ${um1} moedas/notas de 1`);
}

// if (cem1 > 0) {
//     console.log(`Foi usada ${cem1} moedas de 100`)
// } else if (cin1 > 0) {
//     console.log(`Foi usada ${cin1} moedas de 50`)
// }
// else if (vinte1 > 0) {
//     console.log(`Foi usada ${vinte1} moedas de 20`)
// }
// else if (dez1 > 0) {
//     console.log(`Foi usada ${dez1} moedas de 10`)
// }
// else if (cinco1 > 0) {
//     console.log(`Foi usada ${cinco1} moedas de 5`)
// }
// else if (dois1 > 0) {
//     console.log(`Foi usada ${dois1} moedas de 2`)
// }
// else if (um1 > 0) {
//     console.log(`Foi usada ${um1} moedas de 1`)
// }