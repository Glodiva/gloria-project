document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("header, .hero-content, .hero-image, .stats, .service-items, .chefs-items, .specialties, .search, .doctor-section, .urgent-care-section, .testimonials-section, .register-section, .footer-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Unobserve after showing
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});