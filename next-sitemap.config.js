// sitemap.config.js
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://localhost:3000',
  generateRobotsTxt: true,
  exclude: ['/404'],
  generateIndexSitemap: false,
  outDir: './public'
};
