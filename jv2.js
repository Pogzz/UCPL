let slideIndex = 1; // Starting slide

// Show the current slide
function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    if (index > slides.length) { slideIndex = 1 }
    if (index < 1) { slideIndex = slides.length }

    // Hide all slides
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        dots[i].classList.remove('active');
    });

    // Show the selected slide
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

// Move to the next or previous slide
function moveSlide(n) {
    showSlide(slideIndex += n);
}

// Set the current slide based on the dot clicked
function currentSlide(n) {
    showSlide(slideIndex = n);
}

// Initialize the carousel by showing the first slide
showSlide(slideIndex);



  // You can dynamically update the scores by modifying the innerHTML of the relevant score spans
  function updateScore(team, newScore) {
    const teamScores = document.querySelectorAll('.team');
    teamScores.forEach((teamScore) => {
        const teamName = teamScore.querySelector('.team-name').innerText;
        if (teamName === team) {
            teamScore.querySelector('.score').innerText = newScore;
        }
    });
}

// Example: Update Team A's score after a certain time
setTimeout(() => {
    updateScore("Team A", 80);
}, 5000);

setTimeout(() => {
    updateScore("Team B", 79);
}, 8000);