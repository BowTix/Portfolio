// Vitesse video
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-bg-video');
    if (video) {
        video.playbackRate = 0.5;
    }
});

// Slide projets
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, i) => {
        if (i % 2 === 1) card.classList.add('from-left');
    });

    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < triggerBottom) {
                card.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});

// Fade à-propos
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about');

    function revealAboutOnScroll() {
        if (!aboutSection) return;
        const rect = aboutSection.getBoundingClientRect();
        const triggerBottom = window.innerHeight * 0.85;
        if (rect.top < triggerBottom) {
            aboutSection.classList.add('visible');
        }
    }

    window.addEventListener('scroll', revealAboutOnScroll);
    revealAboutOnScroll();
});