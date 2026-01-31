// Cookie Consent Management System
// Handles user consent, preferences, and analytics tracking

class CookieConsent {
    constructor() {
        this.cookieName = 'metricwave_consent';
        this.cookieExpiry = 365; // days
        this.preferences = {
            necessary: true, // always true
            analytics: false,
            marketing: false
        };

        this.init();
    }

    init() {
        // Check if user has already made a choice
        const savedConsent = this.getCookie(this.cookieName);

        if (savedConsent) {
            // User has already made a choice - hide banner permanently
            this.preferences = JSON.parse(savedConsent);
            this.hideBanner();
            this.applyPreferences();
        } else {
            // Show banner after a short delay for first-time visitors
            setTimeout(() => {
                this.showBanner();
            }, 1000);
        }

        // Set up event listeners
        this.setupEventListeners();

        // Track page views if analytics enabled
        if (this.preferences.analytics) {
            this.trackPageView();
        }
    }

    setupEventListeners() {
        // Accept all button
        const acceptBtn = document.getElementById('cookie-accept-all');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', () => this.acceptAll());
        }

        // Necessary only button
        const necessaryBtn = document.getElementById('cookie-necessary-only');
        if (necessaryBtn) {
            necessaryBtn.addEventListener('click', () => this.acceptNecessary());
        }

        // Customize button
        const customizeBtn = document.getElementById('cookie-customize');
        if (customizeBtn) {
            customizeBtn.addEventListener('click', () => this.showModal());
        }

