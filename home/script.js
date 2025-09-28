

  function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Handle button visibility + footer overlap
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  const footer = document.querySelector("footer");

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }

  // Prevent button overlapping footer
  const footerRect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (footerRect.top < windowHeight) {
    // If footer is in view, move button above it
    let overlap = windowHeight - footerRect.top + 20; // 20px gap
    btn.style.bottom = overlap + "px";
  } else {
    btn.style.bottom = "40px"; // default position
  }
};
