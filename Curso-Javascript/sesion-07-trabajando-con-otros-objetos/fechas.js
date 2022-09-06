// Fechas

const fecha = new Date()

console.log(fecha)

// Nota: Los meses inicializan en cero
const fecha2 = new Date(1987, 10, 20, 1, 24, 45, 16)

console.log(fecha2)

const fecha3 = new Date(0)
console.log(fecha3)

const fecha4 = new Date("October 13, 1979 12:15")
console.log(fecha4)

console.log(fecha > fecha2)

const fecha5 = new Date(1987, 10, 20, 1, 24, 45, 16)
console.log(fecha5)

console.log(fecha2 === fecha5) //No se pueden comparar de esta manera

console.log(fecha2.getTime() === fecha5.getTime()) // Mejor comparar de esta forma

///////////////////////
// Obtener el dia, mes y año de una fecha 
// Obtener el dia .getDate()
console.log(fecha2.getDate())
// Obtener el mes .getMonth
console.log(fecha2.getMonth()+1)
// Obtener el año .getFullYear()
console.log(fecha2.getFullYear())

console.log(fecha2)

// .toLocalDateString
// DEVELOPER MOZILLA
console.log(fecha2.toLocaleDateString("en-JPAN"))