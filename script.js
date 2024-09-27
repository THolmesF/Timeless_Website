//Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    //Log a message to the console
    console.log('JavaScript is working!');
});

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Adjust for continuous transition
    if (currentSlide === totalSlides - 2 && direction === 1) {
        slides.style.transition = 'none';
        slides.style.transform = `translateX(0%)`;
        currentSlide = 0;
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out';
            slides.style.transform = `translateX(-${currentSlide * 50}%)`;
        }, 50);
    } else if (currentSlide === 0 && direction === -1) {
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-${(totalSlides - 2) * 50}%)`;
        currentSlide = totalSlides - 2;
        setTimeout(() => {
            slides.style.transition = 'transform 0.5s ease-in-out';
            slides.style.transform = `translateX(-${currentSlide * 50}%)`;
        }, 50);
    } else {
        slides.style.transform = `translateX(-${currentSlide * 50}%)`;
    }
}
