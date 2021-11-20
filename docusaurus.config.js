const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Eric Deng',
  url: 'https://gcdeng.com',
  baseUrl: '/',
  projectName: 'gcdeng.github.io', // Usually your repo name.
  organizationName: 'gcdeng', // Usually your GitHub org/user name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Eric Deng',
      logo: {
        alt: 'logo',
        src: 'img/logo.png',
      },
      items: [
        { to: 'blog', label: 'Blog', position: 'left' },
        { to: 'series', label: 'Series', position: 'left' },
        { to: 'resume', label: 'Resume', position: 'left' },
        {
          href: 'https://github.com/gcdeng',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.linkedin.com/in/gcdeng/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Eric Deng. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    gtag: {
      trackingID: 'G-YZ68LNP0FW',
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'series',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'Blog',
          blogDescription: 'Personal blog by Eric Deng',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: { changefreq: 'weekly', priority: 0.5 },
      },
    ],
  ],
};
