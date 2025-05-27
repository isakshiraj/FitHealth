
  document.addEventListener("DOMContentLoaded", function () {
    const toggleIcon = document.getElementById("toggle-icon");
    const body = document.body;

    // Start with light mode
    body.classList.add("light-mode");
    toggleIcon.className = "fa-solid fa-sun";

    toggleIcon.addEventListener("click", function () {
      if (body.classList.contains("light-mode")) {
        body.classList.replace("light-mode", "dark-mode");
        toggleIcon.className = "fa-regular fa-moon";
      } else {
        body.classList.replace("dark-mode", "light-mode");
        toggleIcon.className = "fa-solid fa-sun";
      }
    });
  });



  // Show button when scrolled down
  window.onscroll = function () {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  };

  // Scroll to top when clicked
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
