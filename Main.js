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




  // Mobile dropdown toggle
document.querySelectorAll(".dropdown-toggle").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    // prevent following link on mobile
    e.preventDefault();

    const parent = this.parentElement;
    parent.classList.toggle("active");
  });
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



// Fade-in animation on scroll with stagger effect
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



// Counter animation for impact numbers
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".impact-number");
  const speed = 200; // lower = faster

  const animateCounter = (counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText.replace(/,/g, "");

      // Increment step
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment).toLocaleString();
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target.toLocaleString(); // final number
      }
    };
    updateCount();
  };

  // Trigger animation only when section is visible
  const section = document.querySelector(".impact-section");
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        counters.forEach((counter) => animateCounter(counter));
        observer.unobserve(section); // Run only once
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(section);
});


// 

document.addEventListener('DOMContentLoaded', function() {
  const impact = document.querySelector('.impact-section');
  if (!impact) return;

  const bg = document.getElementById('impact-fixed-bg');
  if (!bg) return;

  // Optional: sync the image (if you want different images per section)
  // bg.style.backgroundImage = "url('../images/hero1.jpeg')";

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) bg.classList.add('visible');
      else bg.classList.remove('visible');
    });
  }, { threshold: 0.1 });

  io.observe(impact);
});

// 

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

// Articles toggle

 // Accordion Toggle
    document.querySelectorAll('.article-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
      });
    });
