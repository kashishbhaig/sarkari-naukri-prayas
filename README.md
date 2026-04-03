# Sarkari Naukri Prayas - Professional TCS Exam Portal

A comprehensive, responsive website for Sarkari Naukri Prayas YouTube channel covering all Indian government examinations.

## 🎯 Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern Professional UI** - Clean, attractive design with smooth animations
- **Complete Exam Coverage** - All major government exams including:
  - SSC (CGL, CHSL, JE, Stenographer)
  - Banking (IBPS, SBI, RBI)
  - Railways (RRB NTPC, Group D, ALP)
  - UPSC (IAS, IPS, IFS)
  - State PSCs (BPSC, MPSC, UPPSC, RPSC, TNPSC, etc.)
  - Defence (NDA, CDS, AFCAT)
  - Teaching (CTET, TET, KVS, NVS)
  - Medical (NEET, AIIMS)
  - And many more (150+ exams)

- **Exam Filtering System** - Filter exams by category
- **Detailed Information** - Each exam shows:
  - Application Fee
  - Eligibility Criteria
  - Exam Pattern
  - Number of Vacancies
- **Study Materials Section** - PDF Notes, Video Lectures, Mock Tests, Mobile App
- **Latest Notifications** - Real-time exam alerts and updates
- **Daily Current Affairs** - Stay updated with important news
- **Contact Form** - Direct communication with visitors
- **YouTube Integration** - Promote your YouTube channel
- **Smooth Animations** - Professional scroll effects and transitions

## 📁 File Structure

```
CLUG/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript functionality
├── images/
│   └── logo.svg        # Website logo (replace with your own)
└── README.md           # This file
```

## 🚀 Getting Started

### 1. Open the Website

Simply open `index.html` in any modern web browser:
- Chrome, Firefox, Safari, Edge
- Double-click the file or right-click → Open with → Your browser

### 2. Deploy to Web Hosting

To make your website live on the internet:

**Option A: Free Hosting (Recommended for beginners)**
- **Vercel**: Sign up at vercel.com, drag & drop the folder
- **Netlify**: Sign up at netlify.com, drag & drop the folder
- **GitHub Pages**: Upload to GitHub and enable GitHub Pages

**Option B: Traditional Web Hosting**
1. Upload all files to your hosting provider (cPanel, FTP, etc.)
2. Make sure `index.html` is in the root directory
3. Access via your domain name

### 3. Customize Your Content

**Change the channel name:**
- Find and replace all occurrences of "Sarkari Naukri Prayas" in `index.html`
- Update the logo by replacing `images/logo.svg` with your own logo

**Update contact information:**
- Edit the Contact section in `index.html` (lines with phone, email, address)

**Add your YouTube channel:**
- Update the YouTube section with your channel link
- Change the subscriber count to your actual stats

**Add real notifications:**
- Edit the `notificationsData` array in `script.js` (lines 235-262)

**Add real exam data:**
- Edit the `examsData` array in `script.js` (lines 217-233)

**Change colors:**
- Edit CSS variables in `styles.css` (lines 11-27):
  - `--primary-color`: Main theme color (currently blue)
  - `--secondary-color`: Accent color
  - Modify any other colors to match your brand

## 🎨 Customization Guide

### Change Theme Colors

In `styles.css`, modify these CSS variables:

```css
:root {
    --primary-color: #1e3a8a;     /* Main blue color */
    --primary-dark: #172554;      /* Darker blue for hover */
    --secondary-color: #dc2626;   /* Red accent */
    --accent-color: #f59e0b;      /* Yellow/orange accent */
    --success-color: #10b981;     /* Green for success */
}
```

### Add More Exam Categories

1. In `index.html`, add a new button in the `.exam-filters` section (around line 292)
2. Add a new `.exam-card` in the `.exams-grid` section (around line 248)
3. In `script.js`, add data to the `examsData` array with the new category

### Integrate Backend (Optional)

To store form submissions or notifications in a database:

1. Add a backend endpoint URL in `script.js`:
   ```javascript
   const API_ENDPOINT = 'your-backend-api.com/contact';
   ```

2. Modify the form submission handler to send data to your server:
   ```javascript
   fetch(API_ENDPOINT, {
       method: 'POST',
       body: JSON.stringify(data)
   });
   ```

### Add Google Analytics

Add this code before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📱 Mobile Responsive

The website is fully responsive and includes:
- Mobile navigation menu (hamburger)
- Collapsible tables on small screens
- Adjusted layouts for all screen sizes
- Touch-friendly buttons and links

## 🔧 Technical Details

**Technologies Used:**
- HTML5
- CSS3 (with Flexbox & Grid)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Poppins & Roboto)

**Browser Support:**
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

**Performance:**
- Fast loading (< 2 seconds on good connection)
- Optimized CSS & JavaScript
- No heavy dependencies
- Minimal external requests

## 📝 Content Updates

**Update exam notifications daily:**
1. Open `script.js`
2. Edit `notificationsData` array (line 235+)
3. Save and deploy

**Add new study materials:**
1. Update the materials section in `index.html` (around line 357)
2. Add download links or embed videos

**Modify exam list:**
1. Edit `examsData` array in `script.js` (line 217)
2. Each object represents an exam with: name, category, fee, eligibility, pattern, vacancies

## 🛠️ Future Enhancements

You can add:
- User authentication system
- Premium membership area
- Forum/Discussion board
- Mock test system with results
- Paid courses integration
- Payment gateway
- Email newsletter subscription
- WhatsApp notification system
- Admin panel to manage content

## 🆘 Need Help?

Common issues and solutions:

**Images not loading:**
- Make sure `images/` folder exists in the same directory as `index.html`
- Ensure `logo.svg` is in the `images` folder

**Styles not working:**
- Make sure `styles.css` is in the same directory as `index.html`
- Clear browser cache

**JavaScript not working:**
- Check browser console for errors (F12 → Console)
- Make sure `script.js` is in the same directory as `index.html`

## 📄 License

This template is provided as-is for your Sarkari Naukri Prayas channel. You have complete freedom to:
- ✅ Use for your channel
- ✅ Customize as needed
- ✅ Redistribute
- ✅ Commercial use

We only request that you keep the original attribution if you redistribute.

## 🙏 Credits

- Design & Development: Sarkari Naukri Prayas Team
- Icons: Font Awesome
- Fonts: Google Fonts
- Inspiration: Indian Government Examination Bodies

---

**Made with ❤️ for government job aspirants across India!**

For support, contact: contact@sarkarinaukriprayas.com
