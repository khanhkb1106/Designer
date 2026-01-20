// Tab switching functionality
function switchTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Add active class to clicked button
    event.target.classList.add('active');
}

// Hamburger menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            hamburger.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.style.display = 'none';
                hamburger.classList.remove('active');
            });
        });
    }

    // Scroll animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideIn 0.8s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all category cards and other elements
    document.querySelectorAll('.category-card').forEach(card => {
        observer.observe(card);
    });

    document.querySelectorAll('.podcast-card').forEach(card => {
        observer.observe(card);
    });

    document.querySelectorAll('.content-item').forEach(item => {
        observer.observe(item);
    });

    document.querySelectorAll('.skill-category').forEach(item => {
        observer.observe(item);
    });

    document.querySelectorAll('.education-card').forEach(item => {
        observer.observe(item);
    });

    document.querySelectorAll('.contact-info').forEach(item => {
        observer.observe(item);
    });
});

// Smooth scroll behavior for anchor links
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

// CTA Button functionality
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const categoriesSection = document.querySelector('#categories');
            if (categoriesSection) {
                categoriesSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Add scroll effect to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const heroContent = document.querySelector('.hero-content');
    const scrollPosition = window.scrollY;
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    }
});

// Counter animation for numbers (if needed)
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Add animation to elements on page load
window.addEventListener('load', function() {
    // Add a delay to stagger animations
    const elements = document.querySelectorAll('.category-card, .podcast-card');
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.1}s`;
    });
});

// Interactive hover effects
document.addEventListener('DOMContentLoaded', function() {
    // Enhanced hover effects for cards
    const cards = document.querySelectorAll('.category-card, .podcast-card, .contact-info');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = '';
            }, 10);
        });
    });
});

// Podcast navigation - when clicking podcast button
document.addEventListener('DOMContentLoaded', function() {
    const podcastButtons = document.querySelectorAll('.podcast-button');
    podcastButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            if (href && href.includes('podcast.html')) {
                window.location.href = href;
            }
        });
    });
});

// Mobile menu responsive behavior
function handleResponsive() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    if (window.innerWidth <= 768) {
        if (navLinks && hamburger) {
            navLinks.style.display = 'none';
        }
    } else {
        if (navLinks && hamburger) {
            navLinks.style.display = 'flex';
        }
    }
}

window.addEventListener('resize', handleResponsive);
window.addEventListener('load', handleResponsive);

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-button, .podcast-button, .card-link');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Log that script is loaded
console.log('Website loaded successfully!');
