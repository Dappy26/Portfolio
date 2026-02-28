// SLIDESHOW FUNCTIONS
let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}

// Initialize slideshow
showSlides(slideIndex);

// CONTACT FORM FUNCTIONS
function openForm() {
    const form = document.getElementById("myForm");
    form.classList.add("show");
}

function closeForm() {
    const form = document.getElementById("myForm");
    form.classList.remove("show");
}

// Close form when clicking outside
window.addEventListener('click', function(event) {
    const form = document.getElementById("myForm");
    if (event.target === form) {
        closeForm();
    }
});

// Function to open lightbox
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxText = document.getElementById('lightbox-text');
    
    // Set the image source
    lightboxImg.src = element.src;
    lightboxImg.alt = element.alt;
    
    // Set the text based on which image was clicked
    const alt = element.alt.toLowerCase();
    if (alt.includes('github')) {
        lightboxText.textContent = 'GitHub - Version Control & Project Hosting\n\nVisit my GitHub profile to see all my coding projects, repositories, and contributions. I regularly update my projects with new features and improvements.';
    } else if (alt.includes('contact')) {
        lightboxText.textContent = 'Get In Touch\n\nHave a question or want to work together? Feel free to reach out using the contact form. I\'d love to hear from you!';
    } else if (alt.includes('typing')) {
        lightboxText.textContent = 'Software Development\n\nI am passionate about creating efficient, clean, and user-focused applications. Every project is an opportunity to solve real-world problems.';
    } else {
        lightboxText.textContent = 'Portfolio Project';
    }
    
    // Show the lightbox
    lightbox.classList.add('show');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Function to close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
    
    // Allow body scroll
    document.body.style.overflow = 'auto';
}

// Close lightbox when clicking outside the content
window.addEventListener('click', function(event) {
    const lightbox = document.getElementById('lightbox');
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeLightbox();
    }
});