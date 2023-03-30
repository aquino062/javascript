/*
let num = [5, 7, 9 , 23]

console.log(num)
console.log(` nosso vetor tem ${num.length} posições`)
num.push(1)

console.log(num[0])
console.log(num) // adiciona automaticamente na proxima posição
num.sort()  // colocar em ordem
console.log(num) 

-----------------------------------------------------------------
var valores = [5, 7, 9, 10]
for(pos = 0; pos < valores.length; pos++){
 console.log(`A posição ${pos} tem o valor ${valores[pos]}`)

    
}
-----------------------------------------------------------------
*/

var valores = [5, 7, 9, 10]
console.log(valores)

for(var pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

