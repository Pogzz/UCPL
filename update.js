
let currentIndex = 0;
const slides = document.querySelectorAll('.ad-slider-item');
const totalSlides = slides.length;

// Function to move to the next or previous slide
function moveSlide(step) {
    currentIndex += step;

    // Loop around the slides
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSlider();
}

// Function to go directly to a specific slide (dot navigation)
function currentSlide(index) {
    currentIndex = index - 1; // Adjust for zero-based index
    updateSlider();
}

// Function to update the slider position and active dot
function updateSlider() {
    const dots = document.querySelectorAll('.dot');
    
    // Move slider to current slide
    const offset = -currentIndex * 100; // Shift to the current slide
    document.querySelector('.ad-slider').style.transform = `translateX(${offset}%)`;

    // Highlight the active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Initialize the first dot as active and start automatic movement
document.addEventListener('DOMContentLoaded', () => {
    updateSlider();
    
    // Automatically move to the next slide every 2 seconds
    setInterval(() => {
        moveSlide(1); // Move to the next slide every 2 seconds
    }, 5000); // 2000 milliseconds = 2 seconds
});

