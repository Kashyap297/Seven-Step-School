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
    const slideWidth = slides[0].offsetWidth + 190; // Include margin if any
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
        const updatedSlideWidth = slides[0].offsetWidth + 190;
        sliderWrapper.style.transform = `translateX(-${currentIndex * updatedSlideWidth}px)`;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-btn");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Remove active classes
            tabs.forEach((btn) => {
                btn.classList.remove("bg-[#0284CE]", "text-white");
                btn.classList.add("text-[#7C7C7C]");
            });

            tabPanes.forEach((pane) => pane.classList.add("hidden"));

            // Add active classes
            tab.classList.add("bg-[#0284CE]", "text-white");
            const target = tab.getAttribute("data-tab");
            document.getElementById(target).classList.remove("hidden");
        });
    });

    // Set the first tab as active by default
    tabs[0].click();
});

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-btns");
    const tabPanes = document.querySelectorAll(".tab-panel");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Remove active classes
            tabs.forEach((btn) => {
                btn.classList.remove("bg-[#0284CE]", "text-white");
                btn.classList.add("text-[#7C7C7C]");
            });

            tabPanes.forEach((pane) => pane.classList.add("hidden"));

            // Add active classes
            tab.classList.add("bg-[#0284CE]", "text-white");
            const target = tab.getAttribute("data-tabs");
            document.getElementById(target).classList.remove("hidden");
        });
    });

    // Set the first tab as active by default
    tabs[0].click();
});


function toggleSidebar() {
    console.log("first");
    const sidebar = document.getElementById("offcanvas-menu"); // Use querySelector for a single element
    if (sidebar) {
        sidebar.classList.toggle("translate-x-full");
    }
}