let arquivo = Number(prompt("Digite em GB o tamanho do arquivo: "))
let net = parseFloat(prompt("Digite em Mbps a velocidade da sua internet: "))
let conver = arquivo*8192
let veloS = conver/net
let veloM = veloS/60

alert(`teste ${veloS} e ${veloM}`)