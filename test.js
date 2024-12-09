let index = 0;

    function moveSlide(step) {
        const slides = document.querySelectorAll('.photo-carousel-item');
        const totalSlides = slides.length;
        index = (index + step + totalSlides) % totalSlides; // Loop back to start
        const carousel = document.getElementById('carousel');
        carousel.style.transform = `translateX(-${index * 100}%)`; // Move carousel
    }

    // Automatic slide transition every 3 seconds
    setInterval(() => {
        moveSlide(1);
    }, 3000);