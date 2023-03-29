function gerartabuada() {
    var numero = window.document.querySelector('input#txttabuada')
    var res = window.document.querySelector('div#res')
    var tab = window.document.querySelector('select#txttab')


    if (numero.value.length == 0) {
        alert('[ERRO], Selecione a tabuada.')
    } else {
        var n = Number(numero.value)
        tab.innerHTML= ''
 
        for (i = 1; i < 10; i++) {
var item = window.document.createElement('option')
item.text = `${n} x ${i} = ${n * i}`
tab.appendChild(item)

        }
    }
}
