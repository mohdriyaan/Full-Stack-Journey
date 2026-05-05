import { updateCartQuantity } from "../../data/cart.js"

export function renderHeader(){
  document.querySelector(".header-cart-qty").innerHTML = `${updateCartQuantity()} items`
}