import { getOrder } from '../data/orders.js';
import { getProduct, loadProductsFetch } from '../data/products.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import cart from '../data/cart-class.js';

async function loadPage() {
  await loadProductsFetch();

  const url = new URL(window.location.href);
  const orderId = url.searchParams.get('orderId');
  const productId = url.searchParams.get('productId');

  const order = getOrder(orderId);
  const product = getProduct(productId);

  if (!order) {
    document.querySelector('.js-order-tracking').innerHTML = '<p>Order not found.</p>';
    return;
  }

  if (!product) {
    document.querySelector('.js-order-tracking').innerHTML = '<p>Product not found.</p>';
    return;
  }

  // Get additional details about the product like
  // the estimated delivery time.
  let productDetails;
  order.products.forEach((details) => {
    if (details.productId === product.id) {
      productDetails = details;
    }
  });

  if (!productDetails) {
    document.querySelector('.js-order-tracking').innerHTML = '<p>Product details not found in order.</p>';
    return;
  }

  const today = dayjs();
  const orderTime = dayjs(order.orderTime);
  const deliveryTime = dayjs(productDetails.estimatedDeliveryTime);

  let percentProgress = 0;
  if (deliveryTime > orderTime) {
    const totalDuration = deliveryTime.diff(orderTime, 'millisecond');
    const elapsedDuration = today.diff(orderTime, 'millisecond');
    percentProgress = Math.min(100, Math.max(0, (elapsedDuration / totalDuration) * 100));
  } else {
    percentProgress = 100; // If delivery time is not after order time, assume delivered
  }

  const deliveredMessage = today < deliveryTime ? 'Arriving on' : 'Delivered on';

  const trackingHTML = `
    <a class="back-to-orders-link link-primary" href="orders.html">
      View all orders
    </a>

    <div class="delivery-date">
      ${deliveredMessage} ${dayjs(productDetails.estimatedDeliveryTime).format('dddd, MMMM D')
    }
    </div>

    <div class="product-info">
      ${product.name}
    </div>

    <div class="product-info">
      Quantity: ${productDetails.quantity}
    </div>

    <img class="product-image" src="${product.image}">

    <div class="progress-labels-container">
      <div class="progress-label ${percentProgress < 50 ? 'current-status' : ''}">
        Preparing
      </div>
      <div class="progress-label ${(percentProgress >= 50 && percentProgress < 100) ? 'current-status' : ''
    }">
        Shipped
      </div>
      <div class="progress-label ${percentProgress >= 100 ? "current-status" : ''
    }">
        Delivered
      </div>
    </div>

    <div class="progress-bar-container">
      <div class="progress-bar" style="width: ${percentProgress}%;"></div>
    </div>
  `;

  document.querySelector('.js-order-tracking').innerHTML = trackingHTML;
}

cart.renderCartCount();

loadPage();