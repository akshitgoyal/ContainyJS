module.exports = {
  title: 'ContainyJS',
  tagline: 'Looking for an awesome and easy way to make cards or containers?',
  url: 'https://containyjs.herokuapp.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'csc309-fall-2020', // Usually your GitHub org/user name.
  projectName: 'js-library-goyalak2', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'ContainyJS',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/api',
          activeBasePath: 'docs',
          label: 'API Docs',
          position: 'left',
        },
                {
          href: '/example.html',
          activeBasePath: 'docs',
          label: 'Examples',
          position: 'left',
        },
        {
          href: 'https://github.com/csc309-fall-2020/js-library-goyalak2',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      
      copyright: `Copyright © ${new Date().getFullYear()} Akshit Goyal.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
