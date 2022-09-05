// .some()

const array = [1, 2, 3, 4, 5, 6, 7, 8]

const res = array.some(valor => valor < 0)

console.log(res)

const existe = array.some(valor => valor === 8)

console.log(existe)

const listaObjetos = [
    {nombre:"Leire", edad:65},
    {nombre:"Mauricio", edad:23},
    {nombre:"Gilberto", edad:48},
    {nombre:"Juan", edad:35}
]

const existeMauricio = listaObjetos.some(persona => persona.nombre === "Mauricio")

console.log(existeMauricio)

// como obtener una lista a partir de un objeto iterable

const str = "Hola, soy Mauricio"
console.log(str[4])

const ar_str = Array.from(str)
console.log(ar_str)

const set = new Set([2,3,"hola",4])
const ar_set = Array.from(set)
console.log(ar_set)

const keys = array.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)