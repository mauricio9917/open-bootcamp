// objetos

const datosPersonales = {
    nombre: "Mauricio", 
    apellido: "Ardila", 
    edad:23, 
    altura:1.75, 
    eresDesarrollador: true
}

const obtEdad = "edad"
console.log(datosPersonales[obtEdad])

const datosParticulares = [
    datosPersonales,
    {nombre: "David", apellido: "Chaux", edad:25, altura:1.77, eresDesarrollador:false},
    {nombre: "Isabella", apellido: "Montilla", edad:20, altura:1.72, eresDesarrollador:true}
]

console.log(datosParticulares)

const listaPorEdad = datosParticulares.sort((a,b)=> b.edad-a.edad)
console.log(listaPorEdad)
