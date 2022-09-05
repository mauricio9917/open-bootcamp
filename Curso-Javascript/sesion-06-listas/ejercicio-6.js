// ejercicio 6

const lista_compra = ["arroz", "huevos","platanos","frijoles", "arvejas"]

lista_compra.push("aceite de girasol")

console.log(lista_compra)

lista_compra.pop("aceite de girasol")

console.log(lista_compra)

const lista_peliculas = [
    {nombre: "mi villano favorito", autor: "Pierre Coffin", año: 2010},
    {nombre: "2012", autor: "Roland Emmerich", año:2009},
    {nombre: "terremoto", autor: "John Andreas Andersen", año:2018}
]

const lista_peliculas_rec = lista_peliculas.filter(obj => obj.año >= 2010)
console.log(lista_peliculas_rec)

const autores_peliculas = lista_peliculas.map(obj => obj.autor)
console.log(autores_peliculas)

const titulos_peliculas = lista_peliculas.map(obj => obj.nombre)
console.log(titulos_peliculas)

const peliculas_concat = titulos_peliculas.concat(autores_peliculas)
console.log(peliculas_concat)

const peliculas_concat_prop = [...titulos_peliculas, ...autores_peliculas]
console.log(peliculas_concat_prop)

    
