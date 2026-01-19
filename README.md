# Malwa Bytes AI Portal

AI-Driven Software for Smarter Business - A modern React + Vite + Tailwind CSS web application showcasing Malwa Bytes' AI-powered solutions for SMB automation in India.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, Tailwind CSS, React Router
- **Responsive Design**: Fully responsive layout for mobile and desktop
- **AI-Powered Solutions**: Showcasing Smart Billing, Inventory Automation, CRM & Loyalty, and AI Insights
- **Smooth Navigation**: Smooth scrolling and interactive navigation
- **Contact Form**: Functional contact form with validation
- **GitHub Pages Ready**: Automated deployment via GitHub Actions

## 🎨 Design

The application uses a carefully crafted color palette:
- **Deep Navy**: `#0C1A3E` - Primary brand color
- **Bright Orange**: `#F66A00` - Accent color for CTAs and highlights
- **Soft Gray**: `#F4F4F4` - Background color

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/sjainlabs/malwa-bytes-ai-portal.git
cd malwa-bytes-ai-portal
```

2. Install dependencies:
```bash
npm install
```

## 💻 Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Build

Build the application for production:
```bash
npm run build
```

The built files will be in the `dist` directory.

Preview the production build locally:
```bash
npm run preview
```

## 🚀 Deployment to GitHub Pages

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Automatic Deployment

The site automatically deploys when changes are pushed to the `main` branch:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically:
   - Install dependencies
   - Build the application
   - Deploy to GitHub Pages
3. Your site will be available at: `https://sjainlabs.github.io/malwa-bytes-ai-portal/`

### GitHub Pages Configuration

Make sure GitHub Pages is enabled in your repository settings:
- Go to Settings → Pages
- Under "Source", select "GitHub Actions"
- The deployment workflow is defined in `.github/workflows/deploy.yml`

### Manual Build (For Testing)

To build and preview locally:
```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
malwa-bytes-ai-portal/
├── public/              # Static assets
│   └── favicon.ico     # Favicon
├── src/
│   ├── components/     # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Mission.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles with Tailwind
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Dependencies and scripts
```

## 🎯 Key Sections

1. **Hero Section**: Eye-catching headline with call-to-action buttons
2. **Features**: Four key features with icons and descriptions
3. **How It Works**: Four-step process explanation
4. **Mission**: Company mission emphasizing local SMB IT automation
5. **Testimonials**: Customer success stories
6. **Pricing**: Three pricing tiers (Starter, Pro, Enterprise)
7. **Contact**: Contact form with business type selector
8. **Footer**: Copyright and branding

## 🛠️ Technologies Used

- **React 18.3.1**: UI library
- **Vite 5.2.11**: Build tool and development server
- **Tailwind CSS 3.4.3**: Utility-first CSS framework
- **React Router DOM 7.12.0**: Client-side routing
- **PostCSS & Autoprefixer**: CSS processing

## 🌟 Mission

Malwa Bytes is committed to:
- Solving local SMB IT Automation challenges
- Training local employees in AI and automation technologies
- Generating employment opportunities in India
- Bringing global-quality work to the local market
- Empowering small and medium businesses with enterprise-level AI tools

## 📝 License

© 2026 Malwa Bytes. All rights reserved.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or support, please use the contact form on the website or reach out through the repository issues.
