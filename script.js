document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');

    // Initialize the carousels
    showSlide(currentIndex);
    showReviewSlide(currentIndex2);
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

let currentIndex2 = 0;

// Function to show a specific review slide based on the index
function showReviewSlide(index) {
    const slides = document.querySelectorAll('.review-item');
    const totalSlides = slides.length;

    // Handle index bounds
    if (index >= totalSlides) {
        currentIndex2 = 0;
    } else if (index < 0) {
        currentIndex2 = totalSlides - 1;
    } else {
        currentIndex2 = index;
    }

    // Calculate the offset for the translation
    const offset = -currentIndex2 * 100;
    // Apply the translation to the review container
    document.querySelector('.review').style.transform = `translateX(${offset}%)`;
}

// Function to show the next review slide
function nextReviewSlide() {
    showReviewSlide(currentIndex2 + 1);
}

// Function to show the previous review slide
function prevReviewSlide() {
    showReviewSlide(currentIndex2 - 1);
}
