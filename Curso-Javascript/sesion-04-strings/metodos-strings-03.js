// metodos de cadenas de texto parte 3

//https://regexr.com

let texto_largo = "Ullamco nisi non qui esse reprehenderit id excepteur. Eu sunt ut qui proident proident elit aliquip adipisicing dolor excepteur. Mollit enim laborum aute labore fugiat deserunt fugiat elit. Aliquip tempor elit quis ea commodo culpa est deserunt deserunt dolor magna. Labore dolor ut minim id ex nisi commodo. Non velit ex voluptate qui nulla ad."

console.log(texto_largo.match(/qui/g))

//¿existe la palabra dentro del texto?
console.log(texto_largo.includes("dolor"))

//saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("U"))

//saber si un texto termina con una palabra
console.log(texto_largo.endsWith("."))
