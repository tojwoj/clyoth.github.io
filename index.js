let currentIndex = 0;
const wrapper = document.querySelector('.wrapper');
const images = document.querySelectorAll('.wrapper img');
const imageWidth = images[0].offsetWidth;

function slideImages() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
        wrapper.style.transition = 'none';
        wrapper.style.transform = `translateX(0)`;
        setTimeout(() => {
            wrapper.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
    }
    wrapper.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

setInterval(slideImages, 3000);