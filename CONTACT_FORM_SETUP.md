# MetricWave Contact Form Setup Guide

## Overview
The custom contact form has been implemented to replace the Tally form. It offers:
- Better styling that matches your brand
- More detailed lead qualification fields
- Direct email delivery to mikheil@metricwave.net
- Automatic confirmation emails to customers
- Real-time validation and user feedback
- Character counter for the message field
- Loading states and success/error messages

## Features

### Form Fields
1. **Required Fields:**
   - First Name
   - Last Name
   - Email Address
   - Project Message

2. **Optional Fields:**
   - Phone Number
   - Company Name
   - Company Size (dropdown)
   - Service Interested In (dropdown)
   - Budget Range (dropdown)
   - Timeline (dropdown)
   - Newsletter subscription (checkbox)

### User Experience
- Real-time email validation
- Visual feedback for valid/invalid inputs
- Character counter for message field
- Loading spinner during submission
- Success/error messages
- Automatic user confirmation email
- Mobile-responsive design

## Server Setup Instructions

### Prerequisites
You need a web server with PHP support and email functionality. Here are your options:

### Option 1: Web Hosting with PHP (Recommended)
If you're using web hosting (like Hostinger, SiteGround, Bluehost, etc.):

1. **Upload all files** to your web hosting via FTP or File Manager:
   - All HTML files
   - styles.css
   - script.js
   - translations.js
   - contact-form-handler.php
   - All image/logo folders

2. **Configure PHP mail()** (usually works out of the box):
   - Most hosting providers have PHP mail() enabled by default
   - No additional configuration needed

3. **Test the form**:
   - Visit your contact page
   - Submit a test message
   - Check mikheil@metricwave.net for the email

### Option 2: Local Testing with XAMPP/MAMP
For local testing before deployment:

1. **Install XAMPP** (Windows) or **MAMP** (Mac):
   - Download from apache.org or mamp.info
   - Install and start Apache

2. **Copy project files**:
   - Move MetricWave folder to htdocs (XAMPP) or htdocs (MAMP)
   - Access via http://localhost/MetricWave

3. **Configure email** (for local testing):
   - Local PHP mail() may not work
   - See "Alternative Email Solutions" below

### Option 3: Alternative Email Solutions

If PHP mail() doesn't work, you have these options:

#### A. Using SMTP (More Reliable)
Replace contact-form-handler.php with PHPMailer:

```bash
# Install PHPMailer via Composer
composer require phpmailer/phpmailer
```

Then update the PHP file to use SMTP (Gmail, SendGrid, etc.)

#### B. Using FormSubmit.co (No PHP Required)
If you can't use PHP, update the form in contact.html:

```html
<form action="https://formsubmit.co/mikheil@metricwave.net" method="POST">
    <!-- Add this hidden field -->
    <input type="hidden" name="_subject" value="New Contact from MetricWave">
    <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you.html">
    <input type="hidden" name="_captcha" value="false">

    <!-- Keep all other fields the same -->
</form>
```

#### C. Using Netlify Forms (if hosted on Netlify)
Add to your form tag:
```html
<form name="contact" method="POST" data-netlify="true">
```

## Email Configuration

### Customizing Email Content
Edit `contact-form-handler.php` to customize:

1. **Recipient email** (line 51):
```php
$to = 'mikheil@metricwave.net';
```

2. **Subject line** (line 52):
```php
$subject = 'New Contact Form Submission - MetricWave';
```

3. **Email body format** (lines 55-84):
Modify the template as needed

4. **Confirmation email** (lines 95-114):
Customize the auto-reply sent to customers

### Adding CC/BCC
Add additional recipients:

```php
$headers = [
    'From: MetricWave Website <noreply@metricwave.net>',
    'Reply-To: ' . $email,
    'Cc: team@metricwave.net',
    'Bcc: backup@metricwave.net',
    'X-Mailer: PHP/' . phpversion(),
    'Content-Type: text/plain; charset=UTF-8'
];
```

## Security Features

The form includes:
- Server-side validation
- HTML sanitization to prevent XSS
- Email validation
- CSRF protection (can be enhanced)
- Input filtering
- IP address logging

### Recommended Enhancements
For production use, consider adding:

1. **reCAPTCHA** to prevent spam:
```html
<div class="g-recaptcha" data-sitekey="your-site-key"></div>
```

2. **Rate limiting** to prevent abuse:
Add session-based submission limits in PHP

3. **HTTPS** (SSL certificate):
Ensure your site uses HTTPS for secure data transmission

## Troubleshooting

### Form Not Sending Emails

1. **Check PHP errors**:
Add to contact-form-handler.php:
```php
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

2. **Verify mail() function**:
Create test-mail.php:
```php
<?php
$result = mail('mikheil@metricwave.net', 'Test', 'This is a test');
echo $result ? 'Mail sent!' : 'Mail failed!';
?>
```

3. **Check spam folder**:
Emails from PHP mail() often go to spam

4. **Verify server configuration**:
Contact your hosting provider about PHP mail() support

### Form Not Submitting

1. **Check browser console** for JavaScript errors
2. **Verify file path** to contact-form-handler.php
3. **Test with browser developer tools** Network tab

### Styling Issues

If form doesn't look right:
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Verify styles.css?v=5 is loading
3. Check for CSS conflicts

## File Structure

```
MetricWave/
├── contact.html                  # Contact page with custom form
├── contact-form-handler.php      # Backend processor
├── script.js                     # Form submission handler
├── styles.css                    # Form styling
└── CONTACT_FORM_SETUP.md        # This file
```

## Testing Checklist

Before going live:
- [ ] Test all required field validations
- [ ] Submit form with valid data
- [ ] Check email arrives at mikheil@metricwave.net
- [ ] Verify user receives confirmation email
- [ ] Test on mobile devices
- [ ] Test different browsers (Chrome, Firefox, Safari)
- [ ] Test error handling (invalid email, missing fields)
- [ ] Verify success/error messages display correctly

## Support

If you need help:
1. Check server error logs
2. Test with simplified version first
3. Contact your hosting provider about PHP mail() support
4. Consider using a third-party email service (SendGrid, Mailgun, etc.)

---

## Quick Start

1. Upload all files to your web server
2. Test the form by visiting /contact.html
3. Check mikheil@metricwave.net for the email
4. Done! 🎉

The form is production-ready and will work on any PHP-enabled web hosting.
