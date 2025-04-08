// Smooth Scrolling für Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formular-Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Hier können Sie später die Formularverarbeitung implementieren
        alert('Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen melden.');
        contactForm.reset();
    });
}

// Animation für Service Cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Mobile Navigation Toggle
const createMobileNav = () => {
    const nav = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    
    // Erstelle Hamburger Button
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '☰';
    
    // Füge Button zur Navigation hinzu
    nav.insertBefore(hamburger, navLinks);
    
    // Toggle Mobile Navigation
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
};

// Initialisiere Mobile Navigation
if (window.innerWidth <= 768) {
    createMobileNav();
}

// Resize Handler
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        createMobileNav();
    }
}); 