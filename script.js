document.addEventListener("DOMContentLoaded", function() {
    // Fade in the GIF container
    var gifContainer = document.querySelector('.gif-container');
    gifContainer.style.opacity = '1';

    // Fade in the social links
    var socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(function(link) {
        link.style.opacity = '1';
    });

    // Fade in the about section
    var aboutSection = document.querySelector('.about-section');
    aboutSection.style.opacity = '1';
});
