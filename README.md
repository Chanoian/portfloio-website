# Portfolio Website

A modern, responsive portfolio website built with React and Next.js, designed to showcase your professional experience, projects, certifications, and education. Styled with Tailwind CSS for a clean and customizable look.

## Features

- **Responsive Design**: Looks great on all devices, with adaptive layouts and image sizing.
- **Modern UI/UX**: Clean, card-based sections for Education, Certifications, Projects, and Experience.
- **Slick Side Navigation**: Custom SVG icons, active section highlighting, and logical ordering.
- **Certifications & Education**: Clickable certification cards, modern badge layouts, and clear academic achievements.
- **Projects Showcase**: Project cards with images, technology tags, and links to GitHub repositories.
- **Dark Mode Support**: Seamless light/dark theme toggle.
- **Accessibility**: Keyboard navigation and accessible elements.

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
 git clone https://github.com/yourusername/portfolio-website.git
 cd portfolio-website

# Install dependencies
npm install
# or
yarn install
```

### Running Locally
```bash
npm run dev
# or
yarn dev
```
Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```bash
npm run build
npm start
```

## Project Structure
```
portfolio-website/
├── components/         # Reusable React components (SideNav, Education, Certifications, etc.)
├── pages/              # Next.js pages
├── public/             # Static assets (images, favicon, etc.)
├── styles/             # Tailwind and global CSS
├── .gitignore
├── README.md
└── ...
```

## Customization
- Edit the data arrays in `components/` (e.g., `Projects.tsx`, `Certifications.tsx`) to update your own content.
- Replace images in `public/images/` with your own.
- Tweak Tailwind classes for further style customization.

## Deployment
You can deploy this site easily to Vercel, Netlify, or any static hosting provider that supports Next.js.

## License
This project is open source. Feel free to use, modify, and share!

---

**Made with ❤️ by Ara Chanoian**
