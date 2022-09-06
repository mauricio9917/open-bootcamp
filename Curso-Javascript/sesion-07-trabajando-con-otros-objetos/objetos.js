// trabajando con objetos

const obj = {
    id:4,
    nombre:"Juan",
    apellido:"Gonzales",
    isDeveloper: true,
    libros_favoritos: ["El metodo", "El codigo de la manifestación"],
    "4-juegos": [1,2,3,4]
}

console.log(obj.id)
console.log(obj["4-juegos"])

const prop = "isDeveloper"
console.log(obj[prop])

const obj2 = obj
console.log(obj2)

obj2.nombre = "Iñigo"
console.log(obj2.nombre)

let val1 = 4
let val2 = val1

val2 = 6
console.log(val1)
console.log(val2)

/////////////////////

const obj3 = {...obj}

console.log(obj.nombre)
console.log(obj3.nombre)

obj.nombre = "Gorka"

console.log(obj.nombre)
console.log(obj3.nombre)

////////////////////////////
// Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
    {titulo: 'lo que el viento se llevo', anyo:1939 },
    {titulo: 'titanic', anyo:1997 },
    {titulo: 'moana', anyo:2016 },
    {titulo: 'el efecto mariposa', anyo:2004 },
    {titulo: 'TED', anyo:2012 },
]

console.log(listaPeliculas)

// .sort()  --> Muta el valor de la lista original

listaPeliculas.sort((a,b)=> a.anyo-b.anyo)
console.log(listaPeliculas)