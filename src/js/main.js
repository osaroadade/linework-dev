// Megamenu
const navElem = document.querySelector("#megaMenu")
const menuElem = document.querySelector(".megamenu-container")

document.addEventListener("click", (e) => {
    if (e.target === menuElem.children[0]) {
        return
    }

    if (e.target === navElem && menuElem.classList.contains("d-none")) {
        menuElem.classList.remove("d-none")
        menuElem.children[0].animate([
            { translate: "0 -35rem", easing: 'ease-in-out' },
            { translate: "0" }
        ], 750)
        return
    }

    menuElem.classList.add("d-none")
    navElem.blur()
})