        // Modal close
        const modalClose = document.getElementById('cookie-modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', () => this.closeModal());
        }

        // Save preferences button
        const saveBtn = document.getElementById('cookie-save-preferences');
        if (saveBtn) {
            saveBtn.addEventListener('click', () => this.savePreferences());
        }

        // Click outside modal to close
        const modal = document.getElementById('cookie-modal');
        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal();
                }
            });
        }
    }

    showBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.classList.add('show');
        }
    }

    hideBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.classList.remove('show');
        }
    }

    showModal() {
        const modal = document.getElementById('cookie-modal');
        if (modal) {
            // Set current preferences in modal
            document.getElementById('cookie-analytics').checked = this.preferences.analytics;
            document.getElementById('cookie-marketing').checked = this.preferences.marketing;

            modal.classList.add('show');
        }
    }

    closeModal() {
        const modal = document.getElementById('cookie-modal');
        if (modal) {
            modal.classList.remove('show');
        }
    }

    acceptAll() {
        this.preferences = {
            necessary: true,
            analytics: true,
            marketing: true
        };
        this.saveConsent();
        this.hideBanner();
        this.applyPreferences();
    }

    acceptNecessary() {
        this.preferences = {
            necessary: true,
            analytics: false,
            marketing: false
        };
        this.saveConsent();
        this.hideBanner();
        this.applyPreferences();
    }

    savePreferences() {
        const analyticsCheckbox = document.getElementById('cookie-analytics');
        const marketingCheckbox = document.getElementById('cookie-marketing');

        this.preferences = {
            necessary: true,
            analytics: analyticsCheckbox ? analyticsCheckbox.checked : false,
            marketing: marketingCheckbox ? marketingCheckbox.checked : false
        };

        this.saveConsent();
        this.closeModal();
        this.hideBanner();
        this.applyPreferences();
    }

    saveConsent() {
        const consentData = JSON.stringify(this.preferences);
        this.setCookie(this.cookieName, consentData, this.cookieExpiry);

        // Store consent timestamp
        this.setCookie('metricwave_consent_date', new Date().toISOString(), this.cookieExpiry);
    }

    applyPreferences() {
        // Initialize analytics if enabled
        if (this.preferences.analytics) {
            this.initAnalytics();
            this.trackPageView();
        }

        // Initialize marketing if enabled
        if (this.preferences.marketing) {
            this.initMarketing();
        }

        console.log('Cookie preferences applied:', this.preferences);
    }

    initAnalytics() {
        // Track user actions
        this.trackUserActions();

        // You can add Google Analytics here when ready
        // Example: gtag('config', 'GA_MEASUREMENT_ID');
        console.log('Analytics tracking initialized');
    }

    initMarketing() {
        // You can add marketing pixels here (Meta, LinkedIn, etc.)
        console.log('Marketing tracking initialized');
    }

    trackPageView() {
        if (!this.preferences.analytics) return;

        const pageData = {
            page: window.location.pathname,
            title: document.title,
            timestamp: new Date().toISOString(),
            referrer: document.referrer
        };

        // Store in localStorage for demonstration (in production, send to analytics service)
        this.storeAnalyticsEvent('pageview', pageData);
        console.log('Page view tracked:', pageData);
    }

    trackUserActions() {
        if (!this.preferences.analytics) return;

        // Track clicks on important elements
        document.addEventListener('click', (e) => {
            // Track CTA button clicks
            if (e.target.classList.contains('btn-primary') ||
                e.target.classList.contains('btn-secondary') ||
                e.target.classList.contains('nav-cta')) {

                const eventData = {
                    event: 'button_click',
                    element: e.target.textContent.trim(),
                    url: e.target.href || window.location.href,
                    timestamp: new Date().toISOString()
                };

                this.storeAnalyticsEvent('click', eventData);
                console.log('Button click tracked:', eventData);
            }

            // Track navigation clicks
            if (e.target.tagName === 'A' && e.target.href) {
                const eventData = {
                    event: 'link_click',
                    text: e.target.textContent.trim(),
                    url: e.target.href,
                    timestamp: new Date().toISOString()
                };

                this.storeAnalyticsEvent('navigation', eventData);
                console.log('Navigation tracked:', eventData);
            }
        });

        // Track form submissions
        document.addEventListener('submit', (e) => {
            const form = e.target;
            const formData = {
                event: 'form_submit',
                form_name: form.name || form.id || 'unknown',
                page: window.location.pathname,
                timestamp: new Date().toISOString()
            };

            this.storeAnalyticsEvent('form', formData);
            console.log('Form submission tracked:', formData);
        });

        // Track scroll depth
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
            );

            if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
                maxScroll = scrollPercent;
                const eventData = {
                    event: 'scroll_depth',
                    depth: scrollPercent,
                    page: window.location.pathname,
                    timestamp: new Date().toISOString()
                };

                this.storeAnalyticsEvent('scroll', eventData);
                console.log('Scroll depth tracked:', eventData);
            }
        });

        // Track time on page
        const startTime = Date.now();
        window.addEventListener('beforeunload', () => {
            const timeOnPage = Math.round((Date.now() - startTime) / 1000);
            const eventData = {
                event: 'time_on_page',
                duration: timeOnPage,
                page: window.location.pathname,
                timestamp: new Date().toISOString()
            };

            this.storeAnalyticsEvent('engagement', eventData);
        });
    }

    storeAnalyticsEvent(category, data) {
        // In production, send to your analytics service
        // For now, store in localStorage for demonstration

        const events = JSON.parse(localStorage.getItem('metricwave_analytics') || '[]');
        events.push({
            category,
            ...data
        });

        // Keep only last 100 events
        if (events.length > 100) {
            events.shift();
        }

        localStorage.setItem('metricwave_analytics', JSON.stringify(events));
    }

    // Helper: Set cookie
    setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    }

    // Helper: Get cookie
    getCookie(name) {
        const nameEQ = name + "=";
        const cookies = document.cookie.split(';');

        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length);
            }
        }
        return null;
    }

    // Helper: Delete cookie
    deleteCookie(name) {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    }

    // Public method to get analytics data
    getAnalyticsData() {
        return JSON.parse(localStorage.getItem('metricwave_analytics') || '[]');
    }

    // Public method to clear analytics data
    clearAnalyticsData() {
        localStorage.removeItem('metricwave_analytics');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.cookieConsent = new CookieConsent();
});

// Export analytics data function for admin use
window.exportAnalytics = function() {
    if (window.cookieConsent) {
        const data = window.cookieConsent.getAnalyticsData();
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `metricwave-analytics-${new Date().toISOString()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
};
