document.addEventListener("DOMContentLoaded", function() {
  const productImages = document.querySelectorAll(".product-image");

  productImages.forEach(image => {
    const originalSrc = image.getAttribute("src");
    const hoverSrc = image.getAttribute("data-hover-src");

    image.addEventListener("mouseenter", function() {
      image.setAttribute("src", hoverSrc);
    });

    image.addEventListener("mouseleave", function() {
      image.setAttribute("src", originalSrc);
    });
  });
});