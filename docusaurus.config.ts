import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import tailwindPlugin from './plugins/tailwind-plugin.cjs';

const config: Config = {
  title: 'Docusaurus',
  tagline: 'Notes on Docusaurus',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://alxcreate.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'alxcreate', // Usually your GitHub org/user name.
  projectName: 'doc', // Usually your repo name.

  onBrokenLinks: 'warn', // 'ignore' | 'log' | 'warn' | 'throw'
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    tailwindPlugin,
    'docusaurus-plugin-sass',
    require.resolve('docusaurus-plugin-image-zoom')
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          breadcrumbs: false,
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/alxcreate/doc/tree/main/',
        },
        blog: {
          routeBasePath: 'blog',
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          showReadingTime: true,
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/alxcreate/doc/tree/main/',
        },
        theme: {
          customCss: [
            require.resolve('./node_modules/modern-normalize/modern-normalize.css'),
            require.resolve('./node_modules/@ionic-internal/ionic-ds/dist/tokens/tokens.css'),
            require.resolve('./src/styles/custom.scss'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    '@docusaurus/theme-live-codeblock',
    [
      // @ts-ignore
      "@easyops-cn/docusaurus-search-local",
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      // @ts-ignore
      ({
        hashed: true,
        language: ["ru", "en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
    },
    navbar: {
      hideOnScroll: false,
      logo: {
        alt: 'Site Logo',
        src: `img/docusaurus.png`,
        srcDark: `img/docusaurus.png`,
        href: '/',
        target: '_self',
        // width: 139,
        // height: 28,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Notes',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          type: 'html',
          position: 'right',
          value: '<div class="separator" aria-hidden></div>',
        },
        {
          href: 'https://github.com/alxcreate/doc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.okaidia,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: [
        'java',
        'json',
        'bash',
        'powershell',
        'csharp',
        'csv',
        'docker',
        'ini',
        'http',
        'hcl',
        'go',
        'python',
        'regex',
        'sql',
        'toml',
        'uri',
        'visual-basic',
        'yaml',
      ],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'highlight-next-line-error',
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
