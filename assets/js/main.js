// Include the common header
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
                        link.classList.add("text-[#DF8B3D]", "font-bold");
                        const indicator = link.querySelector(".indicator");
                        if (indicator) indicator.classList.remove("hidden");
                    } else {
                        link.classList.remove("text-[#DF8B3D]", "font-bold");
                        const indicator = link.querySelector(".indicator");
                        if (indicator) indicator.classList.add("hidden");
                    }
                });
            })
            .catch((error) => console.error("Error loading header:", error));
    }
});
