document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for nav links
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: "smooth",
          });
        }
      });
    });
  
    // Scroll-to-top button
    const topBtn = document.getElementById("topBtn");
    if (topBtn) {
      window.onscroll = function () {
        if (
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
        ) {
          topBtn.style.display = "block";
        } else {
          topBtn.style.display = "none";
        }
      };
  
      topBtn.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }
  
    // Scroll movie container buttons
    const movieContainer = document.getElementById("movieContainer");
    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");
  
    if (leftBtn && rightBtn && movieContainer) {
      leftBtn.addEventListener("click", function () {
        movieContainer.scrollBy({
          left: -movieContainer.offsetWidth,
          behavior: "smooth",
        });
      });
  
      rightBtn.addEventListener("click", function () {
        movieContainer.scrollBy({
          left: movieContainer.offsetWidth,
          behavior: "smooth",
        });
      });
    }
  
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
  
    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => {
        navLinks.style.display =
          navLinks.style.display === "flex" ? "none" : "flex";
      });
  
      // Hide dropdown on outside click
      window.addEventListener("click", (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
          navLinks.style.display = "none";
        }
      });
    }
    const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
let index = 0;

const img = document.getElementById("sliderImage");

function showImage() {
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = images[index];
    img.style.opacity = 1;
  }, 300);
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

// Auto-scroll every 3 seconds
setInterval(nextImage, 3000);

// Expose functions to HTML buttons
window.nextImage = nextImage;
window.prevImage = prevImage;

    console.log("Custom script loaded.");
  });
  