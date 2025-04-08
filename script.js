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

// Passwort-Sichtbarkeit umschalten
document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function() {
        const input = this.previousElementSibling;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        this.querySelector('i').classList.toggle('fa-eye');
        this.querySelector('i').classList.toggle('fa-eye-slash');
    });
});

// Login-Formular
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const remember = document.getElementById('remember').checked;

        // Hier würde normalerweise die API-Anfrage erfolgen
        console.log('Login-Versuch:', { email, password, remember });
        
        // Beispiel für erfolgreiche Anmeldung
        alert('Anmeldung erfolgreich!');
        window.location.href = 'index.html';
    });
}

// Registrierungs-Formular
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const terms = document.getElementById('terms').checked;

        // Passwort-Überprüfung
        if (password !== confirmPassword) {
            alert('Die Passwörter stimmen nicht überein!');
            return;
        }

        // AGB-Überprüfung
        if (!terms) {
            alert('Bitte akzeptieren Sie die AGB und Datenschutzbestimmungen.');
            return;
        }

        // Hier würde normalerweise die API-Anfrage erfolgen
        console.log('Registrierungs-Versuch:', { name, email, password, terms });
        
        // Beispiel für erfolgreiche Registrierung
        alert('Registrierung erfolgreich! Sie können sich jetzt anmelden.');
        window.location.href = 'login.html';
    });
}

// Social Login Buttons
document.querySelectorAll('.social-btn').forEach(button => {
    button.addEventListener('click', function() {
        const provider = this.classList.contains('google') ? 'Google' : 'Apple';
        console.log(`${provider}-Login initiiert`);
        // Hier würde normalerweise die OAuth-Anfrage erfolgen
        alert(`${provider}-Login wird vorbereitet...`);
    });
});

// Dashboard Navigation
document.querySelectorAll('.dashboard-nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        
        // Aktiven Link aktualisieren
        document.querySelectorAll('.dashboard-nav a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
        
        // Aktive Sektion aktualisieren
        document.querySelectorAll('.dashboard-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetId).classList.add('active');
    });
});

// Fortschrittskreise initialisieren
document.querySelectorAll('.progress-circle').forEach(circle => {
    const progress = circle.getAttribute('data-progress');
    const path = circle.querySelector('path');
    path.style.setProperty('--progress', progress);
});

// Quick Actions
document.querySelectorAll('.action-btn').forEach(button => {
    button.addEventListener('click', function() {
        const action = this.querySelector('span').textContent;
        console.log(`${action} wurde angeklickt`);
        // Hier würde die entsprechende Aktion ausgeführt werden
    });
});

// Termin-Details
document.querySelectorAll('.appointment-item .btn').forEach(button => {
    button.addEventListener('click', function() {
        const appointment = this.closest('.appointment-item');
        const title = appointment.querySelector('h4').textContent;
        const time = appointment.querySelector('.appointment-time span').textContent;
        console.log(`Details für Termin: ${title} am ${time}`);
        // Hier würde ein Modal oder eine neue Seite mit den Details geöffnet
    });
});

// Benutzer-Menü
const userMenuBtn = document.querySelector('.user-menu-btn');
const userDropdown = document.querySelector('.user-dropdown');

if (userMenuBtn && userDropdown) {
    userMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        userDropdown.style.display = userDropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(e) {
        if (!userDropdown.contains(e.target) && !userMenuBtn.contains(e.target)) {
            userDropdown.style.display = 'none';
        }
    });
}

// Aktivitätsliste Zeitformatierung
document.querySelectorAll('.activity-time').forEach(time => {
    const timestamp = time.getAttribute('data-time');
    if (timestamp) {
        const date = new Date(timestamp);
        const now = new Date();
        const diff = now - date;
        
        let timeString;
        if (diff < 3600000) { // weniger als 1 Stunde
            const minutes = Math.floor(diff / 60000);
            timeString = `Vor ${minutes} Minuten`;
        } else if (diff < 86400000) { // weniger als 1 Tag
            const hours = Math.floor(diff / 3600000);
            timeString = `Vor ${hours} Stunden`;
        } else {
            const days = Math.floor(diff / 86400000);
            timeString = `Vor ${days} Tagen`;
        }
        
        time.textContent = timeString;
    }
}); 