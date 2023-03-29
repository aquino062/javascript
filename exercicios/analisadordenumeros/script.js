var numero = document.querySelector("input#txtnumero");
var lista = document.querySelector("select#txtselect");
var res = document.querySelector("div#res");
var valores = [];

function isumnumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else false;
}

function inlist(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else false;
}

function adicionar() {
    if (isumnumber(numero.value) && !inlist(numero.value, valores)) {
        valores.push(Number(numero.value));
        var item = document.createElement("option");
        item.text = ` Número ${numero.value} adicionado`;
        lista.appendChild(item);
    } else {
        alert("[ERRO] , VERIFIQUE OS DADOS E TENTE NOVAMENTE!");
    }
    numero.value = "";
    numero.focus();
}

function calcular() {
    if (valores.value == 0) {
        alert` ERRO , Valor não pode ser 0`;
    } else {
        var tot = valores.length;
        var maiorvalor = valores[0];
        var menorvalor = valores[0];
        var soma = 0;

        // maior valor

        for (var i = 1; i < tot; i++) {
            if (valores[i] > maiorvalor) {
                maiorvalor = valores[i];
            }
        }

        //menor valor
        for (var i = 1; i < tot; i++) {
            if (valores[i] < menorvalor) {
                menorvalor = valores[i];
            }
        }
        for (var i = 0; i < valores.length; i++) {
            soma += valores[i];
        }
        var media = soma / tot.toFixed(2);
    }

    res.innerHTML += `foram cadastrados ${tot} valores.<br>`;
    res.innerHTML += `O Maior valor encontrado foi ${maiorvalor} <br>`;
    res.innerHTML += ` O Menor valor encontrado foi ${menorvalor} <br>`;
    res.innerHTML += `Somando todos os valores teremos ${soma}<br>`;
    res.innerHTML += `A Média dos valores é : ${media}<br>`;
}
