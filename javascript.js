
// selle osa on koostanud ja kommenteerinud ChatGPT
const slidingText = document.getElementById('slidingText');

// Määra algpositsioon
let position = window.innerWidth; // Alustab just väljaspool paremat serva
slidingText.style.left = position + 'px';

// Animeerib teksti
function slideText() {
    position -= 3; // Liigub vasakule 3px võrra
    slidingText.style.left = position + 'px';

    // Taastab positsiooni, kui tekst on täielikult ekraanilt väljas
    if (position + slidingText.offsetWidth < 10) {
        position = window.innerWidth; // Taastab algpositsiooni väljaspool paremat serva
    }

    // Jätkab animatsiooni
    requestAnimationFrame(slideText);
}

// Alustab animatsiooni
slideText();

function toggleInfo(element) {
    var info = element.querySelector('.more-info');
    if (info.classList.contains('expanded')) {
        info.classList.remove('expanded');
        element.style.maxHeight = '150px'; // Kohandab vastavalt algsele kasti kõrgusele
    } else {
        info.classList.add('expanded');
        element.style.maxHeight = element.scrollHeight + 'px';
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Järgmise/eelmise slaidi juhtimine
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Pisipiltide juhtimine
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
