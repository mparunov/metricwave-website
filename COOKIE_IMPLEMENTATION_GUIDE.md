# Cookie Consent Implementation Guide

## Overview

MetricWave now has a fully functional cookie consent management system that is GDPR-compliant and tracks user behavior when analytics cookies are enabled.

## Files Created

### 1. `cookie-consent.js` - Cookie Management JavaScript
**Location:** `/Users/macbook/Desktop/MetricWave/cookie-consent.js`

**Features:**
- Cookie consent banner with 3 options: Accept All, Necessary Only, Customize
- Cookie preferences modal with toggles for each cookie category
- Automatic tracking when analytics cookies are enabled
- LocalStorage-based analytics data storage
- 365-day cookie expiration

**What It Tracks (when analytics enabled):**
- Page views (URL, title, timestamp, referrer)
- Button clicks (CTA buttons, navigation links)
- Form submissions (form name/ID, page, timestamp)
- Scroll depth (25%, 50%, 75%, 100% milestones)
- Time on page (session duration)
- Navigation clicks (all internal links)

**API Methods:**
```javascript
// Access cookie consent instance
window.cookieConsent

// Get all analytics data
window.cookieConsent.getAnalyticsData()

// Export analytics to JSON file
window.exportAnalytics()

// Clear analytics data
window.cookieConsent.clearAnalyticsData()

// Manually show preferences modal
window.cookieConsent.showModal()
```

### 2. `cookie-policy.html` - Cookie Policy Page
**Location:** `/Users/macbook/Desktop/MetricWave/cookie-policy.html`

**Contents:**
- Explanation of what cookies are
- Detailed breakdown of cookie categories:
  - Necessary Cookies (always active)
  - Analytics Cookies (optional)
  - Marketing Cookies (optional)
- Data collection details
- User rights and choices
- Browser cookie controls
- Contact information

### 3. Updated CSS - Cookie Styling
**Location:** `/Users/macbook/Desktop/MetricWave/styles.css` (lines 1750+)

**Styled Components:**
- Cookie consent banner (fixed bottom, teal border)
- Cookie preferences modal (centered overlay)
- Toggle switches for each cookie category
- Responsive design for mobile devices

## Implementation Details

### HTML Structure

Every page now includes (before `</body>`):

1. **Cookie Consent Banner:**
   ```html
   <div id="cookie-consent-banner" class="cookie-consent-banner">
     <!-- Banner content with Accept All, Necessary Only, Customize buttons -->
   </div>
   ```

2. **Cookie Preferences Modal:**
   ```html
   <div id="cookie-modal" class="cookie-modal">
     <!-- Modal with toggles for each cookie category -->
   </div>
   ```

3. **Required Scripts:**
   ```html
   <script src="cookie-consent.js"></script>
   ```

### Pages Updated

✅ All pages now have cookie consent:
- index.html
- about.html
- services.html
- pricing.html
- blog.html
- contact.html
- industries.html
- industry-logistics.html
- industry-technology.html
- industry-gaming.html
- industry-government.html
- industry-education.html
- industry-nonprofit.html

❌ Cookie policy page (intentionally excluded - no banner on policy page itself)

## Cookie Categories

### 1. Necessary Cookies (Always Active)
**Cannot be disabled**

Stores:
- Cookie consent preferences (`metricwave_consent`)
- Consent timestamp (`metricwave_consent_date`)
- Language selection
- Session management

### 2. Analytics Cookies (Optional)
**Default: Disabled**

When enabled, tracks:
- **Page Views:** Every page navigation
- **User Actions:**
  - Button clicks (all .btn-primary, .btn-secondary, .nav-cta)
  - Navigation clicks (all links)
  - Form submissions
- **Engagement Metrics:**
  - Scroll depth (25%, 50%, 75%, 100%)
  - Time on page
  - Session duration

Data stored in `localStorage` under key: `metricwave_analytics`

### 3. Marketing Cookies (Optional)
**Default: Disabled**

Currently placeholder for future integrations:
- Google Ads
- Meta Pixel
- LinkedIn Insight Tag
- Retargeting campaigns

## User Experience Flow

### First Visit
1. User lands on any page
2. After 1 second, cookie banner slides up from bottom
3. User sees 3 options:
   - **Accept All:** Enables all cookies
   - **Necessary Only:** Only essential cookies
   - **Customize:** Open preferences modal

### Customization
1. User clicks "Customize"
2. Modal appears with toggle switches
3. User can enable/disable:
   - ✓ Necessary (always on, greyed out)
   - ☐ Analytics (optional)
   - ☐ Marketing (optional)
4. Click "Save Preferences"

### Returning Visitors
- Cookie banner does NOT appear
- Preferences remembered for 365 days
- Can change preferences anytime via footer "Cookie Settings" link

## Analytics Data Structure

### Storage Location
- **Browser:** `localStorage.metricwave_analytics`
- **Max Events:** 100 (automatically rotates)

