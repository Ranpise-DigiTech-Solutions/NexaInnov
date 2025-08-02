/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.nexainnov.com', // <-- Replace with your site's URL
  generateRobotsTxt: true, // (optional)
  // You can add more configuration here, like paths to exclude.
  // For example:
  // exclude: ['/server-sitemap.xml', '/protected-page'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      // Add any additional sitemaps here
      // For example: `${process.env.SITE_URL}/server-sitemap.xml`,
    ],
  },
}