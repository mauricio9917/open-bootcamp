// ejercicio 8
const si = true

function confirmacion(){
    console.log(`${si}`)
}

function promesas() {
    setTimeout(function(){
        console.log("Hola, soy una promesa")
    }, 5000)
}

const prom = promesas()

console.log(prom)

function* generaIndices() {
    let indice=0;
    while(true){
        indice = indice + 2
        if (indice === 10){
            return indice
        }
        yield indice //Esperando hasta que se vueva a llamar
    }
}

const gen = generaIndices()

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())