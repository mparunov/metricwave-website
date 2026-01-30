# MetricWave - Data Analytics Website

A professional, modern website for MetricWave (Thrive Performance Coaching) - providing data analytics and business intelligence services for solo entrepreneurs and small businesses.

## Project Structure

```
MetricWave/
├── index.html          # Home page with hero, services overview, and success stories
├── about.html          # About page with mission, values, team, and credentials
├── services.html       # Detailed services page with 4 service offerings
├── contact.html        # Contact page with Tally form embed and business info
├── styles.css          # Complete CSS with brand styling and responsive design
├── script.js           # JavaScript for mobile navigation and interactions
└── README.md           # This file
```

## Features

### Design & Branding
- **Brand Colors**: Teal (#2DD4BF), Charcoal (#1A1A1A), Deep Black (#0A0A0A)
- **Typography**: Inter font family with bold italic headers
- **Style**: Clean, modern, energetic with professional analytics feel

### Pages

#### 1. Home Page (index.html)
- Compelling hero section with data-driven value proposition
- Services overview with 4 service cards
- Client success stories with metrics and testimonials
- Clear calls-to-action throughout

#### 2. About Page (about.html)
- Mission and values section
- Team expertise and background
- Professional credentials and certifications
- Training philosophy

#### 3. Services Page (services.html)
- Business Intelligence & Data Visualization
- Process Optimization & Analysis
- Data Strategy & Management
- Executive Training & Coaching
- "How We Work" process overview

#### 4. Contact Page (contact.html)
- Embedded Tally contact form (properly integrated)
- Contact information and business details
- "What to Expect" process timeline
- FAQ section

### Technical Features

✅ **Fully Responsive**: Mobile-optimized design works on all devices
✅ **Sticky Navigation**: Header stays visible while scrolling
✅ **Smooth Scrolling**: Anchor links scroll smoothly to sections
✅ **Mobile Menu**: Hamburger menu with smooth animations
✅ **Hover Effects**: Subtle, professional interactions throughout
✅ **SEO Optimized**: Proper meta tags, headings, and semantic HTML
✅ **Fast Loading**: Optimized CSS and minimal dependencies
✅ **Tally Form Integration**: Contact form properly embedded with responsive wrapper

## How to Use

### Opening the Website

1. **Option 1: Double-click any HTML file**
   - Navigate to the MetricWave folder
   - Double-click `index.html` to open in your default browser

2. **Option 2: Use a local server (recommended for testing)**
   ```bash
   # If you have Python installed
   python -m http.server 8000

   # Then open: http://localhost:8000
   ```

3. **Option 3: Use VS Code Live Server**
   - Install "Live Server" extension in VS Code
   - Right-click `index.html` and select "Open with Live Server"

### Customization

#### Update Contact Information
Edit the following in all HTML files (footer and contact page):
- Email: `hello@metricwave.com`
- Phone: `(555) 123-4567`
- Location: `Available Nationwide`

#### Change Colors
Edit `styles.css` at the top (CSS variables):
```css
:root {
    --teal: #2DD4BF;
    --black: #0A0A0A;
    --charcoal: #1A1A1A;
    /* ... other colors */
}
```

#### Update Content
- All text content is in the HTML files
- Search for specific sections and update text directly
- Keep the structure intact for proper styling

#### Tally Form
The contact form is already integrated. If you need to change it:
1. Create a new form at tally.so
2. Get the embed code
3. Replace the iframe code in `contact.html` (line ~58)

## Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight: ~45KB total (HTML + CSS + JS)
- Google Fonts loaded efficiently with preconnect
- No large images or heavy assets
- Smooth 60fps animations and transitions

## Deployment

### Deploy to Netlify (Free)
1. Go to netlify.com
2. Drag and drop the MetricWave folder
3. Get your live URL instantly

### Deploy to GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch and save
5. Your site will be live at username.github.io/repo-name

### Deploy to Other Hosts
Upload all files to your hosting provider via FTP or their dashboard.

## Accessibility

- Semantic HTML5 elements
- Proper heading hierarchy (h1, h2, h3)
- Alt text support for images
- ARIA labels for navigation
- Keyboard navigation support
- High contrast text for readability

## Maintenance

### Regular Updates
- Update success stories with new client results
- Add new credentials as earned
- Keep service descriptions current
- Update contact information as needed

### Testing Checklist
- [ ] Test all navigation links work
- [ ] Verify mobile menu opens/closes properly
- [ ] Check form submission on contact page
- [ ] Test on mobile devices
- [ ] Verify all content is readable
- [ ] Check smooth scrolling works

## Support

For questions or issues:
- Review this README
- Check browser console for errors (F12)
- Ensure all files are in the same directory
- Verify no special characters in file names

## License

This website was built for MetricWave - Thrive Performance Coaching.
All rights reserved © 2026.

---

**Built with**: HTML5, CSS3, JavaScript
**Font**: Inter (Google Fonts)
**Form**: Tally.so Embed
**Status**: Production Ready ✅
