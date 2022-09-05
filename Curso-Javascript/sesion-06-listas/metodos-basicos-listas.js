// Cómo trabajar con listas (arrays, arreglos, vectores)

let var1 = {id:false}
let array = [1,"hola", false, {id:5}, null, undefined, var1]
console.log(array)

// Acceder a los valores de un array a través de su posición
// array[indice]
console.log(array[3])

// Métodos para introducir nuevos valores en los arrays
// .push() .unshift() => Mutan el valor de nuestro array
// valores al final => .push()
array.push("final", 45, 100, false)
console.log(array)

// valores al principio => .unshift()
array.unshift("inicio")
console.log(array)

// Métodos para eliminar elementos en arrays
// .pop() .shift() => Mutan el valor del array
const array2 = [1,3,"hola", false]
// valores al final => .pop()
array2.pop()
console.log(array2)

// valores al principio => .shift()
array2.shift()
console.log(array2)

// Método para eliminar, modificar o añadir valores en nuestro array
// .splice(x,y,z)
const array3 = [1,2,3,4,5,6]
// Eliminar valores .splice(indice, numValoresEliminar)
array3.splice(2,1)
console.log(array3)
// Añadir valores .splice(indice, 0, valores)
array3.splice(2,0,"hola")
console.log(array3)
// Modificar valores .splice(indice, 1, valores)
array3.splice(2,1,3)
console.log(array3)