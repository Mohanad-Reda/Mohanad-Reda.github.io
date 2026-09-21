const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (!prefersReducedMotion) {
    const revealItems = document.querySelectorAll(
        ".feature-project, " +
        ".small-projects article, " +
        ".about-grid, " +
        ".skills-grid, " +
        ".timeline > div"
    );

    revealItems.forEach((item) => {
        item.classList.add("reveal");
    });

    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12
        }
    );

    revealItems.forEach((item) => {
        revealObserver.observe(item);
    });
}
