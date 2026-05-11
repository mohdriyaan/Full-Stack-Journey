import { validDeliveryOption } from "./deliveryOptions.js"

class Cart {
  cartItems;
  timeoutIds;
  #localStorageKey; // private property

  constructor(localStorageKey) {
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || []
  }

  saveToStorage() {
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems))
  }

  addToCart(productId) {
    let matchingItem

    this.cartItems.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item
      }
    })

    let quantityElement = document.querySelector(`.qty-selector-${productId}`)

    let quantity = quantityElement ? Number(quantityElement.value) : 1

    if (matchingItem) {
      matchingItem.quantity += quantity
    } else {
      this.cartItems.push({
        productId,
        quantity,
        deliveryOptionId: "1"
      })
    }

    if (quantityElement) {
      this.renderAdded(productId)
    }

    this.saveToStorage()
  }

  updateCartQuantity() {
    let cartQuantity = 0;

    this.cartItems.forEach((item) => {
      cartQuantity += item.quantity;
    });

    return cartQuantity;
  }

  removeFromCart(productId) {
    const newCart = []
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem)
      }
    })

    this.cartItems = newCart

    this.saveToStorage()
  }

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem

    if (!validDeliveryOption(deliveryOptionId)) {
      return;
    }

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem
      }
    })

    if (!matchingItem) {
      return;
    }

    matchingItem.deliveryOptionId = deliveryOptionId

    this.saveToStorage()
  }


  renderAdded(productId) {
    const added = document.querySelector(`.added-mssg-${productId}`)

    added.classList.add("style-added")

    if (this.timeoutIds) {
      clearTimeout(this.timeoutIds)
    }

    const timeoutId = setTimeout(() => {
      added.classList.remove("style-added")
    }, 2000)

    this.timeoutIds = timeoutId
  }

  updateQuantity(productId, newQuantity) {
    let matchingItem

    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem
      }
    })

    matchingItem.quantity = newQuantity

    this.saveToStorage()
  }

  renderCartCount() {
    document.querySelector(".cart-quantity").innerHTML = this.updateCartQuantity()
  }
}

export async function loadCartFetch() {
  const response = await fetch("https://supersimplebackend.dev/cart")
  const cartData = await response.json()
  cart.cartItems = cartData
  cart.saveToStorage()
}

// Extra feature: make the cart empty after creating an order.

export const cart = new Cart("cart-oops")

export function resetCart() {
  cart.cartItems = [];
  cart.saveToStorage();
}

export default cart;


