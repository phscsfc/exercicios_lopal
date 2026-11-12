let arquivo = Number(prompt("Digite em GB o tamanho do arquivo: "))
let net = parseFloat(prompt("Digite em Mbps a velocidade da sua internet: "))
let conver = arquivo*8192
let veloS = (conver/net).toFixed(0)
let veloM = (veloS/60).toFixed(0)

alert(`Demorará ${veloS} segundos ou ${veloM} minutos, para baixar seu arquivo`)