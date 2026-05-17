import cart from "../../data/cart-class.js";

describe("test suite: addToCart", () => {
  beforeEach(() => {
    spyOn(localStorage, "setItem")
  })

  it("adds an existing product to the cart", () => {

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
        deliveryOptionId: "1"
      }])
    })

    cart.cartItems = JSON.parse(localStorage.getItem("cart-oops")) || []

    cart.addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.cartItems.length).toEqual(1)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(cart.cartItems[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6")
    expect(cart.cartItems[0].quantity).toEqual(2)
    expect(localStorage.setItem).toHaveBeenCalledWith("cart-oops", JSON.stringify([{
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionId: "1"
    }]))

  });

  it("adds a new product to the cart", () => {

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([])
    })

    cart.cartItems = []
    cart.addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.cartItems.length).toEqual(1)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(cart.cartItems[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6")
    expect(cart.cartItems[0].quantity).toEqual(1)
    expect(localStorage.setItem).toHaveBeenCalledWith("cart-oops", JSON.stringify([{
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
      deliveryOptionId: "1"
    }]))
  })
})

describe("test suite: removeFromCart", () => {
  const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6"
  const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d"
  beforeEach(() => {
    spyOn(localStorage, "setItem")

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
        deliveryOptionId: "1"
      }])
    })

    cart.cartItems = JSON.parse(localStorage.getItem("cart-oops")) || []
  })

  it("remove a product that is in the cart", () => {
    cart.removeFromCart(productId1)
    expect(cart.cartItems.length).toEqual(0)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(localStorage.setItem).toHaveBeenCalledWith("cart-oops", JSON.stringify([]))
  })

  it("remove a product that is not in the cart", () => {
    cart.removeFromCart(productId2)
    expect(cart.cartItems.length).toEqual(1)
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(localStorage.setItem).toHaveBeenCalledWith("cart-oops", JSON.stringify([{
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
      deliveryOptionId: "1"
    }]))
  })
})

describe("test suite: updateDeliveryOption", () => {
  const productId = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6"
  beforeEach(() => {
    spyOn(localStorage, "setItem")

    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([{
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 1,
        deliveryOptionId: "1"
      }])
    })

    cart.cartItems = JSON.parse(localStorage.getItem("cart-oops")) || []
  })

  it("update the delivery option of a product", () => {
    cart.updateDeliveryOption(productId, "2")
    expect(cart.cartItems[0].deliveryOptionId).toEqual("2")
    expect(localStorage.setItem).toHaveBeenCalledTimes(1)
    expect(localStorage.setItem).toHaveBeenCalledWith("cart-oops", JSON.stringify([{
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
      deliveryOptionId: "2"
    }]))
  })

  it('does nothing if the product is not in the cart', () => {
    cart.updateDeliveryOption('does-not-exist', '3');
    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.cartItems[0].quantity).toEqual(1);
    expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });

  it('does nothing if the delivery option does not exist', () => {
    cart.updateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 'does-not-exist');
    expect(cart.cartItems.length).toEqual(1);
    expect(cart.cartItems[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.cartItems[0].quantity).toEqual(1);
    expect(cart.cartItems[0].deliveryOptionId).toEqual('1');
    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });
})