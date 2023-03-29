var numero = document.querySelector('input#txtnumero')
var lista = document.querySelector("select#txttabela")
var res = document.querySelector('div#res')
var valores = []



function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, valores)) {
        valores.push(Number(numero.value))
        var item = document.createElement('option')
        item.text = `Valor ${numero.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML=''


    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    numero.value = ''
    numero.focus()
}

function finalizar(){
    if(valores.length == 0){
alert('Adicione valores antes de finalizar!')
    } else {
var total = valores.length
var maior = valores[0]
var menor = valores[0]
var soma = 0
var media = 0


for(var pos in valores){
    soma += valores[pos]
    if(valores[pos] > maior )
    maior = valores[pos]
    if (valores[pos]< menor)
    menor = valores[pos]
        
    
}

media = soma / total

 res.innerHTML=''
 res.innerHTML += `<p> Ao todos, temos ${total} números cadastrados. </p>`
 res.innerHTML += `<p> o maior valor informado foi ${maior}. </p>`
 res.innerHTML += `<p>o menor valor informado foi ${menor}. </p>`
 res.innerHTML += `<p> Somando todos os valores, temos ${soma}. </p>`
 res.innerHTML += `<p> A média dos valores digitados é: ${media}.</p>`
}
}