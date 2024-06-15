// Function to handle adding items to cart
function addToCart(productId, productName, productImage, productPrice) {
  // Initialize cart in sessionStorage if it doesn't exist
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  // Check if the product already exists in cart
  let existingItem = cart.find(item => item.productId === productId);

  if (existingItem) {
      // Increment quantity if product already in cart
      existingItem.quantity++;
  } else {
      // Add new item to cart
      cart.push({
          productId: productId,
          productName: productName,
          productImage: productImage,
          productPrice: productPrice,
          quantity: 1 // Initial quantity is 1
      });

  if (!productId ||!productName ||!productImage ||!productPrice) {
    console.error("Invalid product data");
    return; // Exit the function if any parameter is invalid
  }

}

  // Save updated cart back to sessionStorage
  sessionStorage.setItem('cart', JSON.stringify(cart));

  // Redirect to cart.html
  window.location.href = 'Cart.html';
}

// Function to render cart items on cart.html
function renderCart() {
  let cartItems = JSON.parse(sessionStorage.getItem('cart')) || [];
  let cartTableBody = document.querySelector('#cart-items tbody');
  let cartTotal = 0;

  // Clear existing table rows
  cartTableBody.innerHTML = '';

  // Render each cart item
  cartItems.forEach(item => {
      // Calculate total price for each item
      let totalPrice = item.productPrice * item.quantity;
      cartTotal += totalPrice;

      // Create table row for the item
      let row = document.createElement('tr');
      row.innerHTML = `
          <td>${item.productName}</td>
          <td><img src="${item.productImage}" alt="${item.productName}" style="width: 50px;"></td>
          <td>₱${item.productPrice}</td>
          <td>${item.quantity}</td>
          <td>₱${totalPrice}</td>
          <td><button class="remove-button CheckoutButton" data-product-id="${item.productId}">Remove</button></td>
      `;

      // Append row to table body
      cartTableBody.appendChild(row);
  });

  // Update cart total
  document.getElementById('cart-total').textContent = `₱${cartTotal.toFixed(2)}`;
}

// Remove item from cart based on productId
function removeItem(productId) {
  let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  // Find index of item to remove
  let index = cart.findIndex(item => item.productId === productId);

  if (index !== -1) {
      // Remove item from array
      cart.splice(index, 1);

      // Save updated cart back to sessionStorage
      sessionStorage.setItem('cart', JSON.stringify(cart));

      // Re-render the cart on cart.html
      renderCart();
  }
}



// Check if we are on the cart.html page
if (window.location.pathname.endsWith('Cart.html')) {
  renderCart(); // Render the cart items on cart.html

  // Event listener for "Remove" buttons
  document.addEventListener('click', function(event) {
      if (event.target.classList.contains('remove-button')) {
          let productId = event.target.getAttribute('data-product-id');
          removeItem(productId);
      }
  });
}

// Event listener for "Add to Cart" buttons in index.html
document.addEventListener('DOMContentLoaded', function() {
  let addToCartButtons = document.querySelectorAll('.CartButton');
  addToCartButtons.forEach(button => {
      button.addEventListener('click', function() {
          let productId = button.getAttribute('data-product-id');
          let productName = button.getAttribute('data-product-name');
          let productImage = button.getAttribute('data-product-image');
          let productPrice = parseFloat(button.getAttribute('data-product-price'));

          addToCart(productId, productName, productImage, productPrice);
    
  
      });
  });  
});
