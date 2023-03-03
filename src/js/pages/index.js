// Resize Video
const MAX_WIDTH = "(max-width: 64em)"
const PORTRAIT_VIDEO = "images/hero-portrait.mp4"
const LANDSCAPE_VIDEO = "images/hero-landscape.mp4"

let mediaQurey = window.matchMedia(MAX_WIDTH)
let videoElement = document.querySelector("#hero-video")
let videoSrc = document.createElement("source")

videoSrc.id = "video-src";
videoSrc.setAttribute("type", "video/mp4")
videoElement.appendChild(videoSrc)

if (mediaQurey.matches) {
    videoElement.pause()
    videoSrc.removeAttribute("src")
    videoSrc.setAttribute("src", PORTRAIT_VIDEO)
    videoElement.load()
} else {
    videoElement.pause()
    videoSrc.removeAttribute("src")
    videoSrc.setAttribute("src", LANDSCAPE_VIDEO)
    videoElement.load()
}

window.addEventListener("resize", () => {
    let mediaQurey = window.matchMedia(MAX_WIDTH)

    if (mediaQurey.matches) {
        videoElement.pause()
        videoSrc.src = PORTRAIT_VIDEO
        videoElement.load()
    } else {
        videoElement.pause()
        videoSrc.src = LANDSCAPE_VIDEO
        videoElement.load()
    }
})

//Side Navigation
const sideNav = document.querySelector(".side-nav")

const thresholdY = 500
const thresholdX = 1024

function showSideNav() {
    if (window.scrollY > thresholdY && !(window.innerWidth < thresholdX)) {
        sideNav.classList.add("visible")
        return
    }

    sideNav.classList.remove("visible")
}

window.addEventListener("scroll", showSideNav)
window.addEventListener("load", showSideNav)
window.addEventListener("resize", showSideNav)

const homeContent = document.querySelectorAll(".home-content")
const sideNavBtn = document.querySelectorAll(".sidenav-button")

window.addEventListener("load", () => {
    createObserver()
}, false)


function createObserver() {
    let observer

    let options = {
        root: null,
        threshold: 0.5
    }

    observer = new IntersectionObserver(changeState, options)

    function changeState(entries) {
        entries.map((entry) => {
            if (entry.isIntersecting) {
                sideNavBtn.forEach(btn => {
                    if (btn.dataset.counter === entry.target.dataset.counter) {
                        btn.classList.add("nav-active")
                    }
                })
            }
            if (entry.isIntersecting === false) {
                sideNavBtn.forEach(btn => {
                    if (btn.dataset.counter === entry.target.dataset.counter) {
                        btn.classList.remove("nav-active")
                    }
                })
            }
        })
    }

    homeContent.forEach(elem => {
        observer.observe(elem)
    })
}