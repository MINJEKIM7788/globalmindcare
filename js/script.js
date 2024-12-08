document.addEventListener("DOMContentLoaded", () => {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
  
    // Toggle mobile menu visibility
    mobileMenu.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
  
    sections.forEach((section) => {
      observer.observe(section);
      section.classList.add("hidden"); // Initial hidden state
    });
  });
  