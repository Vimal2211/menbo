# Getting Started - Menbo Technologies Angular App

## Prerequisites
- **Node.js** v20.17.0 or v22.9.0+ (not v21.x)
- **npm** or **yarn** package manager
- Angular CLI installed globally (optional but recommended)

## Step 1: Check Node Version (IMPORTANT!)
```bash
node --version
```
Make sure it's **NOT** v21.x. If it is, upgrade to v20 LTS or v22+

## Step 2: Install Angular CLI (Optional)
```bash
npm install -g @angular/cli@latest
```

## Step 3: Navigate to Project
```bash
cd d:\Vimal\menbo_tech\menbotech
```

## Step 4: Install Dependencies
```bash
npm install
```
This installs all required packages based on package.json

## Step 5: Start Development Server
```bash
npm start
```

Or if that doesn't work:
```bash
ng serve --open
```

Or on a different port:
```bash
ng serve --port 4300 --open
```

## Step 6: Open in Browser
The app will automatically open at:
- **Default**: http://localhost:4200
- **Custom Port**: http://localhost:YOUR_PORT

## ✅ Verify Everything Works

Once the app loads, test these features:

### Navigation
- [ ] Click navbar links (Services, About, Tech Stack, Team, Contact)
- [ ] Hamburger menu appears on mobile devices
- [ ] Navbar becomes sticky on scroll

### Hero Section
- [ ] Counter numbers animate on page load
- [ ] Geometric background morphs smoothly
- [ ] CTA buttons have hover effects

### Service Cards
- [ ] All 6 service cards are clickable
- [ ] Clicking opens detailed modal from right side
- [ ] Modal can be closed with X button or overlay click
- [ ] Modal content is different for each service
- [ ] "Start Project" button in modal scrolls to contact

### Team Section
- [ ] Featured team member (Vimal) displays with description
- [ ] 5 team flip cards hover to reveal back side
- [ ] Each card has unique color theme

### Contact Form
- [ ] Form inputs accept text
- [ ] Service dropdown populated with options
- [ ] Submit button shows "✓ Message Sent!" on click
- [ ] Button returns to normal state after 3 seconds

### Animations
- [ ] Scroll reveal animations as you scroll down
- [ ] Marquee tech stack scrolls continuously
- [ ] Process steps have hover effects

## Build for Production

```bash
ng build --configuration production
```

Output will be in `dist/menbotech/` folder

Then deploy to your hosting platform (Vercel, Netlify, GitHub Pages, etc.)

## Troubleshooting

### "Port 4200 is already in use"
```bash
# Kill process on port 4200, or use different port:
ng serve --port 4300 --open
```

### "Node.js version xxx is not compatible"
Upgrade/downgrade Node.js:
- Visit https://nodejs.org/
- Download v20 LTS or v22 LTS
- Reinstall and restart terminal

### Blank screen or errors in console
```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
npm start
```

### Images not loading
Images point to: `https://www.menbotechnologies.in/assets/`
These are external URLs. Replace with your own if needed.

## Development Commands

```bash
# Development server
npm start

# Run unit tests
npm test

# Build for production
npm run build

# Linting
npm run lint

# Development with watch mode
ng serve

# Build with optimization
ng build --configuration production --optimization
```

## Project Structure

```
menbotech/
├── src/
│   ├── app/
│   │   ├── components/          ← All UI components
│   │   ├── services/            ← Business logic & data
│   │   ├── app.component.*      ← Root component
│   │   └── app.module.ts        ← Module configuration
│   ├── assets/                  ← Images, fonts
│   ├── styles.css               ← Global styles
│   ├── main.ts                  ← Entry point
│   └── index.html               ← HTML template
├── angular.json                 ← Angular config
├── package.json                 ← Dependencies
├── tsconfig.json                ← TypeScript config
└── CONVERSION_SUMMARY.md        ← This project info
```

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/app/app.component.ts` | Main component with scroll reveal setup |
| `src/app/app.module.ts` | All component declarations |
| `src/styles.css` | Global CSS variables and styles |
| `src/app/services/modal.service.ts` | Modal state management |
| `src/app/services/team.service.ts` | Team member data |

## Customization Tips

### Change Site Title
Edit `src/index.html`:
```html
<title>Your Site Name</title>
```

### Change Colors
Edit `src/styles.css`:
```css
:root {
  --accent: #e8420a;  /* Change to your color */
  --ink: #0f0e0b;
  /* ... other colors ... */
}
```

### Change Team Members
Edit `src/app/services/team.service.ts`:
```typescript
teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Your Name',
    role: 'Your Role',
    // ...
  }
]
```

### Change Contact Email
Edit `src/app/components/contact/contact.component.html`:
```html
<a href="mailto:your-email@example.com">your-email@example.com</a>
```

## Performance Tips

1. **Lazy Load Routes** - Implement lazy loading for modules
2. **Image Optimization** - Use WebP format, optimize sizes
3. **Tree Shaking** - Angular CLI does this automatically
4. **Production Build** - Always use `--production` flag for deployment

## Next Steps

1. ✅ Get the app running locally
2. ✅ Test all interactive features
3. ✅ Customize colors, content, images
4. ✅ Set up backend API endpoints
5. ✅ Connect form to email service
6. ✅ Deploy to production

---

**Need Help?** Check the Angular docs: https://angular.io/docs
