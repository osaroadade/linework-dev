//Header
const header = document.querySelector("header")
const distanceFromTop = 200

function fixedHeader() {
    if (window.scrollY > distanceFromTop) {
        header.classList.add("fixed")
        return
    }
    header.classList.remove("fixed")
}

function windowEvents(func) {
    window.addEventListener("scroll", func)
    window.addEventListener("load", func)
    window.addEventListener("resize", func)
}

windowEvents(fixedHeader)

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

windowEvents(showScrollToTopBtn)

//Mobile Nav
const menuTrigger = document.querySelector(".nav-group > button.button-01")
const buttonItem = menuTrigger.querySelector("i")
const mobileMenu = document.querySelector(".nav-links.desktop")

menuTrigger.addEventListener("click", () => {
    if (!mobileMenu.classList.contains("open")) {
        header.classList.add("fixed")
        buttonItem.classList.replace("fa-bars", "fa-times")
        mobileMenu.classList.add("open")
        mobileMenu.animate([
            { translate: "-100% 0", easing: 'ease-in-out' },
            { translate: "0" }
        ], 350)
        return
    }

    mobileMenu.animate([
        { translate: "0", easing: 'ease-in-out' },
        { translate: "-100% 0" }
    ], 350)
    setTimeout(() => {
        buttonItem.classList.replace("fa-times", "fa-bars")
        mobileMenu.classList.remove("open")
    }, 300);
    menuTrigger.blur()
})