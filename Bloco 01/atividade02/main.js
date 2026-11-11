let saldo = parseFloat(prompt("Digite seu saldo: "))
alert("Cada viagem custa R$5,00!!")
let conta = (saldo/5).toFixed(0)
let resto = (saldo % 5).toFixed(2)

alert(`Você tem ${conta} viagens, e sobrou $${resto} reais`)