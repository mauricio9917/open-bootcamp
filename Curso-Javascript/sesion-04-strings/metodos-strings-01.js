// metodos mas utilizados con Strings

// como obtener la longitud de un string

let str = "Hola, soy una cadena"

console.log(str.length)

// Obtener partes de cadenas de caracteres
// slice() substring() substr()

let slice_str = str.slice(5, 10)
console.log(slice_str)

let substring_str = str.substring(5,10)
console.log(substring_str)

let substr_str = str.substr(5,10)
console.log(substr_str)

// Reemplazar parte del contenido de una cadena de texto

let cadena = "Hola, mi nombre es Mauricio"
console.log(cadena)

//al utilizar cadenas solamente reemplaza la primera instancia
console.log(cadena.replace('Mauricio', 'Vivian'))

let texto_largo = "Ullamco nisi non qui esse reprehenderit id excepteur. Eu sunt ut qui proident proident elit aliquip adipisicing dolor excepteur. Mollit enim laborum aute labore fugiat deserunt fugiat elit. Aliquip tempor elit quis ea commodo culpa est deserunt deserunt dolor magna. Labore dolor ut minim id ex nisi commodo. Non velit ex voluptate qui nulla ad."

console.log(texto_largo.replace('qui','for'))

//al utilizar la expresión regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/qui/g,'for'))


