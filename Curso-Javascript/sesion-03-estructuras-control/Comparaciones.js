// Comparaciones 

//Igualdad

if(5 == 5){
    console.log("5 es igual a 5")
}

if(5 === 5){
    console.log("5 es igual a 5")
}
let a = 5
console.log(typeof a)
let b = "5"
console.log(typeof b)

// == solo compara el valor
if (a == b){
    console.log("a es igual a b - débil")
}

// === compara el valor y el tipo
if (a === b){
    console.log("a es igual a b - fuerte")
}

let c = 4
let d = "4"

if (c != d) {
    console.log("c es diferente de d - debil")
}

if (c !== d) {
    console.log("c es diferente de d - fuerte")
}

// Comparaciones mayor que, menor que 

let max = 10
let min = 5

if (max > min){
    console.log("max es mayor que min")
}

if (max >= 10){
    console.log("max es mayor o igual que min")
}

if (min < max){
    console.log("min es menor que max")
}

if (min <= max){
    console.log("min es menor o igual que max")
}
