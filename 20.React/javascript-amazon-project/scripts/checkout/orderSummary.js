import { cart,removeFromCart,updateQuantity,updateDeliveryOption} from "../../data/cart.js"
import { renderHeader } from "./checkoutHeader.js"
import {getProduct, products} from "../../data/products.js"
import { formatCurrency } from "../../utils/money.js"
import { deliveryOptions, getDeliveryOption,calculateDeliveryDate } from "../../data/deliveryOptions.js"
import { renderPaymentSummary } from "./paymentSummary.js"


export function renderOrderSummary(){
  
  let cartHTML = ""

  cart.forEach((cartItem) => {
    const productId = cartItem.productId
    const matchingProduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionId

    let deliveryOption = getDeliveryOption(deliveryOptionId)

    let dateString = calculateDeliveryDate(deliveryOption) 

    cartHTML+=`
    <div class="cart-item-container-${productId} js-cart-item-container">
      <div class="delivery-date">
        Delivery date: ${dateString}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name product-name-${productId}">
            ${matchingProduct.name}
          </div>
          <div class="product-price product-price-${productId}">
            ${matchingProduct.getPrice()}
          </div>
          <div class="product-quantity js-product-quantity-${matchingProduct.id}">
            <span>
              Quantity: <span class="quantity-label-${productId}">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-link" data-product-id="${productId}">
              Update
            </span>
            <input type="text" class="quantity-input new-qty-${productId}" data-product-id="${productId}">
            <span class="save-quantity-link link-primary" data-product-id="${productId}">Save</span>
            <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${productId}" data-product-id="${productId}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionsHTML(productId,cartItem)}
        </div>
      </div>
    </div>
    `
  })

  function deliveryOptionsHTML(productId,cartItem){
    let html = ""
    deliveryOptions.forEach((deliveryOption)=>{
      
      let dateString = calculateDeliveryDate(deliveryOption)

      const priceString = deliveryOption.priceCents===0?"FREE":`$${formatCurrency(deliveryOption.priceCents)}`

      const isChecked = deliveryOption.id===cartItem.deliveryOptionId

      html+=`
      <div class="delivery-option delivery-option-${productId}-${deliveryOption.id}" 
      data-product-id="${productId}" data-delivery-option-id="${deliveryOption.id}">
        <input type="radio"
          ${isChecked ? "checked" : ""}
          class="delivery-option-input delivery-option-input-${productId}-${deliveryOption.id}"
          name="delivery-option-${productId}">
        <div>
          <div class="delivery-option-date">
            ${dateString}
          </div>
          <div class="delivery-option-price">
            ${priceString} - Shipping
          </div>
        </div>
      </div>
      
      `
    })
    return html
  }

  document.querySelector(".order-summary").innerHTML = cartHTML

  document.querySelectorAll(".js-delete-link").forEach((link)=>{
    link.addEventListener("click",()=>{
      const {productId} = link.dataset
      
      removeFromCart(productId)
      renderOrderSummary()
      renderPaymentSummary()
      renderHeader()
      
    })
  })

  document.querySelectorAll(".js-update-link").forEach((link)=>{
    link.addEventListener("click",()=>{
      const {productId} = link.dataset
      const cartItem = document.querySelector(`.cart-item-container-${productId}`)
      cartItem.classList.add("is-editing-quantity")
    })
  })

  document.querySelectorAll(".save-quantity-link").forEach((link)=>{
    link.addEventListener("click",()=>{
      const {productId} = link.dataset

      const newQtyValue = Number(document.querySelector(`.new-qty-${productId}`).value)

      if (newQtyValue <= 0 || newQtyValue >= 1000) {
        alert('Quantity must be between 0 and 999');
        return;
      }
      
      updateQuantity(productId,newQtyValue)

      renderHeader()
      renderOrderSummary()

      const cartItem = document.querySelector(`.cart-item-container-${productId}`)
      cartItem.classList.remove("is-editing-quantity")

      renderPaymentSummary()
    })
  })

  document.querySelectorAll(`.quantity-input`).forEach((link)=>{
    link.addEventListener("keydown", (event)=>{
      const {productId} = link.dataset
      
      const newQtyValue = Number(document.querySelector(`.new-qty-${productId}`).value)

      if(event.key==="Enter"){

        if (newQtyValue <= 0 || newQtyValue >= 1000) {
          alert('Quantity must be between 0 and 999');
        return;
        }

        updateQuantity(productId,newQtyValue)
        renderHeader()
        renderOrderSummary()

        const cartItem = document.querySelector(`.cart-item-container-${productId}`)
        cartItem.classList.remove("is-editing-quantity")
        
        renderPaymentSummary()
      }
    })
  })

  document.querySelectorAll(".delivery-option").forEach((element)=>{
    element.addEventListener("click",()=>{
      const {productId,deliveryOptionId} = element.dataset
      updateDeliveryOption(productId,deliveryOptionId)
      renderOrderSummary()
      renderPaymentSummary()
    })
  })
}


