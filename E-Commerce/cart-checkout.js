document.addEventListener('DOMContentLoaded', function() {
  const checkoutButton = document.getElementById('checkout-button');

  if (checkoutButton) {
    checkoutButton.addEventListener('click', function(event) {
      // Prevent form submission if inside a form
      if (this.form && this.type === 'submit') {
        event.preventDefault();
      }

      // Navigate to Checkout.html
      window.location.replace('Checkout.html');
    });
  } else {
    console.error('Checkout button not found.');
  }
});