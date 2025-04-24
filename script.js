// Анимация шапки при скролле
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Анимация появления элементов при скролле
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Добавляем классы для анимации
document.addEventListener('DOMContentLoaded', () => {
    // Добавляем класс fade-in ко всем карточкам и секциям
    const elements = document.querySelectorAll('.feature-card, .benefit-item, .partner-card, section h2, .video-wrapper');
    elements.forEach(element => {
        element.classList.add('fade-in');
        observer.observe(element);
    });

    // Плавный скролл для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 