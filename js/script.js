// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  // Navigation Active State
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#navbar ul li a");

  // Sticky Navigation
  const navbar = document.getElementById("navbar");
  const navHeight = navbar.offsetHeight;

  // Smooth scrolling for navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetPosition = document.querySelector(targetId).offsetTop;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition - navHeight;

      window.scrollTo({
        top: targetPosition - navHeight,
        behavior: "smooth",
      });

      // Update active nav link
      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Highlight active navigation based on scroll position
  function onScroll() {
    // Sticky navbar effect
    if (window.scrollY > 100) {
      navbar.style.padding = "0.5rem 0";
    } else {
      navbar.style.padding = "1rem 0";
    }

    // Get current scroll position
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - navHeight - 100) {
        current = section.getAttribute("id");
      }
    });

    // Update active nav link
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);

  // Form Submission
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Here you would normally send this data to a server
      // For now, we'll just log it and show a success message
      console.log("Form submission:", { name, email, subject, message });

      // Show success message
      alert("Thank you for your message! I will get back to you soon.");

      // Reset form
      contactForm.reset();
    });
  }

  // Project filtering functionality can be added here if needed

  // Animation on scroll (simple version)
  function revealElements() {
    const elements = document.querySelectorAll(".section");

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 150) {
        element.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", revealElements);
  revealElements(); // Run once on page load
});
