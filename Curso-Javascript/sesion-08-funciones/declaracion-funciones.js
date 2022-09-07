// Funciones, cómo se declaran y se utilizan
const nom = "Gorka"

//saludar("Gorka")
saludar(nom)

function saludar(nombre) {
    console.log(`Hola, ${nombre}`)
}

////////////////

let nombre_2 = "Juan"

despedir(nombre_2)

function despedir(nombre) {
    console.log(`Adios, ${nombre}`)
}

/////////////////////

let persona = {nombre: "Juan", apellido: "Gonzales"}
console.log(persona)

saludarPersona(persona)
console.log(persona)

function saludarPersona(objeto){
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

saludar()

////////////

function imprimirNumero(numero = 8) { //Parámetros por defecto
    console.log(numero)
}

imprimirNumero(6)

////////////

function imprimir(... parametros){
    console.log(parametros)
}

imprimir[1,3,9,2,"hola", {id: 9}]

/////////

function suma(...nums){
    return nums.reduce((a,b)=>a+b)
}

const s = suma(1,2,3,4)

console.log(s)

let variable = "hi"

function mutiplicacion(a=0,b=0){
    console.log(variable)
    let variable_interna = "adios"
    return a*b
}

//console.log(variable_interna) se puede llamar una variable desde afuera pero no desde adentro

console.log(mutiplicacion(4,9))


