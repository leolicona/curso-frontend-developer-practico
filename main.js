const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const shoppingCart = document.querySelector('.navbar-shopping-cart')
const cartList = document.querySelector('#shoppingCartList')
const menu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const cardContainer = document.querySelector('.cards-container')
const productDetail = document.querySelector('#productDetail')
const productDetailClose = document.querySelector('.product-detail-close')


menuEmail.addEventListener("click",  toggleDesktopMenuInactive)
shoppingCart.addEventListener('click',toggleShoppingCartInactive)
menu.addEventListener('click', toggleMenuInactive)
productDetailClose.addEventListener('click', closeProductDetail)

function toggleDesktopMenuInactive () {
   const iscartListClosed = cartList.classList.contains('inactive')
    if (!iscartListClosed){
        cartList.classList.toggle('inactive')
    } 
    productDetail.classList.add('inactive') 
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
    productDetail.classList.add('inactive') 
    cartList.classList.toggle('inactive')
}


function toggleMenuInactive () {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if (!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive')
    }
    const iscartListClosed = cartList.classList.contains('inactive')
    if (!iscartListClosed){
        cartList.classList.toggle('inactive')
    }
    productDetail.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
}


function opencartList () {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if (!isDesktopMenuClosed){
        desktopMenu.classList.toggle('inactive')
    }
    const iscartListClosed = cartList.classList.contains('inactive')
    if (!iscartListClosed){
        cartList.classList.toggle('inactive')
    }

    //const isProductDetailClosed = productDetail.classList.contains('inactive')
    productDetail.classList.remove('inactive')
    
}

function closeProductDetail () {
    productDetail.classList.add('inactive')
}

const products = [
    {
        name: "bike",
        price: "20",
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    },
    {
        name: "bike",
        price: "20",
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    },
    {
        name: "bike",
        price: "20",
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    },
    {
        name: "bike",
        price: "20",
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    },
    {
        name: "bike",
        price: "20",
        image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"

    }
]




function renderProducts (arr, innerTo) {
    for (product of arr) {
    
        const productCard = document.createElement('div')
        productCard.setAttribute('class', 'product-card')

        const image = document.createElement('img')
        image.setAttribute('src', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
        image.addEventListener('click', opencartList)

        const productInfo = document.createElement('div')
        productInfo.setAttribute('class', 'product-info')

        const container =  document.createElement('div')
        const price = document.createElement('p')
        price.innerHTML = `$ ${product.price}`
        const name = document.createElement('p')
        name.innerHTML = product.name

        container.appendChild(price)
        container.appendChild(name)

        const figureEl = document.createElement('figure')
        const icon = document.createElement('img')
        icon.setAttribute('src', './icons/bt_add_to_cart.svg')
        figureEl.appendChild(icon)


        productInfo.appendChild(container)
        productInfo.appendChild(figureEl)

        productCard.appendChild(image)
        productCard.appendChild(productInfo)

        innerTo.appendChild(productCard)
       

    }
    
}

renderProducts(products, cardContainer )


