# Email Autoresponder Setup Guide for MetricWave

## Overview
This guide explains how to set up automated email confirmations for your contact form and newsletter signup.

---

## Option 1: Netlify Forms + Zapier (Recommended - Free)

### Why This Approach?
- ✅ Free for up to 100 tasks/month
- ✅ Professional email templates
- ✅ No coding required
- ✅ Works with any email provider (Gmail, Outlook, etc.)

### Setup Steps:

#### Step 1: Deploy Your Site to Netlify
(Follow deployment instructions in DEPLOYMENT_INSTRUCTIONS.md)

#### Step 2: Create Zapier Account
1. Go to https://zapier.com/sign-up
2. Sign up for free account (no credit card needed)

#### Step 3: Create Zap for Contact Form

1. **Click "Create Zap"**

2. **Set Trigger:**
   - App: "Netlify"
   - Event: "New Form Submission"
   - Click "Continue"
   - Sign in to Netlify
   - Choose your MetricWave site
   - Choose form: "contact"
   - Test trigger (submit a test form)

3. **Set Action:**
   - App: "Email by Zapier" (or Gmail/Outlook)
   - Event: "Send Outbound Email"
   - Click "Continue"

4. **Configure Email:**
   - **To:** `{{email}}` (from form data)
   - **From:** Your email (e.g., mikheil@metricwave.net)
   - **Subject:** `Thank You for Contacting MetricWave`
   - **Body:**
   ```
   Hi {{firstName}},

   We have successfully received your inquiry and want to thank you for considering MetricWave for your data analytics needs.

   What happens next?
   - Our team will review your message carefully
   - You'll receive a personalized response within 24 hours
   - We'll schedule a consultation at your convenience

   In the meantime, feel free to explore our resources:
   - Services: https://metricwave.net/services.html
   - Blog: https://metricwave.net/blog.html
   - Industries: https://metricwave.net/industries.html

   Questions? Reach us at:
   Email: mikheil@metricwave.net
   Phone: +32 (472) 440551

   Best regards,
   The MetricWave Team

   ---
   MetricWave - Thrive Performance Coaching
   Brussels, Belgium
   https://metricwave.net
   ```

5. **Test Action** → **Turn on Zap**

#### Step 4: Create Zap for Newsletter

1. **Click "Create Zap"**

2. **Set Trigger:**
   - App: "Netlify"
   - Event: "New Form Submission"
   - Choose form: "newsletter"

3. **Set Action:**
   - App: "Email by Zapier"
   - **To:** `{{email}}`
   - **From:** mikheil@metricwave.net
   - **Subject:** `Welcome to the MetricWave Newsletter!`
   - **Body:**
   ```
   Welcome to the MetricWave Newsletter!

   Thanks for signing up! We'll make sure you don't miss anything important.

   Here's what you can expect:
   📊 Data Analytics Tips - Practical insights you can use right away
   📈 Industry Trends - Stay ahead with the latest in data & BI
   💡 Case Studies - Real success stories from businesses like yours
   🎯 Exclusive Content - Subscriber-only resources and guides
   🚀 Product Updates - Be first to know about new services

   Don't forget to:
   - Add mikheil@metricwave.net to your contacts
   - Follow us on LinkedIn: https://www.linkedin.com/company/metricwave
   - Explore our blog: https://metricwave.net/blog.html

   Have questions or topics you'd like us to cover? Just reply to this email!

   Cheers,
   The MetricWave Team

   ---
   MetricWave - Thrive Performance Coaching
   Brussels, Belgium
   https://metricwave.net
   ```

4. **Test Action** → **Turn on Zap**

---

## Option 2: Formspree (Easier, Paid for Custom Emails)

### Setup:

1. **Sign up at https://formspree.io**

2. **Create Contact Form:**
   - Click "New Form"
   - Name: "MetricWave Contact"
   - Copy form endpoint URL

3. **Update contact.html:**
   Replace form action:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

4. **Enable Autoresponder in Formspree Dashboard:**
   - Go to form settings
   - Enable "Autoresponder"
   - Subject: "Thank You for Contacting MetricWave"
   - Message: (use template above)

5. **Repeat for Newsletter Form**

**Cost:** Free for 50 submissions/month, $10/month for unlimited

---

## Option 3: SendGrid (Professional, Requires Setup)

### Setup:

1. **Create SendGrid Account:**
   - Go to https://sendgrid.com
   - Sign up (free tier: 100 emails/day)

