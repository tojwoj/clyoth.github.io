let currentIndex = 0;
const wrapper = document.querySelector('.wrapper');
const images = document.querySelectorAll('.wrapper img');
const imageWidth = images[0].offsetWidth;

function slideImages() {
    currentIndex++;
    wrapper.style.transition = 'transform 0.5s ease-in-out';

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    wrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

setInterval(slideImages, 3000);
