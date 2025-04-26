// next-sitemap.config.ts
module.exports = {
  siteUrl: "https://byakko-engineer.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/admin/*", "/private/*"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://byakko-engineer.com/server-sitemap.xml"],
  },
};
