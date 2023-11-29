function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if(hora >= 0 && hora < 6){
        //BOA MADRUGADA!
        img.src ='fotomadrugada.png'
        document.body.style.background ='#7f7d7d'
        msg.innerHTML = `Agora são ${hora} horas.Boa madrugada!`
    }
    else if (hora >= 6 && hora < 12){
        //BOM DIA!
        img.scr = 'fotomanha.png'
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Agora são ${hora} horas.Bom Dia! `
    }else if (hora >= 12 && hora <= 18 ){
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Agora são ${hora} horas. Boa Tarde`
    } else  {
        //BOA NOITE 
        img.src ='fotonoite.png'
        document.body.style.background = '#00000071'
        msg.innerHTML = `Agora são ${hora} horas. Boa Noite`
    } 
}