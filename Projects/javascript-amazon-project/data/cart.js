import { validDeliveryOption } from "./deliveryOptions.js"

export let cart 

loadFromStorage()

export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem("cart")) ||  []
}

function saveToStorage(){
  localStorage.setItem("cart",JSON.stringify(cart))
}

let timeoutIds

export function addToCart(productId) {
  let matchingItem

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item
    }
  })

  let quantityElement = document.querySelector(`.qty-selector-${productId}`)

  let quantity = quantityElement ? Number(quantityElement.value) : 1

  if (matchingItem) {
    matchingItem.quantity += quantity
  } else {
    cart.push({
      productId,
      quantity,
      deliveryOptionId : "1"
    })
  }

  if(quantityElement){
    renderAdded(productId)
  }
  
  saveToStorage()
}

export function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((item) => {
    cartQuantity += item.quantity;
  });

  return cartQuantity;
}


export function renderAdded(productId) {
  const added = document.querySelector(`.added-mssg-${productId}`)

  added.classList.add("style-added")

  if (timeoutIds) {
    clearTimeout(timeoutIds)
  }

  const timeoutId = setTimeout(() => {
    added.classList.remove("style-added")
  }, 2000)

  timeoutIds = timeoutId
}

export function removeFromCart(productId){
  const newCart = []
  cart.forEach((cartItem)=>{
    if(cartItem.productId!==productId){
      newCart.push(cartItem)
    }
  })

  cart = newCart

  saveToStorage()
}

export function renderCartCount(){
  document.querySelector(".cart-quantity").innerHTML = updateCartQuantity()
}

export function updateQuantity(productId,newQuantity){
  let matchingItem
  cart.forEach((cartItem)=>{
    if(productId===cartItem.productId){
      matchingItem = cartItem
    }
  })
  matchingItem.quantity = newQuantity
  saveToStorage()
}

export function updateDeliveryOption(productId,deliveryOptionId){
  let matchingItem

  if(!validDeliveryOption(deliveryOptionId)){
    return;
  }
  
  cart.forEach((cartItem)=>{
    if(productId===cartItem.productId){
      matchingItem = cartItem
    }
  })

  if(!matchingItem){
    return;
  }

  matchingItem.deliveryOptionId = deliveryOptionId

  saveToStorage()
}