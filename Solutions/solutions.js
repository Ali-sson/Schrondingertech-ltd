// Toggle mobile menu
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // Toggle between hamburger (bars) and close (x)
    const icon = hamburger.querySelector("i");
    if (navLinks.classList.contains("show")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });


  

// Close mobile menu when any submenu link is clicked
document.querySelectorAll(".dropdown-menu a").forEach(link => {
  link.addEventListener("click", () => {
    const navLinks = document.getElementById("nav-links");
    const hamburger = document.getElementById("hamburger");
    const icon = hamburger.querySelector("i");

    // Remove the "show" class to hide the menu
    navLinks.classList.remove("show");

    // Switch icon back to bars
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  });
}); 






  // Mobile dropdown toggle
document.querySelectorAll(".dropdown-toggle").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // prevent following link on mobile
    e.preventDefault();

    const parent = this.parentElement;
    parent.classList.toggle("active");
  });
});


// // Fade-in animation on scroll with stagger effect
const faders = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Apply staggered delay based on index
      entry.target.style.transitionDelay = `${index * 0.2}s`;
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, { threshold: 0.2 }); // Trigger when 20% visible

faders.forEach(fader => {
  observer.observe(fader);
});