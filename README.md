# Continuum X OÜ Website

A professional, bilingual (English/Arabic) website for Continuum X OÜ, an EU-registered company based in Tallinn, Estonia, specializing in AI, data analytics, business intelligence, and professional training.

## Features

- 🌐 **Bilingual Support**: Full English and Arabic (RTL) support
- 🎨 **Dark Mode**: Light and dark theme toggle with persistence
- 📱 **Responsive Design**: Mobile-first, fully responsive UI
- 🎯 **SEO Optimized**: Complete metadata, sitemap, and robots.txt
- 📧 **Form Handling**: Server actions with Zod validation and email notifications
- 💾 **Data Persistence**: JSON file storage for enrollments and consultations
- ♿ **Accessible**: WCAG-compliant components and semantic HTML

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: Server Actions + Zod validation
- **Email**: Nodemailer (SMTP)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Fonts**: Inter (English), Cairo (Arabic)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- SMTP credentials for email notifications (optional)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd continuumx-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env.local` file in the root directory:
```env
# SMTP Configuration for Email Notifications (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
TO_EMAIL=continuumx.contact@gmail.com

# Site URL (for production)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**Note**: If SMTP credentials are not provided, the site will still function. Form submissions will be saved to JSON files, but email notifications will be skipped (with a console warning).

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:

```bash
npm start
# or
yarn start
# or
pnpm start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

The site will automatically deploy on every push to the main branch.

### Environment Variables for Production

Make sure to set these in your deployment platform:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `TO_EMAIL`
- `NEXT_PUBLIC_SITE_URL`

## Project Structure

```
continuumx-website/
├── app/                    # Next.js App Router pages
│   ├── ar/                 # Arabic pages (RTL)
│   ├── courses/            # Course listing and detail pages
│   └── ...                 # Other pages
├── components/             # React components
│   ├── forms/              # Form components
│   ├── providers/          # Context providers
│   └── ui/                 # Reusable UI components
├── lib/                    # Utilities and configurations
│   ├── actions.ts          # Server actions
│   ├── courses.ts          # Course data
│   ├── i18n.ts             # Translation system
│   └── utils.ts            # Helper functions
├── public/                 # Static assets
│   └── brand/              # Logo and branding
└── data/                   # JSON data storage (gitignored)
```

## Logo Replacement

The logo is located at `/public/brand/logo.png`. To replace it:

1. Replace the file at `public/brand/logo.png` with your new logo
2. Ensure the logo is optimized (recommended: PNG with transparent background)
3. The logo is used in:
   - Navbar (40x40px)
   - Footer (40x40px)
   - Favicon (generated from logo)

## Language & Theme

- **Language**: Stored in `localStorage` as `locale` ('en' or 'ar')
- **Theme**: Stored in `localStorage` as `theme` ('light' or 'dark')
- Both persist across page reloads
- Language switcher updates the URL and applies RTL for Arabic

## Forms

### Enrollment Form (`/enroll` or `/ar/enroll`)

- Saves to `/data/enrollments.json`
- Sends email notification (if SMTP configured)
- Validates with Zod schema
- Redirects to thank-you page on success

### Consultation Form (`/consultation` or `/ar/consultation`)

- Saves to `/data/consultations.json`
- Sends email notification (if SMTP configured)
- Validates with Zod schema
- Redirects to thank-you page on success

## Courses

Six courses are available:

1. Data Analytics with Python
2. Power BI for Business Intelligence
3. Machine Learning Foundations
4. AI Tools for Professionals
5. Advanced Analytics for Supply Chain
6. Applied Deep Learning & Computer Vision

Each course has a detail page with full information in both languages.

## Brand Colors

- Primary Burgundy: `#7A0E1B`
- Burgundy Dark: `#5B0A13`
- Burgundy Soft: `#9B1B2A`
- Graphite: `#2B2B2B`
- Slate Gray: `#4B5563`
- Light Gray: `#E5E7EB`
- Background Light: `#FAF7F5`
- Surface Light: `#FFFFFF`
- Text Primary: `#1F2937`
- Text Muted: `#6B7280`
- Accent: `#C7A15A`

## License

Copyright © 2026 Continuum X OÜ. All rights reserved.

## Support

For questions or support, contact: continuumx.contact@gmail.com
