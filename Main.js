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

  
// Image slider functionality

const slides = document.querySelectorAll('.slide');
let index = 0;

setInterval(() => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}, 5000); // Change image every 5 seconds

// 

// Fade-in delay for each stat
document.querySelectorAll('.stat').forEach((el, index) => {
  el.style.animationDelay = `${index * 0.3}s`;
});



// 
 function initSlider(slider) {
      const track = slider.querySelector(".image-slider-track, .image-slider-track1");
      const slides = Array.from(slider.querySelectorAll(".image-slide,.image-slide1"));
      const prevBtn = slider.querySelector(".image-slider-btn.prev");
      const nextBtn = slider.querySelector(".image-slider-btn.next");
      const dotsContainer = slider.querySelector(".slider-dots");

      let currentSlide = 0;
      let slideInterval;

      // Create dots
      slides.forEach((_, i) => {
        const dot = document.createElement("button");
        if (i === 0) dot.classList.add("active");
        dotsContainer.appendChild(dot);
        dot.addEventListener("click", () => {
          currentSlide = i;
          updateSlider();
          resetInterval();
        });
      });
      const dots = Array.from(dotsContainer.querySelectorAll("button"));

      function getVisibleSlides() {
        return window.innerWidth <= 768 ? 1 : 3;
      }

      function updateSlider() {
        const slideWidth = slides[0].getBoundingClientRect().width;
        track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

        dots.forEach((dot, i) =>
          dot.classList.toggle("active", i === currentSlide)
        );
      }

      function moveNext() {
        const visible = getVisibleSlides();
        if (currentSlide >= slides.length - visible) {
          currentSlide = 0;
        } else {
          currentSlide++;
        }
        updateSlider();
      }

      function movePrev() {
        const visible = getVisibleSlides();
        if (currentSlide <= 0) {
          currentSlide = slides.length - visible;
        } else {
          currentSlide--;
        }
        updateSlider();
      }

      nextBtn.addEventListener("click", () => {
        moveNext();
        resetInterval();
      });

      prevBtn.addEventListener("click", () => {
        movePrev();
        resetInterval();
      });

      function startInterval() {
        slideInterval = setInterval(moveNext, 5000);
      }

      function resetInterval() {
        clearInterval(slideInterval);
        startInterval();
      }

      window.addEventListener("resize", updateSlider);

      updateSlider();
      startInterval();
    }

    // Initialize all sliders on page
    document.querySelectorAll(".image-slider,.image-slider1").forEach(initSlider);



    // // Fade-in animation on scroll
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');   // Add the show class
      observer.unobserve(entry.target);     // Animate only once
    }
  });
}, { threshold: 0.2 }); // 20% of element visible

faders.forEach(fader => {
  observer.observe(fader);
});
