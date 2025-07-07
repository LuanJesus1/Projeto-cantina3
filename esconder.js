var textoInformacao = document.getElementById("texto-informacao")

var botaoInformacao = document.getElementById("botao-informacao")

botaoInformacao.onclick = function() {
    if(textoInformacao.style.display == "") {
        textoInformacao.style.display = "none"
    }
    else{
        textoInformacao.removeAttribute("style")
    }
}

var textoAjuda = document.getElementById("texto-ajuda")

var botaoAjuda = document.getElementById("botao-ajuda")



botaoAjuda.onclick = function() {
    if(textoAjuda.style.display == "") {
        textoAjuda.style.display = "none"
    }
    else{
        textoAjuda.removeAttribute("style")
    }
}

var botaoNovosConvertidos = document.getElementById("botao-novos-convertidos")

var numeroPix1 = document.getElementById("numero1")

var botaoCopiar1 = document.getElementById("copiar-novos")

botaoNovosConvertidos.onclick = function() {
    if(numeroPix1.style.display == "") {
        numeroPix1.style.display = "none"
    }
    else{
        numeroPix1.removeAttribute("style")
    }
}

botaoNovosConvertidos.onclick = function() {
    if(botaoCopiar1.style.display == "") {
        botaoCopiar1.style.display = "none"
    }
    else{
        botaoCopiar1.removeAttribute("style")
    }
}

var botaoMinisterio = document.getElementById("botao-ministerio")

var emailPix1 = document.getElementById("email")

var botaoCopiar2 = document.getElementById("copiar-ministerio")

botaoMinisterio.onclick = function() {
    if(emailPix1.style.display == "") {
        emailPix1.style.display = "none"
    }
    else{
        emailPix1.removeAttribute("style")
    }
}

botaoMinisterio.onclick = function() {
    if(botaoCopiar2.style.display == "") {
        botaoCopiar2.style.display = "none"
    }
    else{
        botaoCopiar2.removeAttribute("style")
    }
}

var botaoProjecao = document.getElementById("botao-projecao")

var numeroPix2 = document.getElementById("numero2")

var botaoCopiar3 = document.getElementById("copiar-projecao")

botaoProjecao.onclick = function() {
    if(numeroPix2.style.display == "") {
        numeroPix2.style.display = "none"
    }
    else{
        numeroPix2.removeAttribute("style")
    }
}

botaoProjecao.onclick = function() {
    if(botaoCopiar3.style.display == "") {
        botaoCopiar3.style.display = "none"
    }
    else{
        botaoCopiar3.removeAttribute("style")
    }
}
