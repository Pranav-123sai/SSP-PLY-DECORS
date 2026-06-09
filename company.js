/* ===========================
   COMPANY PAGE – company.js
   =========================== */

var currentSlide = 0;
var totalSlides = 4;
var isScrolling = false;

var wrapper = document.getElementById('slidesWrapper');
var dots = document.querySelectorAll('.dot');
var arrowUp = document.getElementById('arrowUp');
var arrowDown = document.getElementById('arrowDown');

// ---- Go to slide ----
function goTo(index) {
    if (index < 0 || index >= totalSlides) return;
    currentSlide = index;
    var slide = document.getElementById('slide-' + index);
    if (slide) {
        slide.scrollIntoView({ behavior: 'smooth' });
    }
    updateDots();
    updateArrows();
}

function nextSlide() { goTo(currentSlide + 1); }
function prevSlide() { goTo(currentSlide - 1); }

// ---- Update dots ----
function updateDots() {
    dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// ---- Update arrows ----
function updateArrows() {
    if (arrowUp) arrowUp.style.opacity = currentSlide === 0 ? '0.3' : '1';
    if (arrowDown) arrowDown.style.opacity = currentSlide === totalSlides - 1 ? '0.3' : '1';
}

// ---- Detect current slide on scroll ----
wrapper.addEventListener('scroll', function() {
    var scrollTop = wrapper.scrollTop;
    var slideHeight = wrapper.clientHeight;
    var index = Math.round(scrollTop / slideHeight);
    if (index !== currentSlide) {
        currentSlide = index;
        updateDots();
        updateArrows();
    }
});

// ---- Keyboard navigation ----
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); nextSlide(); }
    if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); prevSlide(); }
});

// ---- Init ----
updateDots();
updateArrows();
/* ===========================
   MOBILE MENU
=========================== */

document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (hamburger && mobileMenu) {

        hamburger.addEventListener("click", function () {

            mobileMenu.classList.toggle("active");

        });

        document.addEventListener("click", function (e) {

            if (
                !mobileMenu.contains(e.target) &&
                !hamburger.contains(e.target)
            ) {
                mobileMenu.classList.remove("active");
            }

        });

    }

});
