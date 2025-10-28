# KUKU Official Website

みんなで創る神話IP - Co-Create a Mythical IP

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- next-intl (i18n)

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Localization

The site supports Japanese (ja) and English (en):
- Japanese (default): http://localhost:3000/ja
- English: http://localhost:3000/en

## Project Structure

```
src/
├── app/
│   ├── [locale]/          # Locale-based pages
│   │   ├── layout.tsx     # Root layout with i18n
│   │   ├── page.tsx       # Homepage
│   │   ├── license/       # License page
│   │   ├── guidelines/    # Guidelines page
│   │   └── contest/       # Contest page
│   └── api/               # API routes
├── components/            # Reusable UI components
├── lib/                   # Utility libraries
└── messages/              # i18n dictionaries (ja.json, en.json)
```

## Deployment

This project is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/kuku-official)

## License

See the [License page](https://kuku-official.vercel.app/ja/license) for details about using KUKU.
