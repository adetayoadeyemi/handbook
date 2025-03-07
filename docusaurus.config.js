const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

module.exports = {
  title: "Jitsi Meet",
  tagline: "State-of-the-art video conferencing you can self-host.",
  url: "https://jitsi.github.io",
  baseUrl: "/handbook/",
  organizationName: "jitsi",
  projectName: "handbook",
  favicon: "img/favicon.png",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          editUrl: "https://github.com/jitsi/handbook/edit/master/",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/docs/user-guide/',
            from: '/docs/user-guide/user-guide-start',
          },
          {
            to: '/docs/dev-guide/',
            from: '/docs/dev-guide/dev-guide-start',
          },
          {
            to: '/docs/devops-guide/',
            from: '/docs/devops-guide/devops-guide-start',
          },
        ]
      }
    ]
  ],
  themeConfig: {
    algolia: {
      appId: 'K2ODL876OV',
      apiKey: 'fc233b31ee025aa87cf553bd9e7ce9e9',
      indexName: 'jitsi',
    },
    navbar: {
      title: "Jitsi Meet handbook",
      logo: {
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/intro",
          label: "Docs",
          position: "left",
        },
        {
          to: "docs/releases",
          label: "Releases",
          position: "left",
        },
        {
          href: "https://community.jitsi.org",
          label: "Community",
          position: "left",
        },
        {
          href: "https://jaas.8x8.vc",
          label: "JaaS",
          position: "left",
        },
        {
          href: 'https://github.com/jitsi',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    image: "img/undraw_online.svg",
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "docs/intro",
            },
            {
              label: "User guide",
              to: "docs/user-guide",
            },
            {
              label: "Developer guide",
              to: "docs/dev-guide",
            },
            {
              label: "Self-hosting guide",
              to: "docs/devops-guide",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Forum",
              href: "https://community.jitsi.org",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/jitsinews",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://jitsi.org",
            },
            {
              label: "GitHub",
              href: "https://github.com/jitsi",
            },
            {
              label: "JaaS: Jitsi as a Service",
              href: "https://jaas.8x8.vc"
            },
          ],
        },
      ],
      copyright: "Copyright © 8x8, Inc.",
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};
