document.addEventListener("DOMContentLoaded", () => {
    // Load Header
    const headerElement = document.getElementById("header");
    if (headerElement) {
        fetch("/assets/components/header.html")
            .then((response) => response.text())
            .then((html) => {
                headerElement.innerHTML = html;

                // Highlight active navigation link
                const navLinks = document.querySelectorAll(".nav-link");
                navLinks.forEach((link) => {
                    if (link.href === window.location.href) {
                        link.classList.add("font-bold", "text-[#DF8B3D]");
                        link.classList.remove("font-semibold"); // Remove default weight
                        const indicator = link.querySelector(".indicator");
                        if (indicator) indicator.classList.remove("hidden");
                    } else {
                        link.classList.add("font-semibold"); // Default weight for inactive links
                        link.classList.remove("font-bold", "text-[#DF8B3D]");
                        const indicator = link.querySelector(".indicator");
                        if (indicator) indicator.classList.add("hidden");
                    }
                });
            })
            .catch((error) => console.error("Error loading header:", error));
    }
     // Load Footer
     const footerElement = document.getElementById("footer");
     if (footerElement) {
         fetch("/assets/components/footer.html")
             .then((response) => response.text())
             .then((html) => {
                 footerElement.innerHTML = html;
                 // Optional: Add footer-specific JS logic here
             })
             .catch((error) => console.error("Error loading footer:", error));
     }
});


document.addEventListener("DOMContentLoaded", () => {
    const sliderWrapper = document.querySelector(".slider-wrapper");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    let currentIndex = 0;
    const slideWidth = slides[0].offsetWidth + 20; // Include margin if any
    const totalSlides = slides.length;

    // Function to update the slider position
    const updateSlider = () => {
        sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    };

    // Go to the next slide
    nextBtn.addEventListener("click", () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex += 1;
            updateSlider();
        }
    });

    // Go to the previous slide
    prevBtn.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex -= 1;
            updateSlider();
        }
    });

    // Make the slider responsive by recalculating slideWidth on window resize
    window.addEventListener("resize", () => {
        const updatedSlideWidth = slides[0].offsetWidth + 20;
        sliderWrapper.style.transform = `translateX(-${currentIndex * updatedSlideWidth}px)`;
    });
});
