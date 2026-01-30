# 🚀 MetricWave Deployment Guide - Netlify + Custom Domain

## Quick Overview
You'll deploy your MetricWave website to Netlify and connect your **metricwave.net** domain. Total time: ~10 minutes.

---

## Step 1: Create Netlify Account (2 minutes)

1. Go to **https://app.netlify.com/signup**
2. Sign up with:
   - GitHub (recommended for future updates)
   - Email address
   - GitLab or Bitbucket
3. Confirm your email if required

---

## Step 2: Deploy Your Website (3 minutes)

### Method A: Drag & Drop (Easiest)

1. **Log into Netlify**: https://app.netlify.com
2. Click **"Add new site"** → **"Deploy manually"**
3. **Drag the entire MetricWave folder** into the upload area
   - You can drag from Desktop/MetricWave
   - Or click "Browse to upload" and select all files
4. Wait 30-60 seconds for deployment
5. You'll get a random URL like: `random-name-123456.netlify.app`

### Method B: Netlify CLI (For developers)

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Navigate to your site folder
cd /Users/macbook/Desktop/MetricWave

# Deploy
netlify deploy --prod
```

---

## Step 3: Test Your Deployed Site (1 minute)

1. Click the random Netlify URL (e.g., `random-name-123456.netlify.app`)
2. **Test all pages**:
   - ✅ Home page loads correctly
   - ✅ About page works
   - ✅ Services page displays properly
   - ✅ Contact page shows Tally form
   - ✅ Mobile menu works (resize browser)
   - ✅ Navigation between pages functions

---

## Step 4: Connect Your Custom Domain - metricwave.net (4 minutes)

### 4A: Add Domain in Netlify

1. In Netlify dashboard, go to your site
2. Click **"Domain settings"** (or "Set up a custom domain")
3. Click **"Add custom domain"**
4. Enter: `metricwave.net`
5. Click **"Verify"** then **"Add domain"**
6. Also add: `www.metricwave.net` (repeat steps 3-5)

### 4B: Configure DNS Settings - GoDaddy

You have **two options** for connecting your GoDaddy domain:

#### Option 1: Use Netlify DNS (Recommended - Easier)

1. **In Netlify:**
   - Click **"Set up Netlify DNS"** in domain settings
   - Netlify will provide **4 nameservers** like:
     ```
     dns1.p01.nsone.net
     dns2.p01.nsone.net
     dns3.p01.nsone.net
     dns4.p01.nsone.net
     ```
   - Copy these nameservers

2. **In GoDaddy:**
   - Go to https://dcc.godaddy.com/manage/dns
   - Find **metricwave.net** and click on it
   - Scroll down to **"Nameservers"** section
   - Click **"Change Nameservers"**
   - Select **"I'll use my own nameservers"**
   - Delete existing nameservers
   - Enter Netlify's 4 nameservers (one per field)
   - Click **"Save"**
   - **Wait 1-24 hours** for DNS propagation (usually ~1 hour)

#### Option 2: Keep GoDaddy DNS (Use DNS Records)

If you want to keep GoDaddy's nameservers:

1. **In Netlify:**
   - Note the DNS records shown (don't use Netlify DNS)

2. **In GoDaddy:**
   - Go to https://dcc.godaddy.com/manage/dns
   - Click on **metricwave.net**
   - Scroll to **"DNS Records"** section

3. **Add A Record for metricwave.net:**
   - Click **"Add"** button
   - Type: Select **"A"**
   - Name: **"@"** (this represents your root domain)
   - Value: **"75.2.60.5"** (Netlify load balancer IP)
   - TTL: **"1 Hour"** (or 3600 seconds)
   - Click **"Save"**

4. **Add CNAME Record for www.metricwave.net:**
   - Click **"Add"** button again
   - Type: Select **"CNAME"**
   - Name: **"www"**
   - Value: **"your-site-name.netlify.app"** (get this from Netlify)
   - TTL: **"1 Hour"**
   - Click **"Save"**

5. **Important:** If there are existing A or CNAME records with same names, delete them first
6. Wait 1-4 hours for DNS propagation

---

## Step 5: Enable HTTPS (Automatic)

1. After DNS propagates, return to Netlify
2. Go to **"Domain settings"** → **"HTTPS"**
3. Click **"Verify DNS configuration"**
4. Netlify automatically provisions SSL certificate (free)
5. Wait 1-5 minutes
6. ✅ Your site is now live with HTTPS at **https://metricwave.net**

---

## Step 6: Final Configuration (Optional but Recommended)

### Set Primary Domain
1. In Netlify Domain settings
2. Find `metricwave.net` and `www.metricwave.net`
3. Click **"Options"** on your preferred version (usually `metricwave.net`)
4. Select **"Set as primary domain"**
5. This automatically redirects www to non-www (or vice versa)

### Update Site Name
1. Go to **"Site settings"** → **"Site details"**
2. Click **"Change site name"**
3. Enter: `metricwave` (this changes your Netlify URL to metricwave.netlify.app)

---

## Troubleshooting

### "Domain already registered"
- The domain is registered elsewhere. Transfer DNS management to Netlify or use Option 2 above.

### "DNS not configured correctly"
- Wait longer (DNS can take up to 24 hours)
- Verify nameservers are correct in your registrar
- Use https://dnschecker.org to check propagation

### "Site not loading"
- Clear browser cache (Cmd+Shift+R or Ctrl+Shift+F5)
- Try incognito/private browsing mode
- Wait for DNS propagation

### Tally form not working
- Check browser console for errors (F12)
- Verify the Tally form URL is correct in contact.html
- Contact form should work immediately after deployment

### Mobile menu not working
- Clear browser cache
- Verify script.js is loaded (check browser console)

---

## DNS Propagation Checker

Check if your domain is live worldwide:
- **https://dnschecker.org**
- Enter: `metricwave.net`
- Check A records and CNAME records

---

## GoDaddy DNS Configuration - Detailed Guide

Since you're using GoDaddy, here's a detailed walkthrough:

### Method 1: Change Nameservers to Netlify (Recommended)

**Step-by-step in GoDaddy:**

1. **Login to GoDaddy**
   - Go to https://www.godaddy.com
   - Click "Sign In" (top right)
   - Enter your credentials

2. **Access Domain Settings**
   - Click your profile icon → "My Products"
   - Find **metricwave.net** in your domain list
   - Click the three dots (...) next to it
   - Select **"Manage DNS"**
   - OR directly go to: https://dcc.godaddy.com/manage/dns

3. **Change Nameservers**
   - Scroll down to the **"Nameservers"** section (near bottom)
   - Click **"Change"** button
   - Select **"Enter my own nameservers (advanced)"**
   - You'll see 2 fields by default, click **"Add Nameserver"** to add more (need 4 total)
   - Enter Netlify's nameservers:
     ```
     Nameserver 1: dns1.p01.nsone.net
     Nameserver 2: dns2.p01.nsone.net
     Nameserver 3: dns3.p01.nsone.net
     Nameserver 4: dns4.p01.nsone.net
     ```
   - Click **"Save"**
   - Confirm the change (GoDaddy may ask for confirmation)

4. **Wait for Propagation**
   - DNS changes can take 1-48 hours (usually 1-4 hours)
   - GoDaddy will send you an email when complete

### Method 2: Add DNS Records in GoDaddy (Keep GoDaddy Nameservers)

**Step-by-step in GoDaddy:**

1. **Access DNS Management**
   - Login to GoDaddy
   - Go to https://dcc.godaddy.com/manage/dns
   - Click on **metricwave.net**

2. **Delete Existing Records (if any)**
   - Look for existing **A** records with Name "@"
   - Look for existing **CNAME** records with Name "www"
   - Click the pencil icon → **Delete** for each conflicting record

3. **Add A Record (for metricwave.net)**
   - Click **"Add"** button (in DNS Records section)
   - Type: Select **"A"**
   - Name: Type **"@"** (no quotes)
   - Value: Type **"75.2.60.5"** (Netlify IP)
   - TTL: Select **"1 Hour"** or leave as **"Custom: 3600 seconds"**
   - Click **"Save"**

4. **Add CNAME Record (for www.metricwave.net)**
   - Click **"Add"** button again
   - Type: Select **"CNAME"**
   - Name: Type **"www"** (no quotes)
   - Value: Type **"your-site-name.netlify.app"** (get from Netlify)
   - TTL: Select **"1 Hour"**
   - Click **"Save"**

5. **Verify Your Records**
   - Your DNS Records should now show:
     - Type A, Name @, Points to 75.2.60.5
     - Type CNAME, Name www, Points to your-site-name.netlify.app

6. **Save and Wait**
   - Click **"Save"** if prompted
   - Wait 1-4 hours for DNS to propagate

### GoDaddy-Specific Tips

- **Forwarding**: Make sure domain forwarding is OFF (it conflicts with DNS)
- **Privacy**: Domain privacy (WHOIS privacy) doesn't affect DNS
- **Default Records**: GoDaddy adds default parking records - delete conflicting ones
- **DNSSEC**: If you have DNSSEC enabled, you may need to disable it temporarily

---

## Common Domain Registrars - Quick Reference

### GoDaddy (Your Registrar) ⭐
- DNS Management: https://dcc.godaddy.com/manage/dns
- Nameservers: My Products → Domains → Manage DNS → Nameservers section
- Support: GoDaddy Help Center or chat support

### Other Registrars (For Reference)

**Namecheap**
- Dashboard → Domain List → Manage → Advanced DNS

**Google Domains**
- My Domains → DNS → Custom name servers

**Cloudflare**
- DNS management → Add A and CNAME records

---

## Post-Deployment Checklist

After your site is live at metricwave.net:

- [ ] Test all 4 pages (Home, About, Services, Contact)
- [ ] Verify Tally contact form works
- [ ] Test mobile responsiveness
- [ ] Check HTTPS (should show padlock in browser)
- [ ] Submit site to Google Search Console
- [ ] Set up Google Analytics (optional)
- [ ] Test form submissions
- [ ] Share with a friend to verify externally

---

## Updating Your Website

### Quick Updates via Netlify UI
1. Go to Netlify dashboard → Your site
2. Click "Deploys" tab
3. Drag and drop updated files
4. Site updates in ~30 seconds

### Recommended: Connect to GitHub
1. Create GitHub account (if needed)
2. Upload MetricWave folder to GitHub repository
3. Connect repository to Netlify
4. Future updates: Just push to GitHub, auto-deploys!

---

## Support Resources

- **Netlify Docs**: https://docs.netlify.com
- **Netlify Support**: https://www.netlify.com/support
- **DNS Help**: https://www.netlify.com/blog/2017/01/03/guide-to-dns/
- **Custom Domains**: https://docs.netlify.com/domains-https/custom-domains/

---

## Your Site Details

- **Domain**: metricwave.net
- **Hosting**: Netlify (Free plan)
- **HTTPS**: Automatic (Let's Encrypt SSL)
- **Bandwidth**: 100GB/month (Netlify free tier)
- **Build Minutes**: N/A (static site, no builds needed)

---

## Summary: What You're Getting

✅ **Lightning-fast hosting** on Netlify's global CDN
✅ **Free SSL certificate** (HTTPS secure)
✅ **Automatic deployments** (if connected to Git)
✅ **No server management** required
✅ **99.9% uptime** guaranteed
✅ **Global edge network** for fast loading worldwide
✅ **Instant rollbacks** if you need to undo changes
✅ **Form handling** (Netlify can handle form submissions)

---

## Need Help?

If you run into issues:
1. Check the Troubleshooting section above
2. Review Netlify's documentation
3. Contact your domain registrar for DNS help
4. Netlify has great community support forums

---

**Ready to go live? Follow Step 1 above!** 🚀

Your MetricWave website is ready for deployment. All files are optimized and configured for Netlify hosting.
