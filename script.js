document.addEventListener('DOMContentLoaded', function() {

    // --- Mobile Navigation Menu Toggle ---
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    // Check if both elements exist to avoid errors
    if (hamburgerMenu && navLinks) {
        // Listen for a click on the hamburger icon
        hamburgerMenu.addEventListener('click', () => {
            // Toggle the 'active' class on the navigation links list
            // This will make the menu appear or disappear based on the CSS
            navLinks.classList.toggle('active');
        });
    }

    // --- Optional: Close Menu When a Link is Clicked ---
    // This improves user experience on mobile devices.
    const allNavLinks = document.querySelectorAll('#nav-links a');

    allNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            // If the mobile menu is open, close it
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // --- Demo Contact Form Submission ---
    const contactForm = document.querySelector('.contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevents the page from reloading
            
            alert('Thank you for your message! This is a demo form. A real form would send an email here.');
            
            contactForm.reset(); // Clears the form fields
        });
    }

});