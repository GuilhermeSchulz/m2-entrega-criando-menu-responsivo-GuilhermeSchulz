async function btnMenu(){
    const openMenu = document.querySelector(".open__menu")
    const closeMenu = document.querySelector(".close__menu")
    const listMenu = document.querySelector(".header__container__menu")
    openMenu.addEventListener("click", event => {
        event.preventDefault()
        openMenu.classList.toggle("hidden__class")
        closeMenu.classList.toggle("hidden__class")
        listMenu.classList.toggle("hidden__class")
        listMenu.classList.add("animation__class__open")
        listMenu.classList.remove("animation__class__close")
    })
    closeMenu.addEventListener("click",async event => {
        event.preventDefault()
        openMenu.classList.toggle("hidden__class")
        closeMenu.classList.toggle("hidden__class")
        listMenu.classList.remove("animation__class__open")
        listMenu.classList.add("animation__class__close")
        console.log(await respondaApos2Segundos())
    })
}
async function respondaApos2Segundos() {
    return new Promise(resposta => {
        setTimeout(() => {
            const listMenu = document.querySelector(".header__container__menu")
            listMenu.classList.toggle("hidden__class")
        }, 1500);
    });
}
btnMenu()