var agora = new Date ()
var hora = agora.getHours ()
var dia = agora.getDay ()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora <= 6 ) {
    console.log('boa madrugada!')
} else if(hora < 12) {
        console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('boa tarde!')
} else if(hora <= 23){
    console.log('Boa noite!')
}
switch(dia) {
    case 0:
        console.log('Hoje é Domingo')
        break
    case 1:
        console.log('Hoje é Segunda-Feira')
        break
    case 2:
        console.log('Hoje é Terça-Feira')
        break
    case 3:
        console.log('Hoje é Quarta-Feira')
        break
    case 4:
        console.log('Hoje é Quinta-Feira')
        break
    case 5:
        console.log('Hoje é Sexta-Feira')
        break
    case 6:
        console.log('Hoje é Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido')
}