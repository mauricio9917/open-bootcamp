// Trabajar con metodos mas avanzados
// .map() .filter() .reduce()

const array = ["San sebastian", "Madrid", "Barcelona", "Bilbao", "Alicante"]

const val = array.forEach(v => {
    console.log(v)
    return 4
})
console.log(val)

const newArray = array.map((valor, indice) => `${indice+1} - ${valor}`)
console.log(newArray)

const listaObjetos = [
    {nombre:"Leire", edad:65},
    {nombre:"Mauricio", edad:23},
    {nombre:"Gilberto", edad:48},
    {nombre:"Juan", edad:35}
]

// const personasMayores = listaObjetos.filter(obj => {
//     if (obj.edad>30){
//         return true
//     } else {
//         return false
//     }
// })

const personasMayores = listaObjetos.filter(obj => obj.edad>30)
console.log(personasMayores)

const nuevaLista = listaObjetos.filter(obj =>obj.nombre !== "Leire")
console.log(nuevaLista)

const valores = [3,56,23,5,90,100]

const suma = valores.reduce((acum, cur, i, arrayOriginal) => {
    console.log(acum)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acum + cur
})
console.log(suma)
