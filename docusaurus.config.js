const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Eric Deng',
  titleDelimiter: '-',
  tagline: 'Front End Engineer',
  url: 'https://gcdeng.github.io',
  baseUrl: '/',
  projectName: 'gcdeng.github.io', // Usually your repo name.
  organizationName: 'gcdeng', // Usually your GitHub org/user name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  plugins: ['@docusaurus/plugin-google-gtag'],
  themeConfig: {
    navbar: {
      title: 'Eric Deng',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/about', label: 'About', position: 'left' },
        { to: '/resume', label: 'Resume', position: 'left' },
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
        docs: false,
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        // },
        blog: {
          path: './blog',
          routeBasePath: '/',
          showReadingTime: true,
          blogTitle: "Eric Deng's Blog",
          blogDescription: 'Personal blog by Eric Deng',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: { changefreq: 'weekly', priority: 0.5, trailingSlash: false },
      },
    ],
  ],
};
