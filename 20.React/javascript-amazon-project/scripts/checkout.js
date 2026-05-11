import { renderHeader } from "./checkout/checkoutHeader.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";

async function loadPage() {
  try {

    await loadProductsFetch()

  } catch (error) {
    console.log("Unexpected Error. Please try again later.")
  }

  renderHeader()
  renderOrderSummary()
  renderPaymentSummary()
}

loadPage()
