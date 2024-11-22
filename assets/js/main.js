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
});
