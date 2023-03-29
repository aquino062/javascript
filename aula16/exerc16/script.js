function contar() {
    var inicio = window.document.querySelector("input#txtval")

    var fim = window.document.querySelector("input#txt2val")

    var passo = window.document.querySelector("input#txtpasso")

    var res = window.document.querySelector("div#res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("[ERRO] Verifique os dados e tente novamente")
        res.innerHTML = `Impossivel contar!`
    } else {
        res.innerHTML = `Contando... <br>`

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert(` Passo inválido! considerando Passo 1`)
            p = 1
        }




        //contagem crescente
        if (i < f) {
            for (i; i <= f; i += p) {
                res.innerHTML += `${i} \u{1F449}	 `
            }

            //contagem regressiva
        } else {
            for (i; i > f; i -= p) {
                res.innerHTML += `${i} \u{1F449}`
            }


        

        res.innerHTML += `\u{1F3C1}`
    }
}
}
