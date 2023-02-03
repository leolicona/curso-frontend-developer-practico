const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')


menuEmail.addEventListener("click",  toggleDesktopMenuInactive)
shoppingCart.addEventListener('click',toggleShoppingCartInactive)
menu.addEventListener('click', toggleMenuInactive)

function toggleDesktopMenuInactive () {
   const isProductDetailClosed = productDetail.classList.contains('inactive')
    if (!isProductDetailClosed){
        productDetail.classList.toggle('inactive')
    } 
    desktopMenu.classList.toggle('inactive')
}


function toggleShoppingCartInactive () {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if (!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive')
    }
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive')
    if (!isMobileMenuClosed ){
        mobileMenu.classList.toggle('inactive')
    }
    productDetail.classList.toggle('inactive')
}


function toggleMenuInactive () {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if (!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive')
    }
    const isProductDetailClosed = productDetail.classList.contains('inactive')
    if (!isProductDetailClosed){
        productDetail.classList.toggle('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}

