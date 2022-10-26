const slides = document.querySelectorAll(".carousel-item");
const nextBtn = document.querySelector(".carousel-button-next");
const prevBtn = document.querySelector(".carousel-button-prev");
let idx = 0;

function removeEverySlide() {
    for( let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
    }
}

function moveToNextSlide() {
    removeEverySlide();
    if (idx === slides.length - 1) {
        idx = 0;
    }else {
        idx++;
    }
    slides[idx].classList.add('carousel-item-visible');
}

function moveToPrevSlide() {
    removeEverySlide();
    if (idx === 0) {
        idx = slides.length - 1;
    }else {
        idx--;
    }
    slides[idx].classList.add('carousel-item-visible');
}

prevBtn.addEventListener('click', moveToPrevSlide);
nextBtn.addEventListener('click', moveToNextSlide);