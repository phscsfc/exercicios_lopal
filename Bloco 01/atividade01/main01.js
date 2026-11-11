let valor = parseFloat(prompt("Digite o valor da conta: "))
let pessoas = Number(prompt("Digite o número de pessoas: "))
opcao = 0
while (opcao != "s" || "n") {
opcao = prompt("Vai ter os 10% de serviço? (s ou n): ")


if (opcao === "s") {
    conta = ((valor * 1.10)/pessoas).toFixed(2)
    alert(`O valor a ser pago para ${pessoas} pessoas, é de ${conta}`)
    break
} else if (opcao === "n") {
    conta = valor/pessoas
    alert(`O valor a ser pago para ${pessoas} pessoas, é de ${conta}`)
    break
} else{
    alert("So aceitamos 's' ou 'n'!!")
}
}
