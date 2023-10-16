const slides = document.querySelectorAll(".slide");
const sliderContainer = document.querySelector(".slider-container");
let counter = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
    counter--;
    slideImage();
};

const goNext = () => {
    counter++;
    slideImage();
};

const slideImage = () => {
    if (counter < 0) {
        counter = slides.length - 1;
    } else if (counter >= slides.length) {
        counter = 0;
    }

    sliderContainer.style.transform = `translateX(-${counter * 100}%)`;
};


const startAutoplay = () => {
    interval = setInterval(goNext, 3000); // Change slide every 3 seconds
};

const stopAutoplay = () => {
    clearInterval(interval);
};

startAutoplay();

// Pause autoplay on mouse hover
sliderContainer.addEventListener("mouseover", stopAutoplay);

// Resume autoplay on mouse leave
sliderContainer.addEventListener("mouseout", startAutoplay);