/* ===================================================
   MetricWave — script.js
   Single DOMContentLoaded, CSS-class-based animations,
   proper interval cleanup, consolidated event handling.
=================================================== */

/* ─── Theme: apply saved preference immediately (runs before DOMContentLoaded) ─ */
(function () {
    var saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
})();

/* ─── iframe theme sync ─────────────────────────────────────────────────────── */
function syncIframeThemes(theme) {
    var selector = 'iframe.hero-iframe, iframe.hero-iframe--light, iframe.hero-iframe--dark, ' +
                   'iframe.service-hero-iframe, iframe.page-iframe, iframe.schematic-iframe';
    document.querySelectorAll(selector).forEach(function (iframe) {
        try {
            if (iframe.contentDocument && iframe.contentDocument.documentElement) {
                iframe.contentDocument.documentElement.setAttribute('data-theme', theme);
            }
        } catch (e) {}
        try { iframe.contentWindow.postMessage({ type: 'mw-theme', theme: theme }, '*'); } catch (e) {}
    });
}

/* ─── postMessage: auto-resize page iframes + Tally integration ─────────────── */
window.addEventListener('message', function (e) {
    if (!e.data) return;

    /* iframe height reporting */
    if (e.data.type === 'mw-page-height') {
        document.querySelectorAll('iframe.page-iframe').forEach(function (iframe) {
            try {
                if (iframe.contentWindow === e.source) {
                    iframe.style.minHeight = '0';
                    iframe.style.height = e.data.height + 'px';
                }
            } catch (ex) {}
        });
    }

    /* Tally form loaded */
    if (typeof e.data === 'string') {
        try {
            var d = JSON.parse(e.data);
            if (d.event === 'Tally.FormLoaded') { /* form is ready */ }
        } catch (_) {}
    }
});

