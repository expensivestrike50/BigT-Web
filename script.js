document.addEventListener('DOMContentLoaded', () => {

  // =========================================
  // 1. Mobile Nav Toggle (Kept yours, added safety)
  // =========================================
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      
      // Optional: Animate hamburger lines based on your CSS
      const spans = navToggle.querySelectorAll('span');
      if (navLinks.classList.contains('open')) {
        // Simple cross animation if you want it
        // spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        // spans[1].style.opacity = '0';
        // spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
      } else {
        // spans.forEach(span => span.style.transform = 'none');
        // spans[1].style.opacity = '1';
      }
    });

    // Close menu when a link is clicked
    navLinks.addEventListener("click", (event) => {
      if (event.target.tagName.toLowerCase() === "a") {
        navLinks.classList.remove("open");
      }
    });
  }

  // =========================================
  // 2. Smooth Scroll (Kept yours)
  // =========================================
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.length > 1) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          // Offset for fixed header
          const headerOffset = 80; 
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // =========================================
  // 3. Footer Year (Kept yours)
  // =========================================
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // =========================================
  // 4. Conference Slider (REWRITTEN for your CSS)
  // =========================================
  const slider = document.querySelector('.conf-slider');

  if (slider) {
    // A. Inject the Wrapper and Button 
    // (Your HTML lacks them, but your CSS needs them)
    const wrapper = document.createElement('div');
    wrapper.classList.add('conf-wrapper');
    
    // Move slider inside wrapper
    slider.parentNode.insertBefore(wrapper, slider);
    wrapper.appendChild(slider);

    // Create Next Button
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('conf-next-btn');
    nextBtn.innerHTML = '&#10095;'; // Arrow symbol
    nextBtn.setAttribute('aria-label', 'Next Slide');
    wrapper.appendChild(nextBtn);

    // B. Scroll Logic (Matches your CSS Scroll Snap)
    nextBtn.addEventListener('click', () => {
      const slideWidth = slider.clientWidth;
      const currentScroll = slider.scrollLeft;
      const maxScroll = slider.scrollWidth - slider.clientWidth;

      // Check if we are at the end
      if (currentScroll >= maxScroll - 10) {
        // Loop back to start
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Scroll right by one slide
        slider.scrollBy({ left: slideWidth, behavior: 'smooth' });
      }
    });
  }

});