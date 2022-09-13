const boton = document.querySelector("#btn")

boton.addEventListener("click", () => {
    alert("se ha hecho click")
})

$(() => {
    $("#btn").click(() => {
        console.log("Hola, estoy utilizando JQuery")
    })
})