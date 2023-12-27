/* Function */
function toggleFooter() {
  var footerContent = document.querySelector(".footer-content");
  var toggleButton = document.querySelector(".footer-toggle");

  if (footerContent.style.maxHeight) {
    // Content is expanded, collapse it
    footerContent.style.maxHeight = null;
    toggleButton.textContent = "Show all ⌄";
  } else {
    // Content is collapsed, expand it
    footerContent.style.maxHeight = footerContent.scrollHeight + "px";
    toggleButton.textContent = "Collapse all ⌃";
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const productCardContainer = document.getElementById(
    "product-card-container"
  );
  const slideButton = document.getElementById("slide");
  const slideBackButton = document.getElementById("slideBack");

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
      if (direction === "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (
        scrollAmount >= distance ||
        (direction === "right" &&
          element.scrollLeft + element.clientWidth >= element.scrollWidth)
      ) {
        window.clearInterval(slideTimer);
        updateButtonVisibility();
      }
    }, speed);

    updateButtonVisibility();
  }

  function updateButtonVisibility() {
    // Hide or show the right arrow button based on scroll position
    slideButton.style.visibility =
      productCardContainer.scrollLeft + productCardContainer.clientWidth >=
      productCardContainer.scrollWidth
        ? "hidden"
        : "visible";

    // Hide or show the left arrow button based on scroll position
    slideBackButton.style.visibility =
      productCardContainer.scrollLeft === 0 ? "hidden" : "visible";
  }

  slideButton.addEventListener("click", () =>
    sideScroll(productCardContainer, "right", 25, 100, 30)
  );
  slideBackButton.addEventListener("click", () =>
    sideScroll(productCardContainer, "left", 25, 100, 30)
  );

  // Initial button visibility check
  updateButtonVisibility();

  // Listen to scroll events to dynamically update button visibility
  productCardContainer.addEventListener("scroll", updateButtonVisibility);
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show/hide the "scroll to top" button based on scroll position
  window.addEventListener("scroll", function () {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    }
  });

  // Scroll to top when the button is clicked
  scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  });
});
