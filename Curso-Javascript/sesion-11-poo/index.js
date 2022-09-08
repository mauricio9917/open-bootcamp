const persona = {
    nombre: "Mauricio",
    edad: 23,
    isDeveloper: true,
    saludo: function() {
        console.log("Hola")
    }
}

// console.log(persona)

persona.saludo()

const otra_persona = {
    nombre: "Oscar",
    edad: 27,
    isDeveloper: false,
    saludo: function() {
        console.log("Hola")
    }
}

otra_persona.saludo()

// Función factory
const crea_persona = (nombre, edad, isDeveloper) => {
    return {
        nombre,
        edad,
        isDeveloper,
        saludo: function() {
            console.log("Hola")
        }
    }
}

const nueva_persona = crea_persona("Juan",23, true)
console.log(nueva_persona)

const nueva_persona2 = crea_persona("Maria",45, false)
console.log(nueva_persona2)
