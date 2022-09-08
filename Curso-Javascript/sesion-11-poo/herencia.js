// Inheritance - herencia
class Persona{
    _nombre
    _edad
    constructor(nombre, edad){
        this.nombre=nombre
        this.edad=edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this._nombre}, tengo ${this._edad}`)
    }

}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad)
        this.lenguaje = lenguaje;
    }

    saludo() { //override
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`)
    }
}

const nuevodev = new Desarrollador("Mauricio", 23, "Java")
console.log(nuevodev)
nuevodev.saludo() 

// Polimorfismo => varias formas

