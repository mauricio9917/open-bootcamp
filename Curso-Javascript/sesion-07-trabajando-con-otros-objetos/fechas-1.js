// fechas

const fechaActual = new Date()
console.log(fechaActual)

const miFechaNacimiento = new Date(1999, 4, 25)
console.log(miFechaNacimiento)

console.log(fechaActual.getTime() > miFechaNacimiento.getTime())

console.log(miFechaNacimiento.getDate())
console.log(miFechaNacimiento.getMonth()+1)
console.log(miFechaNacimiento.getFullYear())