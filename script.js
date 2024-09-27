//Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    //Log a message to the console
    console.log('JavaScript is working!');
});

console.log("Script loaded");

console.log("Script loaded");

// Picture Carousel
let currentIndex = 0;

function showSlide(index) {
    console.log("showSlide called with index:", index);
    const slides = document.querySelectorAll('.carousel-item');
    console.log("Number of slides:", slides.length);
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
    console.log("Current offset:", offset);
}

function nextSlide() {
    console.log("nextSlide called");
    showSlide(currentIndex + 1);
}

function prevSlide() {
    console.log("prevSlide called");
    showSlide(currentIndex - 1);
}

// Initialize the carousel
showSlide(currentIndex);

// Reviews Carousel
let currentIndex2 = 0;

function showReviewSlide(index) {
    console.log("showReviewSlide called with index:", index);
    const slides = document.querySelectorAll('.review-item');
    console.log("Number of review slides:", slides.length);
    if (index >= slides.length) {
        currentIndex2 = 0;
    } else if (index < 0) {
        currentIndex2 = slides.length - 1;
    } else {
        currentIndex2 = index;
    }
    const offset = -currentIndex2 * 100;
    document.querySelector('.review').style.transform = `translateX(${offset}%)`;
    console.log("Current review offset:", offset);
}

function nextReviewSlide() {
    console.log("nextReviewSlide called");
    showReviewSlide(currentIndex2 + 1);
}

function prevReviewSlide() {
    console.log("prevReviewSlide called");
    showReviewSlide(currentIndex2 - 1);
}

// Initialize the carousel
showReviewSlide(currentIndex2);
