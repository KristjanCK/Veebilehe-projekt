
// Select the sliding text element
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