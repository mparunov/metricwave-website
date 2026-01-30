# ✅ MetricWave Deployment Checklist

## Quick Start (Follow in Order)

### 1️⃣ Sign Up for Netlify
- [ ] Go to https://app.netlify.com/signup
- [ ] Create account (use GitHub or email)
- [ ] Confirm email

### 2️⃣ Deploy Your Site
- [ ] Click "Add new site" → "Deploy manually"
- [ ] Drag the entire MetricWave folder
- [ ] Wait for deployment to complete
- [ ] Copy your temporary Netlify URL

### 3️⃣ Test Your Deployed Site
- [ ] Visit your Netlify URL
- [ ] Test Home page
- [ ] Test About page
- [ ] Test Services page
- [ ] Test Contact page (verify Tally form loads)
- [ ] Test mobile view (resize browser)
- [ ] Test navigation menu

### 4️⃣ Add Your Custom Domain
- [ ] In Netlify: "Domain settings" → "Add custom domain"
- [ ] Enter: metricwave.net
- [ ] Add domain
- [ ] Also add: www.metricwave.net

### 5️⃣ Configure DNS in GoDaddy
Choose ONE option:

**Option A: Netlify DNS (Recommended - Easier)**
- [ ] In Netlify: Click "Set up Netlify DNS"
- [ ] Copy the 4 nameservers Netlify provides
- [ ] Go to https://dcc.godaddy.com/manage/dns
- [ ] Click on metricwave.net
- [ ] Scroll to "Nameservers" → Click "Change"
- [ ] Select "Enter my own nameservers (advanced)"
- [ ] Enter all 4 Netlify nameservers
- [ ] Click "Save"
- [ ] Wait 1-24 hours (usually 1-4 hours)

**Option B: Keep GoDaddy DNS (Add DNS Records)**
- [ ] Go to https://dcc.godaddy.com/manage/dns
- [ ] Click on metricwave.net
- [ ] Delete any existing A record with name "@"
- [ ] Delete any existing CNAME record with name "www"
- [ ] Click "Add" → Type: A, Name: @, Value: 75.2.60.5, TTL: 1 Hour
- [ ] Click "Add" → Type: CNAME, Name: www, Value: your-site.netlify.app, TTL: 1 Hour
- [ ] Save and wait 1-4 hours

### 6️⃣ Enable HTTPS
- [ ] After DNS propagates, go to "Domain settings" → "HTTPS"
- [ ] Click "Verify DNS configuration"
- [ ] Wait for SSL certificate (automatic, 1-5 minutes)
- [ ] Site now has HTTPS! 🔒

### 7️⃣ Final Touches
- [ ] Set primary domain (metricwave.net or www.metricwave.net)
- [ ] Update site name to "metricwave" (optional)
- [ ] Test final live site at https://metricwave.net

### 8️⃣ Verification
- [ ] All pages load correctly
- [ ] HTTPS works (green padlock)
- [ ] Contact form submits properly
- [ ] Mobile responsive works
- [ ] Navigation functions perfectly

---

## 🔗 Quick Links

**GoDaddy DNS Management:** https://dcc.godaddy.com/manage/dns
**Netlify Signup:** https://app.netlify.com/signup
**DNS Checker:** https://dnschecker.org

## 🆘 Having Issues?

Check **DEPLOYMENT_GUIDE.md** for detailed GoDaddy-specific troubleshooting and step-by-step screenshots!

---

## ⏱️ Timeline

- Deploy to Netlify: **2-3 minutes**
- Configure domain: **4-5 minutes**
- DNS propagation: **1-24 hours** (usually ~1 hour)
- **Total active time: ~10 minutes**

---

## 📁 Files Ready for Deployment

✅ index.html (Home)
✅ about.html (About)
✅ services.html (Services)
✅ contact.html (Contact with Tally form)
✅ styles.css (All styling)
✅ script.js (Navigation & interactions)
✅ netlify.toml (Netlify config)

**Total size: 108KB** - Optimized and ready to go! 🚀
