# Kamara Selections

A modern React JS website for Kamara Selections - A premium gem business from Sri Lanka.

## Features

- 🌍 **Multi-language Support**: Full translations in 9 European languages (English, German, French, Spanish, Italian, Portuguese, Dutch, Swedish, Polish)
- 💎 **Gemstone Showcase**: Beautiful display of premium Sri Lankan gemstones
- 📱 **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- ⚡ **Fast & Modern**: Built with Vite and React 19 for optimal performance
- 🎨 **Beautiful UI**: Gradient backgrounds, smooth animations, and modern design

## Supported Languages

- English (en)
- Deutsch (de) - German
- Français (fr) - French
- Español (es) - Spanish
- Italiano (it) - Italian
- Português (pt) - Portuguese
- Nederlands (nl) - Dutch
- Svenska (sv) - Swedish
- Polski (pl) - Polish

## Gemstones Featured

- Blue Sapphire
- Ruby
- Emerald
- Yellow Topaz
- Cat's Eye
- Alexandrite

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Ones-Zeros/kamara-selection.git
cd kamara-selection
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build locally:

```bash
npm run preview
```

## Deployment (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
- SPA routing is preconfigured via `netlify.toml` and `public/_redirects` so client-side routes work on refresh.
- No extra environment variables are required for default deployment.

## Project Structure

```
kamara-selection/
├── src/
│   ├── components/        # React components
│   │   ├── Hero.jsx      # Hero section
│   │   ├── About.jsx     # About section
│   │   ├── Gemstones.jsx # Gemstones showcase
│   │   ├── Contact.jsx   # Contact section
│   │   ├── Footer.jsx    # Footer
│   │   └── LanguageSwitcher.jsx # Language selector
│   ├── i18n/             # Internationalization
│   │   ├── config.js     # i18n configuration
│   │   └── locales/      # Translation files
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **react-i18next** - Internationalization framework
- **i18next** - Translation management
- **CSS3** - Styling with modern features

## License

© 2026 Kamara Selections. All rights reserved.