### Event Format
```javascript
{
  "category": "pageview" | "click" | "form" | "scroll" | "engagement" | "navigation",
  "event": "pageview" | "button_click" | "form_submit" | "scroll_depth" | "time_on_page" | "link_click",
  "timestamp": "2026-01-31T10:30:45.123Z",
  // Additional event-specific data
}
```

### Example Events

**Page View:**
```javascript
{
  "category": "pageview",
  "page": "/services.html",
  "title": "Services - MetricWave",
  "timestamp": "2026-01-31T10:30:45.123Z",
  "referrer": "https://google.com"
}
```

**Button Click:**
```javascript
{
  "category": "click",
  "event": "button_click",
  "element": "Get Started",
  "url": "/contact.html",
  "timestamp": "2026-01-31T10:31:20.456Z"
}
```

**Scroll Depth:**
```javascript
{
  "category": "scroll",
  "event": "scroll_depth",
  "depth": 75,
  "page": "/about.html",
  "timestamp": "2026-01-31T10:32:15.789Z"
}
```

## Exporting Analytics Data

### From Browser Console
```javascript
// Export all analytics data to JSON file
window.exportAnalytics()
// Downloads: metricwave-analytics-2026-01-31T10:30:45.123Z.json

// View data in console
console.log(window.cookieConsent.getAnalyticsData())

// Clear all analytics data
window.cookieConsent.clearAnalyticsData()
```

### From Your Server (Future)
The `storeAnalyticsEvent()` function currently saves to localStorage. To send to your server:

1. Edit `cookie-consent.js` line ~210
2. Replace localStorage logic with API call:

```javascript
storeAnalyticsEvent(category, data) {
    // Send to your analytics endpoint
    fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, ...data })
    });
}
```

## Adding Google Analytics (When Ready)

### 1. Get GA4 Measurement ID
Sign up at: https://analytics.google.com

### 2. Edit `cookie-consent.js`
Find the `initAnalytics()` function (line ~140) and add:

```javascript
initAnalytics() {
    // Track user actions
    this.trackUserActions();

    // Add Google Analytics
    if (this.preferences.analytics) {
        // Load GA4 script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
        document.head.appendChild(script);

        // Initialize GA4
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX');
    }

    console.log('Analytics tracking initialized');
}
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID.

## Legal Compliance

### GDPR (EU)
✅ **Compliant**
- Users must opt-in for non-essential cookies
- Clear explanation of what data is collected
- Easy way to withdraw consent
- Data minimization (only necessary data)

### CCPA (California)
✅ **Compliant**
- Transparency about data collection
- Opt-out mechanism provided
- No selling of personal data

### Best Practices
✅ Implemented:
- Cookie policy page with full details
- Granular consent controls
- 365-day consent expiry
- Easy preference management
- No cookies set before consent

## Testing the Implementation

### 1. First-Time Visit
1. Open incognito/private browser window
2. Navigate to `http://localhost:8000` (or your domain)
3. Wait 1 second for banner to appear
4. Click "Customize" to test modal
5. Toggle switches and save

### 2. Check Cookies
Open browser DevTools → Application → Cookies

Should see:
- `metricwave_consent` - JSON with preferences
- `metricwave_consent_date` - Timestamp

### 3. Check Analytics
1. Accept analytics cookies
2. Navigate between pages
3. Click some buttons
4. Scroll down pages
5. Open browser console:
   ```javascript
   console.log(window.cookieConsent.getAnalyticsData())
   ```
6. Should see array of tracked events

### 4. Export Data
```javascript
window.exportAnalytics()
```
Check Downloads folder for JSON file.

### 5. Test Persistence
1. Set preferences
2. Close browser
3. Reopen same site
4. Banner should NOT appear
5. Preferences should be maintained

## Troubleshooting

### Banner Not Appearing
- Check browser console for JavaScript errors
- Verify `cookie-consent.js` is loaded
- Clear cookies and reload

### Analytics Not Tracking
- Verify analytics cookies are enabled
- Check console for "Analytics tracking initialized" message
- Inspect `localStorage.metricwave_analytics`

### Preferences Not Saving
- Check browser allows cookies
- Verify not in incognito/private mode (some browsers block cookies)
- Check cookie expiry date is set correctly

## Future Enhancements

### Ready to Add:
1. **Google Analytics 4** - Full page and event tracking
2. **Meta Pixel** - Facebook/Instagram retargeting
3. **LinkedIn Insight Tag** - B2B remarketing
4. **Hotjar** - Heatmaps and session recordings
5. **Server-side analytics** - Send data to your own database

### Recommended:
1. **Privacy Policy Page** - Comprehensive data protection policy
2. **Data Retention Policy** - How long you keep analytics data
3. **Cookie Audit** - Regular review of third-party cookies
4. **Consent Logging** - Log when users give/withdraw consent (for compliance)

## Contact & Support

For questions about the cookie implementation:
- **Email:** mikheil@metricwave.net
- **Documentation:** See this file
- **Cookie Policy:** /cookie-policy.html

---

**Last Updated:** January 31, 2026
**Implementation Version:** 1.0
**GDPR Compliant:** Yes
**CCPA Compliant:** Yes
