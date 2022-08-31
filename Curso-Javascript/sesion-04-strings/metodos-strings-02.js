// métodos de cadenas de texto, parte 2

let input="Geminis"
let db = "geminis"

// toLowerCase - toUpperCase
console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLocaleLowerCase())
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toUpperCase() === db.toUpperCase())

// Concatenar dos cadenas de caracteres
let str_1 = "Primera cadena"
let str_2 = "Segunda cadena"

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log(`${str_1} ${str_2}`)

//Eliminar espacios al inicio y al final
let str_3 = "   String con espacio al principio y al final.   "
console.log(str_3.length)
//Trim
console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

// Obtener el caracter que hay en alguna posición
let str_4 = "String cuatro"

console.log(str_4.charAt(2))
console.log(str_4[2])

//Obtener la posición de una palabra dentro de una cadena de texto
let str_5 = "Hola, soy Mauricio y me gusta el ajedrez. El ajedrez es vida"

console.log(str_5.indexOf("ajedrez"))
console.log(str_5.lastIndexOf("ajedrez"))