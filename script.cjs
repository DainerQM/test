document.addEventListener('DOMContentLoaded', function() {s
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const comprarButtons = document.querySelectorAll('.comprar-button');
    comprarButtons.forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#FF8C00';
        });
        button.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#FFA500';
        });
    });

    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
});