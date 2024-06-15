document.addEventListener("DOMContentLoaded", function() {
  // Function to handle form submission
  function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Perform form validation here
    if (validateForm()) {
      // If form is valid, proceed with checkout process
      processCheckout();
    } else {
      // If form is not valid, show error messages or handle accordingly
      alert("Please fill out all required fields correctly.");
    }
  }

  // Function to validate the checkout form
  function validateForm() {
    // Implement your form validation logic here
    // Example validation for required fields
    const address = document.getElementById('address').value.trim();
    const postalCode = document.getElementById('postal-code').value.trim();
    const city = document.getElementById('city').value.trim();
    const region = document.getElementById('region').value.trim();
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked');

    if (address === '' || postalCode === '' || city === '' || region === '' || !paymentMethod) {
      return false;
    }

    return true;
  }

  // Function to process the checkout
  function processCheckout() {
    alert("Checkout process initiated!"); // Placeholder action
    
 
    window.location.href = 'index.html'; // 
  }

  // Attach event listener to the checkout form
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', handleFormSubmission);
  }
});
