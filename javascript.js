
// selle osa on koostanud ja kommenteerinud ChatGPT
const slidingText = document.getElementById('slidingText');

// Set initial position
let position = window.innerWidth; // Start just outside the right edge
slidingText.style.left = position + 'px';

// Animate the text
function slideText() {
    position -= 3; // Move left by 2px
    slidingText.style.left = position + 'px';

    // Reset position when the text is fully off-screen
    if (position + slidingText.offsetWidth < 10) {
        position = window.innerWidth; // Reset to start just outside the right edge
    }

    // Continue animation
    requestAnimationFrame(slideText);
}

// Start the animation
slideText();

function toggleInfo(element) {
    var info = element.querySelector('.more-info');
    if (info.classList.contains('expanded')) {
        info.classList.remove('expanded');
        element.style.maxHeight = '150px'; // Adjust based on your initial box height
    } else {
        info.classList.add('expanded');
        element.style.maxHeight = element.scrollHeight + 'px';
    }
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}