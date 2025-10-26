function initializeSlider(sliderId) {
    const sliderContainer = document.getElementById(sliderId);
    if (!sliderContainer) return; // Exit if the container doesn't exist

    const track = sliderContainer.querySelector('.slider-track');
    const slides = sliderContainer.querySelectorAll('.slider-slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    // 1. Create Buttons
    const prevButton = document.createElement('button');
    prevButton.className = 'slider-button slider-button-prev';
    prevButton.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>';

    const nextButton = document.createElement('button');
    nextButton.className = 'slider-button slider-button-next';
    nextButton.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>';

    sliderContainer.appendChild(prevButton);
    sliderContainer.appendChild(nextButton);

    // 2. Create Dots
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'slider-dots';

    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'slider-dot';
        dot.dataset.slide = i;
        dot.addEventListener('click', () => moveToSlide(i));
        dotsContainer.appendChild(dot);
    }
    sliderContainer.appendChild(dotsContainer);

    // 3. Logic to move slide
    function moveToSlide(index) {
        if (index < 0) {
            currentIndex = totalSlides - 1;
        } else if (index >= totalSlides) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.slider-dot');
        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === currentIndex) {
                dot.classList.add('active');
            }
        });
    }

    // 4. Add Button listeners
    prevButton.addEventListener('click', () => moveToSlide(currentIndex - 1));
    nextButton.addEventListener('click', () => moveToSlide(currentIndex + 1));

    // Initial setup
    moveToSlide(0); // Ensure the first slide is visible and dots are set
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all gallery sliders
    initializeSlider('slider-programming');
    initializeSlider('slider-expo');
    initializeSlider('slider-competitions');
});
