import cart from "../../data/cart-class.js"

export function renderHeader(){
  document.querySelector(".header-cart-qty").innerHTML = `${cart.updateCartQuantity()} items`
}