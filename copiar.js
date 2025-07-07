function copiarNumero1() {
    const numero1 = document.getElementById("numero1").getAttribute("data-texto1");

    navigator.clipboard.writeText(numero1).then(() => {
        alert("Pix cópiado")
    })
} 


function copiarTexto1() {
    const numero1 = document.getElementById("email").getAttribute("data-texto2");

    navigator.clipboard.writeText(numero1).then(() => {
        alert("Pix cópiado")
    })
} 


function copiarNumero2() {
    const numero1 = document.getElementById("numero2").getAttribute("data-texto3");

    navigator.clipboard.writeText(numero1).then(() => {
        alert("Pix cópiado")
    })
} 


