import { cart, resetCart } from "../../data/cart-class.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { products, getProduct } from "../../data/products.js";
import { formatCurrency } from "../../utils/money.js";
import { addOrder } from "../../data/orders.js";


export function renderPaymentSummary() {
  let productPriceCents = 0
  let shippingPriceCents = 0

  let qty = 0

  if (cart.cartItems.length === 0) {
    const paymentSummaryHTML = `
        <div class="payment-summary-title">
          Order Summary
        </div>
        <p>Your cart is empty. <a href="amazon.html">Go shopping</a></p>
    `;
    document.querySelector(".payment-summary").innerHTML = paymentSummaryHTML;
    return;
  }

  cart.cartItems.forEach((cartItem) => {
    const productId = cartItem.productId
    const product = getProduct(productId)

    if (!product) {
      console.warn(`Product not found: ${productId}`);
      return;
    }

    qty += cartItem.quantity
    productPriceCents += product.priceCents * cartItem.quantity

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId)
    shippingPriceCents += deliveryOption.priceCents
  })

  const totalBeforeTax = productPriceCents + shippingPriceCents
  const taxCents = totalBeforeTax * 0.1
  const totalCents = totalBeforeTax + taxCents

  const paymentSummaryHTML = `
      <div class="payment-summary-title">
        Order Summary
      </div>

      <div class="payment-summary-row">
        <div>Items (${qty}):</div>
        <div class="payment-summary-money payment-product-price">$${formatCurrency(productPriceCents)}</div>
      </div>

      <div class="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div class="payment-summary-money payment-shipping-money">$${formatCurrency(shippingPriceCents)}</div>
      </div>

      <div class="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div class="payment-summary-money payment-total-beforetax-money">$${formatCurrency(totalBeforeTax)}</div>
      </div>

      <div class="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div class="payment-summary-money payment-tax-money">$${formatCurrency(taxCents)}</div>
      </div>

      <div class="payment-summary-row total-row">
        <div>Order total:</div>
        <div class="payment-summary-money payment-total-money">$${formatCurrency(totalCents)}</div>
      </div>

      <button class="place-order-button button-primary js-place-order">
        Place your order
      </button>
  `

  document.querySelector(".payment-summary").innerHTML = paymentSummaryHTML

  document.querySelector(".js-place-order").addEventListener("click", async () => {
    try {
      const response = await fetch("https://supersimplebackend.dev/orders",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            cart: cart.cartItems
          })
        }
      )
      const order = await response.json()
      addOrder(order);

    } catch (error) {
      console.log("Unexpected Error. Try again later.")
    }

    resetCart()

    window.location.href = "orders.html"

  })
}