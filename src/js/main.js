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

//Scroll to top
const scrollToTopBtn = document.querySelector(".scroll-to-top")

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

const threshold = 1000

function showScrollToTopBtn() {
    if (window.scrollY > threshold) {
        scrollToTopBtn.classList.add("visible")
        return
    }
    scrollToTopBtn.classList.remove("visible")
}

window.addEventListener("scroll", showScrollToTopBtn)
window.addEventListener("load", showScrollToTopBtn)
window.addEventListener("resize", showScrollToTopBtn)