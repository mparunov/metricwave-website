/* ===================================
   MetricWave - JavaScript
   =================================== */

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');

            // Animate hamburger to X
            const spans = mobileToggle.querySelectorAll('span');
            if (mobileToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');

                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnToggle = mobileToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');

            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Only prevent default for same-page anchors
        if (href.startsWith('#') && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
    } else {
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.8)';
    }

    lastScroll = currentScroll;
});

// Animation on scroll (fade in elements)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .story-card, .expertise-card, .process-step, .expect-card, .faq-item, .philosophy-point');

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Tally form responsiveness
window.addEventListener('message', function(e) {
    if (typeof e.data === 'string') {
        try {
            const data = JSON.parse(e.data);
            if (data.event === 'Tally.FormLoaded') {
                console.log('Tally form loaded successfully');
            }
        } catch (error) {
            // Not a Tally message, ignore
        }
    }
});

// Logo Carousel Drag Control
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.logos-carousel');
    if (!carousel) return;

    let isDragging = false;
    let startX;
    let scrollSpeed = 1; // Default speed multiplier
    let animationId;
    let currentTranslate = 0;
    let previousTranslate = 0;
    let lastDragX = 0;
    let velocity = 0;

    // Disable default CSS animation
    carousel.style.animation = 'none';

    // Custom animation loop
    function animate() {
        // Apply velocity to translation
        currentTranslate += velocity;

        // Get the width of half the carousel (since we duplicated logos)
        const halfWidth = carousel.scrollWidth / 2;

        // Loop seamlessly
        if (Math.abs(currentTranslate) >= halfWidth) {
            currentTranslate = 0;
            previousTranslate = 0;
        } else if (currentTranslate > 0) {
            currentTranslate = -halfWidth + currentTranslate;
            previousTranslate = currentTranslate;
        }

        carousel.style.transform = `translateX(${currentTranslate}px)`;
        animationId = requestAnimationFrame(animate);
    }

    // Start with default scroll speed (negative for left-to-right)
    velocity = -0.5;
    animate();

    // Mouse events
    carousel.addEventListener('mousedown', startDrag);
    carousel.addEventListener('mousemove', drag);
    carousel.addEventListener('mouseup', endDrag);
    carousel.addEventListener('mouseleave', endDrag);

    // Touch events for mobile
    carousel.addEventListener('touchstart', startDrag);
    carousel.addEventListener('touchmove', drag);
    carousel.addEventListener('touchend', endDrag);

    function startDrag(e) {
        isDragging = true;
        startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        lastDragX = startX;
        previousTranslate = currentTranslate;
        carousel.style.cursor = 'grabbing';

        // Stop any existing velocity
        velocity = 0;
    }

    function drag(e) {
        if (!isDragging) return;
        e.preventDefault();

        const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
        const diff = currentX - lastDragX;

        // Update position with reduced sensitivity
        currentTranslate = previousTranslate + (currentX - startX) * 0.3;

        // Calculate velocity based on drag speed (scaled for smoother control)
        velocity = diff * 0.02;

        lastDragX = currentX;
        previousTranslate = currentTranslate;
    }

    function endDrag() {
        if (!isDragging) return;
        isDragging = false;
        carousel.style.cursor = 'grab';

        // Apply momentum based on final velocity
        // Clamp velocity to reasonable range
        velocity = Math.max(-3, Math.min(3, velocity));

        // Gradually return to default scroll speed if velocity is low
        let returnToDefault = setInterval(() => {
            if (Math.abs(velocity - (-0.5)) < 0.05) {
                velocity = -0.5; // Return to default left-scroll
                clearInterval(returnToDefault);
            } else {
                // Gradually decay velocity toward -0.5
                velocity = velocity * 0.95 + (-0.5) * 0.05;
            }
        }, 50);
    }

    // Prevent image dragging
    const logoImages = carousel.querySelectorAll('img');
    logoImages.forEach(img => {
        img.addEventListener('dragstart', (e) => e.preventDefault());
    });

    // Add cursor style
    carousel.style.cursor = 'grab';
});

