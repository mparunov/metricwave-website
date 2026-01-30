# 🚀 GoDaddy + Netlify Setup Guide for MetricWave

## Quick Setup for metricwave.net

This guide walks you through connecting your GoDaddy domain (metricwave.net) to your Netlify-hosted website.

---

## Prerequisites

✅ GoDaddy account with metricwave.net domain
✅ Netlify account (free)
✅ MetricWave website deployed on Netlify

---

## Step-by-Step Setup

### Part 1: Deploy to Netlify (5 minutes)

1. **Create Netlify Account**
   - Go to https://app.netlify.com/signup
   - Sign up with email or GitHub
   - Verify your email

2. **Deploy Your Site**
   - Click "Add new site" → "Deploy manually"
   - Drag the entire **MetricWave folder** into the upload area
   - Wait 30-60 seconds for deployment
   - Your site gets a temporary URL like: `random-name-123456.netlify.app`
   - **Test it!** Click the URL to verify everything works

3. **Save Your Netlify URL**
   - Copy your Netlify URL (you'll need it later)
   - Example: `metricwave-site.netlify.app`

---

### Part 2: Connect GoDaddy Domain (Choose One Method)

## 🟢 Method 1: Change Nameservers (RECOMMENDED)

**This is easier and more reliable. Netlify manages everything.**

### In Netlify:

1. Go to your site dashboard
2. Click **"Domain settings"** (or "Set up a custom domain")
3. Click **"Add custom domain"**
4. Enter: **metricwave.net**
5. Click "Verify" → "Add domain"
6. Repeat for: **www.metricwave.net**
7. Click **"Set up Netlify DNS"**
8. **Copy the 4 nameservers** shown (example):
   ```
   dns1.p01.nsone.net
   dns2.p01.nsone.net
   dns3.p01.nsone.net
   dns4.p01.nsone.net
   ```
   **IMPORTANT:** Your nameservers will be different. Copy the EXACT ones Netlify shows you!

### In GoDaddy:

1. **Login to GoDaddy**
   - Go to https://www.godaddy.com
   - Sign in with your credentials

2. **Access DNS Settings**
   - Click your profile → **"My Products"**
   - Find **metricwave.net** in your domains list
   - Click the three dots (...) → **"Manage DNS"**
   - OR go directly to: https://dcc.godaddy.com/manage/dns

3. **Change Nameservers**
   - Scroll down to the **"Nameservers"** section (near bottom of page)
   - Click the **"Change"** button
   - Select **"Enter my own nameservers (advanced)"**
   - GoDaddy shows 2 fields by default
   - Click **"Add Nameserver"** to add fields 3 and 4
   - Enter the 4 nameservers from Netlify (one per field)
   - Click **"Save"**
   - Confirm the change if prompted

4. **Wait for Propagation**
   - DNS changes take 1-48 hours (usually 1-4 hours)
   - GoDaddy sends an email when complete
   - Check status: https://dnschecker.org (enter metricwave.net)

5. **Enable HTTPS in Netlify**
   - After DNS propagates (green checkmarks on dnschecker.org)
   - Return to Netlify → Domain settings → HTTPS
   - Click **"Verify DNS configuration"**
   - SSL certificate provisions automatically (1-5 minutes)
   - ✅ Done! Visit https://metricwave.net

---

## 🟡 Method 2: Add DNS Records (Keep GoDaddy Nameservers)

**Use this if you need to keep GoDaddy's nameservers for other services.**

### In GoDaddy:

1. **Access DNS Management**
   - Login to https://www.godaddy.com
   - Go to https://dcc.godaddy.com/manage/dns
   - Click on **metricwave.net**

2. **Delete Conflicting Records**
   - Look for existing **A** records with Name "@"
   - Look for existing **CNAME** records with Name "www"
   - Click the pencil icon next to each → **"Delete"**
   - Confirm deletion

3. **Add A Record (Root Domain)**
   - Click **"Add"** button
   - Type: Select **"A"**
   - Name: **@** (this means your root domain)
   - Value: **75.2.60.5** (Netlify's load balancer IP)
   - TTL: **1 Hour** (or 3600 seconds)
   - Click **"Save"**

4. **Add CNAME Record (WWW Subdomain)**
   - Click **"Add"** button again
   - Type: Select **"CNAME"**
   - Name: **www**
   - Value: **your-site-name.netlify.app** (your Netlify URL from Part 1)
   - TTL: **1 Hour**
   - Click **"Save"**

5. **Verify Records**
   Your DNS Records section should now show:
   - **Type:** A, **Name:** @, **Points to:** 75.2.60.5
   - **Type:** CNAME, **Name:** www, **Points to:** your-site.netlify.app

6. **Wait and Enable HTTPS**
   - Wait 1-4 hours for DNS propagation
   - Check: https://dnschecker.org
   - In Netlify: Domain settings → HTTPS → "Verify DNS"
   - ✅ Done! Visit https://metricwave.net

---

## 📊 Verify Your Setup

### Check DNS Propagation

1. Go to https://dnschecker.org
2. Enter: **metricwave.net**
3. Select **"A"** record type
4. Should show: **75.2.60.5** (green checkmarks worldwide)
5. Change to **"CNAME"** and check **www.metricwave.net**
6. Should show: **your-site.netlify.app**

### Test Your Live Site

- [ ] Visit http://metricwave.net (should redirect to HTTPS)
- [ ] Visit https://metricwave.net (should work)
- [ ] Visit https://www.metricwave.net (should redirect to metricwave.net)
- [ ] Test all 4 pages (Home, About, Services, Contact)
- [ ] Verify Tally contact form loads
- [ ] Check mobile responsiveness
- [ ] Confirm HTTPS padlock shows in browser

---

## 🔧 Troubleshooting

### "Domain already registered" in Netlify
- The domain exists but DNS isn't configured yet
- Continue with DNS setup in GoDaddy
- This message is normal

### DNS not propagating
- Wait longer (can take up to 48 hours)
- Clear your browser cache (Cmd+Shift+R)
- Try different browser or incognito mode
- Use https://dnschecker.org to check worldwide

### Site shows GoDaddy parking page
- DNS changes haven't propagated yet
- Wait and check dnschecker.org
- Make sure you deleted old A/CNAME records

### HTTPS not working
- DNS must propagate first (check dnschecker.org)
- In Netlify: Domain settings → HTTPS → "Verify DNS"
- Can take 5-10 minutes after DNS propagates
- Refresh the page and try again

### Mixed content errors (HTTP/HTTPS issues)
- All links in your HTML should be relative or HTTPS
- Your site is already configured correctly
- Clear browser cache if you see this

### GoDaddy forwarding interfering
- Go to GoDaddy → Domain settings
- Turn OFF domain forwarding
- Domain forwarding conflicts with custom DNS

---

## 📞 Support Resources

**Netlify:**
- Docs: https://docs.netlify.com
- Support: https://www.netlify.com/support

**GoDaddy:**
- DNS Help: https://www.godaddy.com/help/dns-management
- Support: GoDaddy Help Center (phone or chat)

**DNS Tools:**
- Check propagation: https://dnschecker.org
- Check DNS: https://www.whatsmydns.net

---

## ⏱️ Expected Timeline

| Step | Time |
|------|------|
| Deploy to Netlify | 2-3 minutes |
| Add domain in Netlify | 1 minute |
| Configure DNS in GoDaddy | 3-5 minutes |
| DNS propagation | 1-48 hours (usually 1-4) |
| SSL certificate | 1-5 minutes after DNS |
| **Total active work** | **~10 minutes** |

---

## 🎯 Post-Deployment Checklist

After your site is live:

- [ ] Update contact info if needed (email, phone in HTML)
- [ ] Test contact form submission
- [ ] Set up Google Analytics (optional)
- [ ] Submit to Google Search Console for SEO
- [ ] Share with colleagues/friends to verify
- [ ] Bookmark Netlify dashboard for future updates

---

## 🔄 Updating Your Site Later

**To update content:**

1. Edit the HTML/CSS files on your computer
2. Go to Netlify dashboard → Deploys tab
3. Drag updated files to upload
4. Site updates in 30 seconds
5. Changes go live immediately!

**Pro tip:** Connect to GitHub for version control and automatic deployments.

---

## ✅ You're All Set!

Follow the steps above, and your MetricWave website will be live at **https://metricwave.net**!

The most common issue is simply waiting for DNS propagation. Be patient, check dnschecker.org, and your site will be live soon! 🚀

---

**Questions?** Check the main **DEPLOYMENT_GUIDE.md** for more detailed troubleshooting.
