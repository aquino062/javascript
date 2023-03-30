var num = [1 , 3 , 4 ,6 , 7 ]
num.push(77)
console.log(num)


var pos = num.indexOf(77) // procurar o valor (x) no vetor


if (pos == -1){
    console.log(`o valor não foi encontrado`)
} else {
    console.log(`o valor está na posição ${pos} `)
}

