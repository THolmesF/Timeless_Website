document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');

    // Initialize the carousels
    showSlide(currentIndex);
    showReviewSlide(currentIndex2);
});


//document.addEventListener('DOMContentLoaded', () => {
    // Show the popup after 5 seconds
 //   setTimeout(() => {
   //     document.getElementById('preorder').style.display = 'flex';
    //}, 5000);

    // Close the popup when the close button is clicked
    //document.querySelector('.preorder-btn').addEventListener('click', () => {
    //    document.getElementById('preorder').style.display = 'none';
    //});

    // Handle form submission
    //document.getElementById('preorderForm').addEventListener('preorder', (event) => {
      //  event.preventDefault();
        //alert('Thank you for ordering!');
        //document.getElementById('preorder').style.display = 'none';
    //});
// });

//temporary storage
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('subscriptionForm').addEventListener('submit', (event) => {
        event.preventDefault();
        let email = document.getElementById('email').value;

        // Save email to local storage
        localStorage.setItem('subscriberEmail', email);
        alert('Thank you for subscribing!');

        document.getElementById('popup').style.display = 'none';
    });
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

// Ensure the script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the review form
    document.getElementById('reviewForm').addEventListener('submit', function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the reviewer's name and review text
        let name = document.getElementById('name').value;
        let review = document.getElementById('review').value;

        // Create a new review block
        let reviewBlock = document.createElement('div');
        reviewBlock.className = 'review';
        // Use backticks for template literals
        reviewBlock.innerHTML = `<h3>${name}</h3><p>${review}</p>`;

        // Append the new review to the reviews container
        document.getElementById('reviews').appendChild(reviewBlock);

        // Clear the form inputs
        document.getElementById('name').value = '';
        document.getElementById('review').value = '';
    });
});

