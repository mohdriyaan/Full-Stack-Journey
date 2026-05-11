import { getProduct, loadProductsFetch, products } from '../data/products.js';
import { orders } from '../data/orders.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { formatCurrency } from '../utils/money.js';
import cart from '../data/cart-class.js';

async function loadPage() {
  console.log('Loading orders page...');
  await loadProductsFetch();
  console.log('Products loaded, orders:', orders.length);
  console.log('Products array length:', products.length);
  console.log('First product:', products[0]);

  // For demo purposes, add some sample orders if none exist
  if (orders.length === 0) {
    console.log('Adding demo orders...');
    orders.push({
      id: "27cba69d-4c3d-4098-b42d-ac7fa62b7664",
      orderTime: dayjs().subtract(7, 'days').toISOString(),
      totalCostCents: 3506,
      products: [
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          estimatedDeliveryTime: dayjs().add(3, 'days').toISOString()
        },
        {
          productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
          quantity: 2,
          estimatedDeliveryTime: dayjs().add(7, 'days').toISOString()
        }
      ]
    });
  }

  function productsListHTML(order) {
    console.log('Generating HTML for order:', order.id);
    let productsListHTML = '';

    if (!order.products) {
      console.warn('Order has no products:', order.id);
      return '<div>No products found for this order.</div>';
    }

    order.products.forEach((productDetails) => {
      if (!productDetails || !productDetails.productId) {
        console.warn('Invalid product details:', productDetails);
        productsListHTML += '<div>Invalid product details.</div>';
        return;
      }

      const product = getProduct(productDetails.productId);
      console.log('Product for', productDetails.productId, ':', product ? product.name : 'NOT FOUND');

      if (!product) {
        console.warn(`Product not found: ${productDetails.productId}`);
        productsListHTML += `<div>Product not found: ${productDetails.productId}</div>`;
        return;
      }

      const deliveryDate = dayjs(productDetails.estimatedDeliveryTime).format('MMMM D');

      productsListHTML += `
        <div class="product-image-container">
          <img src="${product.image}">
        </div>

        <div class="product-details">
          <div class="product-name">
            ${product.name}
          </div>
          <div class="product-delivery-date">
            Arriving on: ${deliveryDate}
          </div>
          <div class="product-quantity">
            Quantity: ${productDetails.quantity}
          </div>
          <button class="buy-again-button button-primary js-buy-again"
          data-product-id="${product.id}">
          <img class="buy-again-icon" src="images/icons/buy-again.png">
          <span class="buy-again-message">Buy it again</span>
          </button>
        </div>

        <div class="product-actions">
          <a href="tracking.html?orderId=${order.id}&productId=${product.id}">
            <button class="track-package-button button-secondary">
              Track package
            </button>
          </a>
        </div>
      `;
    });

    console.log('Generated HTML length:', productsListHTML.length);
    return productsListHTML;
  }

  let ordersHTML = '';

  if (orders.length === 0) {
    ordersHTML = '<p>You have no orders yet.</p>';
  } else {
    orders.forEach((order) => {
      if (!order || !order.id || !order.orderTime || !order.totalCostCents) {
        console.warn('Invalid order:', order);
        return;
      }

      const orderTimeString = dayjs(order.orderTime).format('MMMM D');

      ordersHTML += `
        <div class="order-container">
          <div class="order-header">
            <div class="order-header-left-section">
              <div class="order-date">
                <div class="order-header-label">Order Placed:</div>
                <div>${orderTimeString}</div>
              </div>
              <div class="order-total">
                <div class="order-header-label">Total:</div>
                <div>$${formatCurrency(order.totalCostCents)}</div>
              </div>
            </div>

            <div class="order-header-right-section">
              <div class="order-header-label">Order ID:</div>
              <div>${order.id}</div>
            </div>
          </div>

          <div class="order-details-grid">
            ${productsListHTML(order)}
          </div>
        </div>
      `;
    });
  }

  console.log('Setting HTML:', ordersHTML.substring(0, 100) + '...');
  const ordersGrid = document.querySelector('.js-orders-grid');
  console.log('Orders grid element:', ordersGrid);
  if (ordersGrid) {
    ordersGrid.innerHTML = ordersHTML;
    console.log('HTML set successfully');
  } else {
    console.error('Orders grid element not found!');
  }

  cart.renderCartCount();

  document.querySelectorAll('.js-buy-again').forEach((button) => {
    button.addEventListener('click', () => {
      cart.addToCart(button.dataset.productId);
      cart.renderCartCount();

      // (Optional) display a message that the product was added,
      // then change it back after a second.
      button.innerHTML = 'Added';
      setTimeout(() => {
        button.innerHTML = `
          <img class="buy-again-icon" src="images/icons/buy-again.png">
          <span class="buy-again-message">Buy it again</span>
        `;
      }, 1000);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  loadPage();
});