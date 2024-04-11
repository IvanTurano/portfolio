const nav = document.querySelector(".nav-container")
const abrir = document.querySelector("#menu")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click",() => {
    nav.classList.add("visible")
})


cerrar.addEventListener("click",() => {
    nav.classList.remove("visible")
})

nav.addEventListener("click",() =>{
    nav.classList.remove("visible")
})