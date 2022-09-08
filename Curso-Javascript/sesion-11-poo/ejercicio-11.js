// ejercicio 11

class Estudiante {
    _nombre
    _asignaturas
    constructor(nombre, asignaturas){
        this._nombre = nombre
        this._asignaturas = asignaturas
    }

    obtenDatos(){
        return (`${this._nombre} , ${this._asignaturas}`)
    }
}

const estudiante_1 = new Estudiante("Mauricio", ["Javascript", "HTML", "CSS"])
const datos_1 = estudiante_1.obtenDatos()
console.log(datos_1)