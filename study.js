const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        entry.target.classList.toggle('animateOnScrollOn', entry.isIntersecting);
    });
}, {
    threshold: 0.25
});

const anmt = document.querySelectorAll('.animateOnScroll')
anmt.forEach((l) => observer.observe(l));
