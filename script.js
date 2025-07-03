document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;
    
    if (name.length < 2) {
        document.getElementById("formMessage").textContent = "Please enter a valid name (minimum 2 characters).";
        document.getElementById("formMessage").style.color = "#dc3545";
        return;
    }
    
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById("formMessage").textContent = "Please enter a valid email address.";
        document.getElementById("formMessage").style.color = "#dc3545";
        return;
    }
    
    if (message.length < 10) {
        document.getElementById("formMessage").textContent = "Message must be at least 10 characters long.";
        document.getElementById("formMessage").style.color = "#dc3545";
        return;
    }
    
    document.getElementById("formMessage").textContent = "Thank you! Your message has been sent.";
    document.getElementById("formMessage").style.color = "#28a745";
    this.reset();
});

document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Load theme preference
window.addEventListener("load", function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("theme-toggle").textContent = "☀️";
    }
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});