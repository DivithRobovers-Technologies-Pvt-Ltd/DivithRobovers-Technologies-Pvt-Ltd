document.addEventListener('DOMContentLoaded', () => {
    const heroSlider = document.getElementById('hero-slider');
    const track = heroSlider.querySelector('.slider-track');
    const slides = heroSlider.querySelectorAll('.slider-slide');
    const dots = heroSlider.querySelectorAll('.slider-dot');
    const prevButton = heroSlider.querySelector('.slider-button-prev');
    const nextButton = heroSlider.querySelector('.slider-button-next');

    let currentIndex = 0;
    const totalSlides = slides.length;

    // Function to update slider position
    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.style.opacity = '1';
            } else {
                dot.style.opacity = '0.6';
            }
        });
    }

    // Function to go to next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }

    // Function to go to previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    }

    // Add event listeners
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // Auto-advance slider
    setInterval(nextSlide, 5000);

    // Initialize
    updateSlider();
});
