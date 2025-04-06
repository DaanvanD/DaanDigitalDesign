function animateProgressBars() {
    const bars = document.querySelectorAll(".success");

    bars.forEach(bar => {
        const rect = bar.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            bar.style.width = bar.getAttribute("data-width");
        }
    });
}

window.addEventListener("scroll", animateProgressBars);
window.addEventListener("load", animateProgressBars); // Voert uit bij het laden


const container = document.querySelector(".scroll-container");
    const images = Array.from(document.querySelectorAll(".scroll-container img"));
    
    // Clone de images voor naadloze loop
    images.forEach(img => {
        const clone = img.cloneNode(true);
        container.appendChild(clone);
    });

    let scrollPosition = 0;
    const scrollSpeed = 6; // Pas snelheid aan hier

    function scrollLoop() {
        scrollPosition += scrollSpeed;
        container.style.transform = `translateX(-${scrollPosition}px)`;

        if (scrollPosition >= container.scrollWidth / 2) {
            scrollPosition = 0;
        }

        requestAnimationFrame(scrollLoop);
    }

    scrollLoop();

    