2. **Create API Key:**
   - Dashboard → Settings → API Keys
   - Create API Key
   - Copy key (save securely)

3. **Add to Netlify Environment:**
   - Netlify Dashboard → Site Settings → Environment Variables
   - Add: `SENDGRID_API_KEY` = your API key

4. **Update netlify/functions/submission-created.js:**
   Uncomment the SendGrid code and add:
   ```javascript
   const sgMail = require('@sendgrid/mail');
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   ```

5. **Install Dependencies:**
   ```bash
   npm init -y
   npm install @sendgrid/mail
   ```

6. **Deploy with package.json**

**Cost:** Free for 100 emails/day

---

## Option 4: Netlify Forms Notifications (Simple, Manual)

This doesn't send to customers, but notifies YOU of submissions.

### Setup in Netlify Dashboard:

1. Go to your site → Forms → Settings
2. Click "Form notifications"
3. Add notification email (your email)
4. You'll receive an email when someone submits
5. **Manually reply** to send confirmation

**Pros:** Simple, no setup
**Cons:** Manual work, not automated

---

## Recommended Solution: Zapier

For MetricWave, I recommend **Option 1 (Zapier)** because:
- ✅ Completely free (under 100 submissions/month)
- ✅ No coding required
- ✅ Professional automated emails
- ✅ Easy to customize templates
- ✅ Can add to email lists (Mailchimp integration)
- ✅ 5 minutes to set up

---

## Testing Your Autoresponder

### After Setup:

1. **Test Contact Form:**
   - Go to https://yoursite.netlify.app/contact.html
   - Fill out form with YOUR email
   - Submit
   - Check inbox (and spam) for confirmation email

2. **Test Newsletter:**
   - Go to blog page
   - Sign up with YOUR email
   - Check for welcome email

3. **Check Zapier/Service Logs:**
   - Verify emails were sent successfully
   - Check for any errors

---

## Email Templates (HTML Versions)

I've created full HTML email templates in `/netlify/functions/submission-created.js` that you can use with SendGrid or any email service that supports HTML emails.

### Features:
- ✅ Responsive design
- ✅ MetricWave branding
- ✅ Teal accent colors
- ✅ Professional layout
- ✅ Links to your services
- ✅ Social media links
- ✅ Footer with contact info

---

## Current Form Setup

Your forms are already configured with:
- ✅ Netlify Forms integration
- ✅ Spam protection (honeypot)
- ✅ Form validation
- ✅ Success messages in UI
- ✅ Hidden subject fields for organization

What's needed:
- [ ] Choose email service (Zapier recommended)
- [ ] Set up autoresponder
- [ ] Test with real submissions

---

## Troubleshooting

### Emails Not Sending

**Check:**
1. Form submissions appearing in Netlify dashboard?
2. Zapier task running successfully?
3. Email in spam folder?
4. Correct email format in form field?
5. Zapier account active?

### Emails Going to Spam

**Solutions:**
1. Add your domain to SPF/DKIM records
2. Use professional email service (SendGrid)
3. Ask recipients to whitelist your email
4. Avoid spam trigger words

### Form Not Submitting

**Check:**
1. `data-netlify="true"` attribute present?
2. Form name matches hidden field?
3. No JavaScript errors in console?
4. Netlify site deployed?

---

## Next Steps

1. **Choose your email service** (I recommend Zapier for ease)
2. **Follow setup guide** above
3. **Test thoroughly** with your own email
4. **Monitor** first few submissions
5. **Adjust templates** based on feedback

---

## Cost Comparison

| Service | Free Tier | Paid Tier | Best For |
|---------|-----------|-----------|----------|
| **Zapier** | 100 tasks/month | $20/month (750 tasks) | Easy automation |
| **Formspree** | 50 submissions/month | $10/month (unlimited) | Simple forms |
| **SendGrid** | 100 emails/day | $15/month (40k emails) | High volume |
| **Netlify Manual** | Unlimited | Free | Low volume |

For a small business starting out, **Zapier's free tier is perfect**.

---

## Support

Need help setting up?
- Email: mikheil@metricwave.net
- Zapier Support: https://zapier.com/help
- Netlify Forms Docs: https://docs.netlify.com/forms/setup/

---

**Last Updated:** January 31, 2026
**Status:** Ready to configure
**Estimated Setup Time:** 5-10 minutes (Zapier)
