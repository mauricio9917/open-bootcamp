const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        console.log("inicio de arrastre")
        console.log("Se está arrastrando el párrafo: " + parrafo.innerText)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const elemento_fantasma = document.querySelector(".imagen-fantasma") 
        event.dataTransfer.setDragImage(elemento_fantasma,0,0)
    })

    parrafo.addEventListener("dragend", () => {
        console.log("se ha arrastrado")
        parrafo.classList.remove("dragging")
        
    })

    parrafo.addEventListener("remove", event => {
            event.preventDefault()
            event.dataTransfer.setData("id", parrafo.id)
            const elemento_fantasma = document.querySelector(".imagen-fantasma") 
            event.dataTransfer.setDragImage(elemento_fantasma,0,0)
            document.getElementById(event.dataTransfer.getData("id")).remove()
    })

})

secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = "move"
        // console.log("Drag Over")
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop") 
        const id_parrafo = event.dataTransfer.getData("id")
        // console.log("Párrafo id: ", id_parrafo)
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })

    seccion.addEventListener("remove", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        seccion.popChild(parrafo)
    })
})

