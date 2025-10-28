/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://kuku-official.vercel.app',
  generateRobotsTxt: false, // We have a custom robots.txt
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  alternateRefs: [
    {
      href: 'https://kuku-official.vercel.app/ja',
      hreflang: 'ja',
    },
    {
      href: 'https://kuku-official.vercel.app/en',
      hreflang: 'en',
    },
  ],
}
