//

class Persona {
    // Private --> #
    // Private --> solo se puede acceder desde adentro de la clase
    #nombre
    #edad
    obtenEdad
    // Protected --> _
    // Private --> solo se puede acceder desde adentro de la clase y clases descendientes

    _isDeveloper = true

    constructor(nombre, edad){
        this.#nombre=nombre
        this.#edad=edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad}`)
    }

    dimeNombre(){ //funcion getter
        return  this.#nombre
    }

    #obtenEdad() {
        return this.#edad
    }

    getEdad() {
        return this.#edad
    }

    setEdad(nuevaedad) {
        this.#edad = nuevaedad
    }
}

const persona = new Persona("Mauricio", 23)
// console.log(persona)
// console.log(persona.nombre)
// persona.saludo()
// console.log(persona.dimeNombre())
// console.log(persona._isDeveloper)
// persona.nombre = "adios"
// console.log(persona)

// Getter -> métodos que nos permiten obtener atributos/metodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)

// Setter -> metodos que nos permiten cambiar algunos de los atributos privados o protegidos
persona.setEdad(24)
console.log(persona.getEdad())
