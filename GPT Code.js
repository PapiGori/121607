document.addEventListener("DOMContentLoaded", () => {
    console.log("Happy Birthday Page Loaded!");

    const scrollTexts = document.querySelectorAll(".scroll-text");

    const handleScroll = () => {
        const windowHeight = window.innerHeight;

        scrollTexts.forEach((text) => {
            const textTop = text.getBoundingClientRect().top;
            const fadeStart = windowHeight * 0.8; // Start fading in when 80% down the viewport
            const fadeEnd = windowHeight * 0.2; // Fully fade out when 20% up the viewport

            if (textTop < fadeStart && textTop > fadeEnd) {
                // Fade in effect
                text.style.opacity = 1;
                text.style.transform = "translateY(0)";
            } else {
                // Fade out effect
                text.style.opacity = 0;
                text.style.transform = "translateY(50px)";
            }
        });
    };

    // Debounce function to limit scroll event firing frequency
    let debounceTimer;
    const debounce = (func, delay) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(func, delay);
    };

    window.addEventListener("scroll", () => debounce(handleScroll, 10));
    handleScroll(); // Trigger on page load to check initial visibility
    
    let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
        });
        ticking = true;
    }
});




});