/* ─── All DOM-dependent code in a single DOMContentLoaded ───────────────────── */
document.addEventListener('DOMContentLoaded', function () {

    /* ── Theme toggle ─────────────────────────────────────────────────────────── */
    var currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

    document.querySelectorAll('iframe.service-hero-iframe, iframe.page-iframe').forEach(function (iframe) {
        iframe.addEventListener('load', function () { syncIframeThemes(currentTheme); });
    });

    var toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            var next = currentTheme === 'light' ? 'dark' : 'light';
            document.documentElement.classList.add('theme-transitioning');
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            currentTheme = next;
            syncIframeThemes(next);
            setTimeout(function () {
                document.documentElement.classList.remove('theme-transitioning');
            }, 350);
        });
    }

    /* ── Mobile Navigation ────────────────────────────────────────────────────── */
    var mobileToggle = document.querySelector('.mobile-toggle');
    var navLinks     = document.querySelector('.nav-links');

    function resetHamburger() {
        if (!mobileToggle) return;
        var spans = mobileToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity   = '1';
        spans[2].style.transform = 'none';
    }
    function closeMenu() {
        if (!navLinks || !mobileToggle) return;
        navLinks.classList.remove('active');
        mobileToggle.classList.remove('active');
        resetHamburger();
    }

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function () {
            var open = mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active', open);
            var spans = mobileToggle.querySelectorAll('span');
            if (open) {
                spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
                spans[1].style.opacity   = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                resetHamburger();
            }
        });

        /* Close on nav link click (mobile) */
        navLinks.addEventListener('click', function (e) {
            if (e.target.tagName === 'A' && window.innerWidth <= 768) closeMenu();
        });

        /* Close on outside click */
        document.addEventListener('click', function (e) {
            if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
                closeMenu();
            }
        });
    }

    /* ── Smooth scroll ────────────────────────────────────────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var href = this.getAttribute('href');
            if (href.length > 1) {
                var target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    var offset = target.getBoundingClientRect().top + window.pageYOffset - 80;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                }
            }
        });
    });

    /* ── Header scroll shadow (CSS-class-based) ───────────────────────────────── */
    var header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', function () {
            header.classList.toggle('scrolled', window.pageYOffset > 0);
        }, { passive: true });
    }

    /* ── Scroll-reveal animations (CSS-class-based) ───────────────────────────── */
    var revealSelector = '.service-card, .story-card, .expertise-card, .process-step, ' +
                         '.expect-card, .faq-item, .philosophy-point';
    var revealEls = document.querySelectorAll(revealSelector);
    if (revealEls.length) {
        revealEls.forEach(function (el) { el.classList.add('js-reveal'); });
        var revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target); /* fire once */
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        revealEls.forEach(function (el) { revealObserver.observe(el); });
    }

    /* ── Logo Carousel ────────────────────────────────────────────────────────── */
    var carousel = document.querySelector('.logos-carousel');
    if (carousel) {
        var isDragging        = false;
        var currentTranslate  = 0;
        var previousTranslate = 0;
        var lastDragX         = 0;
        var velocity          = -0.5;
        var animId            = null;
        var returnInterval    = null;

        carousel.style.animation = 'none';
        carousel.style.cursor    = 'grab';

        function animate() {
            currentTranslate += velocity;
            var half = carousel.scrollWidth / 2;
            if (Math.abs(currentTranslate) >= half) {
                currentTranslate = 0;
                previousTranslate = 0;
            } else if (currentTranslate > 0) {
                currentTranslate  = -half + currentTranslate;
                previousTranslate = currentTranslate;
            }
            carousel.style.transform = 'translateX(' + currentTranslate + 'px)';
            animId = requestAnimationFrame(animate);
        }
        animate();

        function startDrag(e) {
            isDragging = true;
            lastDragX  = e.touches ? e.touches[0].pageX : e.pageX;
            carousel.style.cursor = 'grabbing';
            velocity = 0;
            if (returnInterval) { clearInterval(returnInterval); returnInterval = null; }
        }
        function onDrag(e) {
            if (!isDragging) return;
            e.preventDefault();
            var x    = e.touches ? e.touches[0].pageX : e.pageX;
            var diff = x - lastDragX;
            currentTranslate += diff * 0.5;
            velocity  = diff * 0.015;
            lastDragX = x;
        }
        function endDrag() {
            if (!isDragging) return;
            isDragging = false;
            carousel.style.cursor = 'grab';
            velocity = Math.max(-1.5, Math.min(1.5, velocity));
            returnInterval = setInterval(function () {
                if (Math.abs(velocity - (-0.5)) < 0.05) {
                    velocity = -0.5;
                    clearInterval(returnInterval);
                    returnInterval = null;
                } else {
                    velocity = velocity * 0.95 + (-0.5) * 0.05;
                }
            }, 50);
        }

        carousel.addEventListener('mousedown',  startDrag);
        carousel.addEventListener('mousemove',  onDrag,   { passive: false });
        carousel.addEventListener('mouseup',    endDrag);
        carousel.addEventListener('mouseleave', endDrag);
        carousel.addEventListener('touchstart', startDrag, { passive: true });
        carousel.addEventListener('touchmove',  onDrag,   { passive: false });
        carousel.addEventListener('touchend',   endDrag);
        carousel.querySelectorAll('img').forEach(function (img) {
            img.addEventListener('dragstart', function (e) { e.preventDefault(); });
        });

        /* Cleanup on unload */
        window.addEventListener('beforeunload', function () {
            if (animId)          cancelAnimationFrame(animId);
            if (returnInterval)  clearInterval(returnInterval);
        });
    }

    /* ── Language Switching ───────────────────────────────────────────────────── */
    var langBtn      = document.querySelector('.lang-btn');
    var langDropdown = document.querySelector('.lang-dropdown');
    var currentLangSpan = document.querySelector('.current-lang');
    var langButtons  = document.querySelectorAll('[data-lang]');

    var LANG_NAMES = { en: 'EN', fr: 'FR', nl: 'NL', ka: 'KA', ru: 'RU' };
    var _flagEl = document.getElementById('current-flag');
    var _prefix = '';
    if (_flagEl) {
        var _m = (_flagEl.getAttribute('src') || '').match(/^((?:\.\.\/)+)/);
        if (_m) _prefix = _m[1];
    }
    var LANG_FLAGS = {
        en: _prefix + 'Logos_Languages/en_logo.png',
        fr: _prefix + 'Logos_Languages/fr_logo.png',
        nl: _prefix + 'Logos_Languages/nd_logo.png',
        ka: _prefix + 'Logos_Languages/ge_logo.png',
        ru: _prefix + 'Logos_Languages/ru_logo.png',
    };

    function getNestedTranslation(obj, path) {
        return path.split('.').reduce(function (cur, key) { return cur && cur[key]; }, obj);
    }

    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;

        if (currentLangSpan) currentLangSpan.textContent = LANG_NAMES[lang];
        var flag = document.getElementById('current-flag');
        if (flag) { flag.src = LANG_FLAGS[lang]; flag.alt = LANG_NAMES[lang]; }

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            var tr  = typeof translations !== 'undefined'
                      ? getNestedTranslation(translations[lang], key) : null;
            if (tr) {
                if (tr.indexOf('<') !== -1) el.innerHTML = tr;
                else el.textContent = tr;
            }
        });

        langButtons.forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        document.querySelectorAll('iframe').forEach(function (fr) {
            try { fr.contentWindow.postMessage({ type: 'mw-lang', lang: lang }, '*'); } catch (_) {}
        });
    }

    var savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);

    if (langBtn && langDropdown) {
        langBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.language-switcher')) langDropdown.classList.remove('active');
        });
    }

    /* Use event delegation instead of per-button listeners */
    if (langDropdown) {
        langDropdown.addEventListener('click', function (e) {
            var btn = e.target.closest('[data-lang]');
            if (!btn) return;
            setLanguage(btn.getAttribute('data-lang'));
            langDropdown.classList.remove('active');
        });
    }

    /* ── Contact Form ─────────────────────────────────────────────────────────── */
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            contactForm.classList.add('submitted');

            var submitBtn   = contactForm.querySelector('.form-submit');
            var btnText     = submitBtn.querySelector('.button-text');
            var btnLoader   = submitBtn.querySelector('.button-loader');
            var formStatus  = document.getElementById('formStatus');

            submitBtn.disabled        = true;
            btnText.style.display     = 'none';
            btnLoader.style.display   = 'inline-flex';
            formStatus.textContent    = '';
            formStatus.className      = 'form-status';

            try {
                var res = await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(new FormData(contactForm)).toString(),
                });
                if (res.ok) {
                    formStatus.textContent = "Thank you! We'll get back to you within 24 hours.";
                    formStatus.className   = 'form-status success';
                    contactForm.reset();
                    contactForm.classList.remove('submitted');
                } else {
                    throw new Error('server');
                }
            } catch (_) {
                formStatus.textContent = 'Failed to send. Please email mikheil@metricwave.net directly.';
                formStatus.className   = 'form-status error';
            } finally {
                submitBtn.disabled      = false;
                btnText.style.display   = 'inline';
                btnLoader.style.display = 'none';
                formStatus.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });

        var emailInput = document.getElementById('email');
        if (emailInput) {
            emailInput.addEventListener('blur', function () {
                var ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.value);
                this.setCustomValidity(this.value && !ok ? 'Please enter a valid email address' : '');
            });
        }

        var msgInput = document.getElementById('message');
        if (msgInput) {
            var counter = document.createElement('div');
            counter.className = 'char-counter';
            counter.textContent = '0 characters';
            msgInput.parentNode.appendChild(counter);
            msgInput.addEventListener('input', function () {
                var n = this.value.length;
                counter.textContent = n + ' character' + (n !== 1 ? 's' : '');
                counter.style.color = n > 1000 ? 'var(--teal-light)' : 'var(--light-gray)';
            });
        }
    }

    /* ── Newsletter Form ──────────────────────────────────────────────────────── */
    var newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            var submitBtn   = newsletterForm.querySelector('button[type="submit"]');
            var subText     = submitBtn.querySelector('.subscribe-text');
            var subLoader   = submitBtn.querySelector('.subscribe-loader');
            var statusDiv   = document.getElementById('newsletterStatus');

            submitBtn.disabled      = true;
            subText.style.display   = 'none';
            subLoader.style.display = 'inline-flex';
            statusDiv.textContent   = '';
            statusDiv.className     = 'newsletter-status';

            try {
                var res = await fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(new FormData(newsletterForm)).toString(),
                });
                if (res.ok) {
                    statusDiv.textContent = 'Thanks for subscribing! Check your inbox for confirmation.';
                    statusDiv.className   = 'newsletter-status success';
                    newsletterForm.reset();
                } else {
                    throw new Error('server');
                }
            } catch (_) {
                statusDiv.textContent = 'Failed to subscribe. Please try again later.';
                statusDiv.className   = 'newsletter-status error';
            } finally {
                submitBtn.disabled      = false;
                subText.style.display   = 'inline';
                subLoader.style.display = 'none';
                statusDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

}); /* end DOMContentLoaded */
