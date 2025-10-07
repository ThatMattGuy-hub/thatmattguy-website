# ThatMattGuy - Marketing Website

A warm, professional marketing website for a freelance web design and automation business, built with React.js, TailwindCSS, and Vite.

## 🎯 Project Overview

**ThatMattGuy** is a startup freelance business offering:
- Custom web design
- Web application development
- Automation solutions

Targeting small businesses in Ribble Valley & the North West of England, with a focus on building trust through offering 3-5 free starter website projects.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, React Router, and Vite
- **Responsive Design**: Fully mobile and tablet-optimized using TailwindCSS
- **SEO Optimized**: Meta tags, semantic HTML, and local keyword optimization
- **Fast Performance**: Optimized for sub-2s load times
- **Accessible**: WCAG-compliant with proper ARIA labels
- **Component-Based**: Modular, reusable components for easy maintenance

## 📁 Project Structure

```
ThatMattGuy/
├── public/
│   └── Logo.png              # Company logo
├── src/
│   ├── components/           # Reusable components
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── SEO.jsx
│   ├── pages/                # Page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Portfolio.jsx
│   │   └── Contact.jsx
│   ├── App.jsx               # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── postcss.config.js         # PostCSS configuration
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2
- **Build Tool**: Vite 5.0
- **Styling**: TailwindCSS 3.3
- **Routing**: React Router DOM 6.20
- **Icons**: Lucide React
- **SEO**: React Helmet Async

## 📦 Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:3000`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🌐 Deployment

### Deploy to Netlify

1. **Install Netlify CLI** (optional):
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project**:
   ```bash
   npm run build
   ```

3. **Deploy**:
   - Option A: Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Option B: Connect your Git repository to Netlify for automatic deployments
   - Option C: Use Netlify CLI:
     ```bash
     netlify deploy --prod
     ```

4. **Configure Netlify**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Add a `_redirects` file in `public/` with:
     ```
     /*    /index.html   200
     ```

### Deploy to Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   - Option A: Connect your Git repository to [Vercel](https://vercel.com)
   - Option B: Use Vercel CLI:
     ```bash
     vercel --prod
     ```

3. **Configure Vercel**:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

## 🔧 Configuration

### Update Contact Information

Edit the following files to update contact details:

- `src/components/Footer.jsx` - Footer contact info
- `src/pages/Contact.jsx` - Contact page details
- Update phone number, email, and social media links

### Update Logo

Replace `public/Logo.png` with your logo file.

### Configure Contact Form

The contact form in `src/pages/Contact.jsx` currently has a simulated submission. To make it functional:

**Option 1: Formspree**
1. Sign up at [Formspree](https://formspree.io)
2. Get your form endpoint
3. Update the form action in `Contact.jsx`:
   ```jsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**Option 2: Netlify Forms**
1. Add `netlify` attribute to form:
   ```jsx
   <form name="contact" method="POST" data-netlify="true">
   ```
2. Add hidden input:
   ```jsx
   <input type="hidden" name="form-name" value="contact" />
   ```

**Option 3: Custom Backend**
- Implement your own serverless function or API endpoint

### Update Google Maps

In `src/pages/Contact.jsx`, replace the Google Maps embed URL with your specific location coordinates.

## 📊 SEO Optimization

The site includes:
- Meta titles and descriptions for each page
- Open Graph tags for social sharing
- Semantic HTML structure
- Local keywords: "Web Design Ribble Valley", "North West Business Websites"
- Fast loading speeds with optimized assets

### Post-Launch SEO Tasks

1. **Register domain** (e.g., thatmattguy.co.uk)
2. **Set up Google My Business** for local SEO
3. **Configure Google Analytics**:
   - Add tracking code to `index.html`
4. **Set up Google Search Console**:
   - Verify domain ownership
   - Submit sitemap
5. **Create XML sitemap** (use a Vite plugin or online tool)
6. **Set up professional email** (info@thatmattguy.co.uk)

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: { ... },  // Green accent
  accent: { ... },   // Orange accent
}
```

### Fonts

The site uses Inter font from Google Fonts. To change:
1. Update the Google Fonts link in `index.html`
2. Update `fontFamily` in `tailwind.config.js`

### Content

All content is in the page components (`src/pages/`). Edit these files to update:
- Hero messages
- Service descriptions
- Pricing tiers
- About story
- Contact information

## 📝 To-Do After Launch

- [ ] Add real family photo to About page
- [ ] Configure contact form with real endpoint
- [ ] Set up Google Analytics
- [ ] Register domain and configure DNS
- [ ] Set up professional email
- [ ] Create Google My Business listing
- [ ] Add real project screenshots to Portfolio as completed
- [ ] Collect and add client testimonials
- [ ] Set up newsletter/email marketing integration
- [ ] Create blog content for SEO

## 🐛 Troubleshooting

**Build fails**:
- Ensure all dependencies are installed: `npm install`
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

**Routing doesn't work after deployment**:
- Add redirect rules for SPA routing (see Netlify/Vercel deployment sections)

**Styles not loading**:
- Ensure TailwindCSS is properly configured
- Check that `index.css` imports are correct

## 📄 License

This project is private and proprietary to ThatMattGuy.

## 📞 Support

For questions or issues, contact:
- Email: info@thatmattguy.co.uk
- Phone: +44 7123 456789

---

Built with ❤️ by ThatMattGuy