// Language Switching
document.addEventListener('DOMContentLoaded', function() {
    const langBtn = document.querySelector('.lang-btn');
    const langDropdown = document.querySelector('.lang-dropdown');
    const currentLangSpan = document.querySelector('.current-lang');
    const langButtons = document.querySelectorAll('[data-lang]');

    // Get saved language or default to 'en'
    let currentLang = localStorage.getItem('language') || 'en';

    // Apply language on page load
    setLanguage(currentLang);

    // Toggle dropdown
    if (langBtn) {
        langBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (langDropdown && !e.target.closest('.language-switcher')) {
            langDropdown.classList.remove('active');
        }
    });

    // Language selection
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            langDropdown.classList.remove('active');

            // Update active state
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('language', lang);

        // Update current language display
        const langNames = {
            'en': 'EN',
            'fr': 'FR',
            'nl': 'NL',
            'ka': 'KA',
            'ru': 'RU'
        };

        const langFlags = {
            'en': 'Logos_Languages/en_logo.png',
            'fr': 'Logos_Languages/fr_logo.png',
            'nl': 'Logos_Languages/nd_logo.png',
            'ka': 'Logos_Languages/ge_logo.png',
            'ru': 'Logos_Languages/ru_logo.png'
        };

        if (currentLangSpan) {
            currentLangSpan.textContent = langNames[lang];
        }

        // Update flag image
        const currentFlag = document.getElementById('current-flag');
        if (currentFlag) {
            currentFlag.src = langFlags[lang];
            currentFlag.alt = langNames[lang];
        }

        // Update HTML lang attribute
        document.documentElement.lang = lang;

        // Translate all elements with data-i18n attribute
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getNestedTranslation(translations[lang], key);
            if (translation) {
                element.textContent = translation;
            }
        });

        // Update active language button
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    function getNestedTranslation(obj, path) {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    }
});

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitButton = contactForm.querySelector('.form-submit');
        const buttonText = submitButton.querySelector('.button-text');
        const buttonLoader = submitButton.querySelector('.button-loader');
        const formStatus = document.getElementById('formStatus');

        // Disable button and show loader
        submitButton.disabled = true;
        buttonText.style.display = 'none';
        buttonLoader.style.display = 'inline-flex';
        formStatus.textContent = '';
        formStatus.className = 'form-status';

        // Collect form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            company: document.getElementById('company').value,
            companySize: document.getElementById('companySize').value,
            service: document.getElementById('service').value,
            budget: document.getElementById('budget').value,
            timeline: document.getElementById('timeline').value,
            message: document.getElementById('message').value,
            newsletter: document.getElementById('newsletter').checked
        };

        try {
            // Netlify Forms uses FormData, not JSON
            const form = e.target;
            const netlifyFormData = new FormData(form);

            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(netlifyFormData).toString()
            });

            const result = { success: response.ok };

            if (result.success) {
                // Success
                formStatus.textContent = 'Thank you for your message! We\'ll get back to you within 24 hours.';
                formStatus.className = 'form-status success';
                contactForm.reset();

                // Scroll to success message
                formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                // Error
                formStatus.textContent = 'Failed to send message. Please try again or email us directly at mikheil@metricwave.net';
                formStatus.className = 'form-status error';
            }
        } catch (error) {
            // Network error
            formStatus.textContent = 'Connection error. Please try again or email us directly at mikheil@metricwave.net';
            formStatus.className = 'form-status error';
        } finally {
            // Re-enable button and hide loader
            submitButton.disabled = false;
            buttonText.style.display = 'inline';
            buttonLoader.style.display = 'none';
        }
    });

    // Real-time validation
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.setCustomValidity('Please enter a valid email address');
                this.reportValidity();
            } else {
                this.setCustomValidity('');
            }
        });
    }

    // Character counter for message
    const messageInput = document.getElementById('message');
    if (messageInput) {
        const charCounter = document.createElement('div');
        charCounter.className = 'char-counter';
        charCounter.textContent = '0 characters';
        messageInput.parentNode.appendChild(charCounter);

        messageInput.addEventListener('input', function() {
            const length = this.value.length;
            charCounter.textContent = `${length} character${length !== 1 ? 's' : ''}`;

            if (length > 1000) {
                charCounter.style.color = 'var(--teal-light)';
            } else {
                charCounter.style.color = 'var(--light-gray)';
            }
        });
    }
});
