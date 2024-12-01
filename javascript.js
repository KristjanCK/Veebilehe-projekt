// Valib liugteksti element
const slidingText = document.getElementById('slidingText');

// Määrab algpositsioon
let position = window.innerWidth; // Alustab just väljaspool paremat serva
slidingText.style.left = position + 'px';

// Animeerib teksti
function slideText() {
    position -= 3; // Liigub vasakule 3px võrra
    slidingText.style.left = position + 'px';

    // Lähtestab positsioon, kui tekst on täielikult ekraanilt väljas
    if (position + slidingText.offsetWidth < 10) {
        position = window.innerWidth; // Lähtestab, et alustada just väljaspool paremat serva
    }

    // Jätkake animatsiooni
    requestAnimationFrame(slideText);
}

// Alustab animatsiooni
slideText();
