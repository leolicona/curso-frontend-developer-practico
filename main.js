const menuEmail = document.querySelector('.navbar-right')
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener("click", toggleInactive)

function toggleInactive() {
    console.log('Click')
    desktopMenu.classList.toggle('inactive')
}