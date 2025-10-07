# Deployment Guide for ThatMattGuy Website

## Quick Start

1. **Test Locally**:
   ```bash
   npm install
   npm run dev
   ```
   Visit `http://localhost:3000` to view the site.

2. **Build for Production**:
   ```bash
   npm run build
   ```
   This creates a `dist` folder with optimized files.

## Deploy to Netlify (Recommended)

### Method 1: Drag & Drop (Easiest)
1. Run `npm run build` locally
2. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `dist` folder onto the page
4. Your site is live!

### Method 2: Git Integration (Best for updates)
1. Push your code to GitHub
2. Log in to [Netlify](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

Netlify will automatically rebuild and redeploy whenever you push to GitHub.

## Deploy to Vercel

### Method 1: Git Integration
1. Push your code to GitHub
2. Log in to [Vercel](https://vercel.com)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel auto-detects Vite settings
6. Click "Deploy"

### Method 2: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

## Post-Deployment Checklist

### Immediate Tasks
- [ ] Test all pages and links
- [ ] Verify mobile responsiveness
- [ ] Test contact form submission
- [ ] Check that logo displays correctly
- [ ] Verify Google Maps embed works

### Domain Setup
1. **Purchase domain** (e.g., thatmattguy.co.uk from Namecheap or Google Domains)
2. **Configure DNS** in Netlify/Vercel:
   - Add custom domain in dashboard
   - Update DNS records at domain registrar
   - Enable HTTPS (automatic with Netlify/Vercel)

### Contact Form Setup

**Option A: Netlify Forms** (if using Netlify)
1. Open `src/pages/Contact.jsx`
2. Update the form tag:
   ```jsx
   <form 
     name="contact" 
     method="POST" 
     data-netlify="true"
     onSubmit={handleSubmit}
   >
     <input type="hidden" name="form-name" value="contact" />
     {/* rest of form fields */}
   </form>
   ```
3. Redeploy
4. Form submissions appear in Netlify dashboard

**Option B: Formspree**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint
4. Update `handleSubmit` in `Contact.jsx`:
   ```jsx
   const handleSubmit = async (e) => {
     e.preventDefault()
     setIsSubmitting(true)
     
     const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       body: JSON.stringify(formData),
       headers: { 'Content-Type': 'application/json' }
     })
     
     if (response.ok) {
       setIsSubmitted(true)
       setFormData({ name: '', email: '', phone: '', service: '', message: '' })
     }
     setIsSubmitting(false)
   }
   ```

### SEO Setup

1. **Google Analytics**:
   - Create account at [analytics.google.com](https://analytics.google.com)
   - Get tracking ID
   - Add to `index.html` before `</head>`:
     ```html
     <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'GA_MEASUREMENT_ID');
     </script>
     ```

2. **Google Search Console**:
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add and verify your domain
   - Submit sitemap (create with [xml-sitemaps.com](https://www.xml-sitemaps.com))

3. **Google My Business**:
   - Create listing at [business.google.com](https://business.google.com)
   - Verify your business
   - Add photos, hours, services
   - Link to your website

### Email Setup

**Professional Email** (info@thatmattguy.co.uk):
- Use Google Workspace, Microsoft 365, or domain provider's email
- Update email addresses in:
  - `src/components/Footer.jsx`
  - `src/pages/Contact.jsx`
  - `README.md`

## Content Updates

### Add Family Photo
1. Add your family photo to `public/` folder
2. Update `src/pages/About.jsx`:
   ```jsx
   <img 
     src="/family-photo.jpg" 
     alt="Matt and family" 
     className="rounded-xl shadow-lg"
   />
   ```

### Update Contact Details
Replace placeholder contact info:
- Phone: `+44 7123 456789` → Your real number
- Email: `info@thatmattguy.co.uk` → Your real email
- Social media links in Footer.jsx

### Add Portfolio Projects
As you complete projects, update `src/pages/Portfolio.jsx`:
1. Create a projects array with project details
2. Add project screenshots to `public/projects/`
3. Display in a grid layout

## Performance Optimization

### Image Optimization
- Compress images before adding (use [tinypng.com](https://tinypng.com))
- Use WebP format for better compression
- Add lazy loading: `<img loading="lazy" />`

### Check Performance
- Test with [PageSpeed Insights](https://pagespeed.web.dev)
- Aim for 90+ score on mobile and desktop
- Fix any issues highlighted

## Troubleshooting

**Site not loading after deployment**:
- Check build logs in Netlify/Vercel dashboard
- Ensure `_redirects` file is in `public/` folder
- Verify all imports use correct paths

**Contact form not working**:
- Check form configuration (Netlify Forms or Formspree)
- Test form submission in browser console
- Verify email notifications are set up

**Images not displaying**:
- Ensure images are in `public/` folder
- Use absolute paths: `/Logo.png` not `./Logo.png`
- Check file names match exactly (case-sensitive)

## Support

If you encounter issues:
1. Check the browser console for errors (F12)
2. Review build logs in deployment platform
3. Consult [Vite docs](https://vitejs.dev) or [React Router docs](https://reactrouter.com)

---

**Ready to launch?** Run `npm run build` and deploy! 🚀
