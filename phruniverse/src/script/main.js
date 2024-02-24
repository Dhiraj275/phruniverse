
function toggleNav() {
    const navbar = document.querySelector(".navbar")
    if (navbar.classList.contains("active")) {
        navbar.classList.remove("active")
    } else {
        navbar.classList.add("active")
    }
}
export {toggleNav}