import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { cart, loadFromStorage} from "../../data/cart.js";

describe("test suite: renderOrderSummary",()=>{
  const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6"
  const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d"
  
  beforeEach(()=>{
    spyOn(localStorage,"setItem")
    
    document.querySelector(".test-container").innerHTML = `
      <div class="header-cart-qty"></div>
      <div class="order-summary"></div>
      <div class="payment-summary"></div>
    ` 
    
    spyOn(localStorage,"getItem").and.callFake(()=>{
      return JSON.stringify([{
        productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity:2,
        deliveryOptionId:"1"
      },{    
        productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity:1,
        deliveryOptionId:"2"
      }]);
    });
    loadFromStorage();

    renderOrderSummary();
  })

  afterEach(()=>{
    document.querySelector(".test-container").innerHTML = ""
  })

  it("displays the cart",()=>{
    
    expect(
      document.querySelectorAll(".js-cart-item-container").length
    ).toEqual(2)

    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain("Quantity: 2")

    expect(
      document.querySelector(`.product-name-${productId1}`).innerText
    ).toEqual("Black and Gray Athletic Cotton Socks - 6 Pairs")

    expect(
      document.querySelector(`.product-name-${productId2}`).innerText
    ).toEqual("Intermediate Size Basketball")

    expect(
      document.querySelector(`.product-price-${productId1}`).innerText
    ).toEqual("$10.90")

    expect(
      document.querySelector(`.product-price-${productId2}`).innerText
    ).toEqual("$20.95")
  });
  
  it("removes a product",()=>{
    
    document.querySelector(`.js-delete-link-${productId1}`).click()

    expect(
      document.querySelectorAll(".js-cart-item-container").length
    ).toEqual(1)

    expect(document.querySelector(`.cart-item-container-${productId1}`)).toEqual(null)
    expect(document.querySelector(`.cart-item-container-${productId2}`)).not.toEqual(null)
    expect(cart.length).toEqual(1)
    expect(cart[0].productId).toEqual(productId2)
  })

  it("updating the delivery option",()=>{
    document.querySelector(`.delivery-option-${productId1}-3`).click()

    expect(
      document.querySelector(`.delivery-option-input-${productId1}-3`).checked
    ).toEqual(true)

    expect(cart.length).toEqual(2)
    expect(cart[0].deliveryOptionId).toEqual("3")
    expect(
      document.querySelector(".payment-shipping-money").innerText
    ).toEqual("$14.98")

    expect(
      document.querySelector(".payment-total-money").innerText
    ).toEqual("$63.50")
    
  })
})