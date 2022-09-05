// Iterar los valores de una lista

const array = ["hola", 2, 5, 90, false, undefined]

//Forma antigua y poco eficiente
for (let i=0; i<array.length; i++){
    console.log(array[i])
}

//Forma ES6 mas eficiente forEach()
let suma = 0
const arrayNums = [3,5,7,6,54,6,4,1,7]
arrayNums.forEach(valor => {
    suma += valor
    console.log(valor)
})
console.log(suma)

//Búsqueda de un valor dentro de una lista .find()
//se desea encontrar el elemento 54
const variable = arrayNums.find(valor => {
    if(valor === 54) {
        return true
    }
})

console.log(variable)

const listaObjetos = [
    {nombre:"Leire", edad:65},
    {nombre:"Mauricio", edad:23},
    {nombre:"Gilberto", edad:48},
    {nombre:"Juan", edad:35}
]

// const objeto = listaObjetos.find(o => {
//     if (o.nombre === "Mauricio") {
//         return true
//     }
// })

const objeto = listaObjetos.find(o => o.nombre === "Mauricio")
console.log(objeto.edad)

const {edad} = listaObjetos.find(o => o.nombre === "Mauricio")
console.log(edad)

