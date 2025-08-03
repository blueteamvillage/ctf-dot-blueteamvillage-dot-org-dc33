# Blue Team Village CTF - DEF CON 33

A modern, responsive web application for Blue Team Village's premier cybersecurity Capture The Flag (CTF) competition at DEF CON 33. Built with Next.js 14, TypeScript, and Tailwind CSS.

![Blue Team Village CTF](https://img.shields.io/badge/Blue%20Team%20Village-CTF%20DEF%20CON%2033-cyan?style=for-the-badge&logo=shield)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🎯 Overview

This application serves as the official website for Blue Team Village's CTF competition, providing participants with comprehensive information about challenges, rules, registration, and event details. The site features a modern cybersecurity aesthetic with a dark theme and cyan/purple gradient accents.

## ✨ Features

### 🏠 **Homepage**
- Hero section with countdown timer to DEF CON 33
- Event details and location information
- Challenge categories overview
- Rules and guidelines
- Sponsor showcase

### 🎮 **Challenges**
- Detailed challenge descriptions
- Individual challenge pages for each category:
  - **A Cyber Guru** - Advanced cybersecurity challenges
  - **Cyberbit** - Hardware and embedded systems
  - **Project Obsidian** - Special themed challenges

### 📋 **Information Pages**
- **About** - Blue Team Village background and mission
- **Rules** - Competition rules and guidelines
- **Past Winners** - Historical results from previous years
- **Location** - Venue details and directions
- **Privacy Policy** - Data protection information
- **Terms of Service** - Legal terms and conditions
- **Code of Conduct** - Community guidelines

### 🔍 **Search Functionality**
- Real-time search across challenges and content
- Mobile-responsive search interface
- Keyboard navigation support

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for all device sizes
- Touch-friendly navigation

## 🛠️ Technology Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font) (Sans & Mono)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/blueteamvillage/ctf-dot-blueteamvillage-dot-org-dc33.git
   cd ctf-dot-blueteamvillage-dot-org-dc33
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Type checking
pnpm type-check
```

## 📁 Project Structure

```
ctf-dot-blueteamvillage-dot-org-dc33/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── challenges/               # Challenge pages
│   │   ├── a-cyber-guru/        # A Cyber Guru challenges
│   │   ├── cyberbit/            # Cyberbit challenges
│   │   └── project-obsidian/    # Project Obsidian challenges
│   ├── code-of-conduct/         # Code of Conduct page
│   ├── location/                # Location page
│   ├── past-winners/            # Past winners pages
│   ├── privacy-policy/          # Privacy Policy page
│   ├── rules/                   # Rules page
│   ├── terms-of-service/        # Terms of Service page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── tabs.tsx
│   ├── challenge-categories.tsx
│   ├── content-editor.tsx
│   ├── countdown-timer.tsx
│   ├── event-details.tsx
│   ├── footer.tsx
│   ├── header.tsx
│   ├── hero.tsx
│   ├── rules.tsx
│   ├── search-results.tsx
│   └── sponsors.tsx
├── lib/                         # Utility functions
│   ├── search.ts               # Search functionality
│   └── utils.ts                # Helper utilities
├── public/                      # Static assets
│   ├── *.png                   # Images and logos
│   └── *.svg                   # SVG icons
├── components.json              # shadcn/ui configuration
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (`#22d3ee`) to Purple (`#a855f7`) gradient
- **Background**: Black (`#000000`) with gray accents
- **Text**: White (`#ffffff`) and gray variants
- **Accents**: Cyan, purple, and red for highlights

### Typography
- **Sans**: Geist Sans for body text and headings
- **Mono**: Geist Mono for code and technical content

### Components
The application uses a custom component library built with:
- **shadcn/ui** base components
- **Tailwind CSS** for styling
- **Lucide React** for icons

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_CTF_URL=https://ctfd.dc33.blueteamvillage.org
NEXT_PUBLIC_BTV_URL=https://blueteamvillage.org
```

### Tailwind CSS
The project uses Tailwind CSS with custom configuration for the cybersecurity theme. See `tailwind.config.js` for details.

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style
- Use TypeScript for all new code
- Follow the existing component patterns
- Use Tailwind CSS for styling
- Include proper TypeScript types

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏆 About Blue Team Village

Blue Team Village is a community-driven initiative focused on defensive cybersecurity. We provide education, training, and networking opportunities for security professionals through events, workshops, and competitions like this CTF.

### Contact
- **Email**: seceng@blueteamvillage.org
- **Website**: https://blueteamvillage.org
- **Twitter**: [@blueteamvillage](https://twitter.com/blueteamvillage)
- **GitHub**: [@blueteamvillage](https://github.com/blueteamvillage)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `pnpm build`
   - Output Directory: `.next`
   - Install Command: `pnpm install`
3. Deploy automatically on push to main branch

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
pnpm install
pnpm build
```

**TypeScript Errors**
```bash
# Run type checking
pnpm type-check
```

**Styling Issues**
```bash
# Rebuild Tailwind CSS
pnpm build:css
```

## 📊 Performance

The application is optimized for performance with:
- Next.js App Router for optimal routing
- Image optimization with Next.js Image component
- Font optimization with `next/font`
- Code splitting and lazy loading
- SEO optimization with metadata

---

**Built with ❤️ for the cybersecurity community**

*"Access Everywhere" - DEF CON 33 Theme*
