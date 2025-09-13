const menuIcon = document.querySelector('#menu-icon')
const navEl = document.querySelector("nav")
const closeMenuIcon = document.querySelector(".close-menu-icon-div")

menuIcon.addEventListener("click", openMenu)
closeMenuIcon.addEventListener("click", closeMenu)

function openMenu(){
    navEl.style.display = "flex"
    navEl.style.transform = "translateY(2px)"
    closeMenuIcon.style.display = "block"
    menuIcon.style.display = "none"

}

function closeMenu(){
    navEl.style.transform = "translateY(-150%)"
    closeMenuIcon.style.display = "none"
    menuIcon.style.display = "block"

}