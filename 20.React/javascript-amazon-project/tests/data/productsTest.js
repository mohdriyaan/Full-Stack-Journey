import { Product, Clothing, Appliance } from "../../data/products.js"

describe("test suite: Product class", () => {
  beforeEach(() => {
    spyOn(localStorage, "setItem")
  })

  describe("Product class", () => {
    it("creates a product with correct properties", () => {
      const productDetails = {
        id: "test-id",
        image: "test-image.jpg",
        name: "Test Product",
        rating: {
          stars: 4.5,
          count: 100
        },
        priceCents: 1090
      }

      const product = new Product(productDetails)

      expect(product.id).toBe("test-id")
      expect(product.image).toBe("test-image.jpg")
      expect(product.name).toBe("Test Product")
      expect(product.rating).toEqual({
        stars: 4.5,
        count: 100
      })
      expect(product.priceCents).toBe(1090)
    })

    it("returns correct stars URL", () => {
      const productDetails = {
        id: "test-id",
        image: "test-image.jpg",
        name: "Test Product",
        rating: {
          stars: 4.5,
          count: 100
        },
        priceCents: 1090
      }

      const product = new Product(productDetails)

      expect(product.getStarsUrl()).toBe("images/ratings/rating-45.png")
    })

    it("returns correct price", () => {
      const productDetails = {
        id: "test-id",
        image: "test-image.jpg",
        name: "Test Product",
        rating: {
          stars: 4.5,
          count: 100
        },
        priceCents: 1090
      }

      const product = new Product(productDetails)

      expect(product.getPrice()).toBe("$10.90")
    })

    it("returns empty extra info HTML", () => {
      const productDetails = {
        id: "test-id",
        image: "test-image.jpg",
        name: "Test Product",
        rating: {
          stars: 4.5,
          count: 100
        },
        priceCents: 1090
      }

      const product = new Product(productDetails)

      expect(product.extraInfoHTML()).toBe("")
    })
  })

  describe("Clothing class", () => {
    it("creates a clothing product with size chart link", () => {
      const productDetails = {
        id: "test-id",
        image: "test-image.jpg",
        name: "Test Clothing",
        rating: {
          stars: 4.0,
          count: 50
        },
        priceCents: 2000,
        sizeChartLink: "images/clothing-size-chart.png"
      }

      const clothing = new Clothing(productDetails)

      expect(clothing.id).toBe("test-id")
      expect(clothing.image).toBe("test-image.jpg")
      expect(clothing.name).toBe("Test Clothing")
      expect(clothing.rating).toEqual({
        stars: 4.0,
        count: 50
      })
      expect(clothing.priceCents).toBe(2000)
      expect(clothing.sizeChartLink).toBe("images/clothing-size-chart.png")
    })

    it("returns correct extra info HTML for clothing", () => {
      const productDetails = {
        id: "test-id",
        image: "test-image.jpg",
        name: "Test Clothing",
        rating: {
          stars: 4.0,
          count: 50
        },
        priceCents: 2000,
        sizeChartLink: "images/clothing-size-chart.png"
      }

      const clothing = new Clothing(productDetails)

      expect(clothing.extraInfoHTML()).toBe(`
      <a href="images/clothing-size-chart.png" target="_blank">
        Size chart
      </a>
    `)
    })
  })

  describe("Appliance class", () => {
    it("creates an appliance product with instructions and warranty links", () => {
      const productDetails = {
        id: "test-id",
        image: "test-image.jpg",
        name: "Test Appliance",
        rating: {
          stars: 4.5,
          count: 75
        },
        priceCents: 5000,
        instructionsLink: "instructions.pdf",
        warrantyLink: "warranty.pdf"
      }

      const appliance = new Appliance(productDetails)

      expect(appliance.id).toBe("test-id")
      expect(appliance.image).toBe("test-image.jpg")
      expect(appliance.name).toBe("Test Appliance")
      expect(appliance.rating).toEqual({
        stars: 4.5,
        count: 75
      })
      expect(appliance.priceCents).toBe(5000)
      expect(appliance.instructionsLink).toBe("instructions.pdf")
      expect(appliance.warrantyLink).toBe("warranty.pdf")
    })

    it("returns correct extra info HTML for appliance", () => {
      const productDetails = {
        id: "test-id",
        image: "test-image.jpg",
        name: "Test Appliance",
        rating: {
          stars: 4.5,
          count: 75
        },
        priceCents: 5000,
        instructionsLink: "instructions.pdf",
        warrantyLink: "warranty.pdf"
      }

      const appliance = new Appliance(productDetails)

      expect(appliance.extraInfoHTML()).toBe(`
      <a href="instructions.pdf" target="_blank">Instructions</a>
      <a href="warranty.pdf" target="_blank">Warranty</a>
    `)
    })
  })
})