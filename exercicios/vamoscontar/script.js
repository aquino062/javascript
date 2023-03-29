function contar() {
    var inicio = window.document.querySelector('input#txtinicio')
    var fim = window.document.querySelector('input#txtfim')
    var passo = window.document.querySelector('input#txtpasso')
    var res = window.document.querySelector('div#res')

   
    if (inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
        res.innerHTML = `impossivel contar!`
    } else {


        res.innerHTML = `Contando... <br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            alert("passo inválido! considerando passo = 1 ")
            p = 1
        }

        //contagem crescente 
        if (i < f) {
            for (i; i <= f; i += p) {
                res.innerHTML += `${i} \u{1F449}`

            }
        } else {
            //contagem regresiva
            for (i; i > f; i -= p) {
                res.innerHTML += `${i} \u{1F449}`
            }

        }
    }
    res.innerHTML += `\u{1F3C1}`
}

