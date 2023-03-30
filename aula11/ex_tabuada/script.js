function tabuada() {
    var num = window.document.querySelector('input#txtnum')
    var tab = window.document.querySelector('select#seltab')

    if (num.value.length == 0) {
        window.alert("[ERRO. Verifique os Dados! ]")
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML=''

        
        while (c <= 10){
        var item = window.document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}` 
        item.value = `tab${c}`
        tab.appendChild(item)
        c++
//---------------//também pode ser feita dessa maneira com for ------------
        /*for ( c =1  ; c <= 10 ; c++) {
           var item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)*/
//------------------------------------------------------------------------------
    }

        }

    }








/*for (c; c <= 10; c++){
    var item = document.createElement('option')
    item.text = `${n} x ${c} = ${n * c}` 
    tab.appendChild(item)
    tab.appendChild=`tab${c}`

    }*/