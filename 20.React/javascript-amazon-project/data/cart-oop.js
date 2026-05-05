import { validDeliveryOption } from "./deliveryOptions.js"

function Cart(localStorageKey) {
  const cart = {
    cartItems: undefined,
    timeoutIds: undefined,

    loadFromStorage() {
      this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || []
    },

    saveToStorage() {
      localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems))
    },

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
      this.saveToStorage()
    },

    updateCartQuantity() {
      let cartQuantity = 0;

      this.cartItems.forEach((item) => {
        cartQuantity += item.quantity;
      });

      return cartQuantity;
    },

    removeFromCart(productId) {
      const newCart = []
      this.cartItems.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
          newCart.push(cartItem)
        }
      })

      this.cartItems = newCart

      this.saveToStorage()
    },

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
    },


    renderAdded(productId) {
      const added = document.querySelector(`.added-mssg-${productId}`)

      added.classList.add("style-added")

      if (timeoutIds) {
        clearTimeout(timeoutIds)
      }

      const timeoutId = setTimeout(() => {
        added.classList.remove("style-added")
      }, 2000)

      timeoutIds = timeoutId
    },

    updateQuantity(productId, newQuantity) {
      let matchingItem

      this.cartItems.forEach((cartItem) => {
        if (productId === cartItem.productId) {
          matchingItem = cartItem
        }
      })

      matchingItem.quantity = newQuantity

      this.saveToStorage()
    },

    renderCartCount() {
      document.querySelector(".cart-quantity").innerHTML = this.updateCartQuantity()
    }
  }
  
  return cart
}

const cart = Cart("cart-oop")
const businessCart = Cart("cart-business")

cart.loadFromStorage()
businessCart.loadFromStorage()

console.log(cart)
console.log(businessCart)


