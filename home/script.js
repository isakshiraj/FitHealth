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
