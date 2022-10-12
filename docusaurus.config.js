const path = require('path');
const progress = require("./scripts/progress_lang.json");

const GITHUB_URL = 'https://github.com/gzaripov/pnpm.github.io';
const GITHUB_SPONSOR_URL = 'https://github.com/sponsors/pnpm';
const SPONSOR_URL = 'https://opencollective.com/pnpm';
const TRANSLATE_URL = "https://crowdin.com/project/pnpm";
const CRYPTO_DONATIONS_HREF = '/crypto-donations';
const LOCALE_CI = process.env.LOCALE_CI;
const DEFAULT_LOCALE = 'en';
const LOCALE_FULL_CODE = {
  zh: 'zh-CN',
  pt: 'pt-BR',
  es: 'es-ES',
}

function makeEditUrl (locale, path1, path2) {
  // Link to Crowdin for non-English docs
  if (locale !== DEFAULT_LOCALE) {
    return `https://crowdin.com/project/pnpm/${LOCALE_FULL_CODE[locale] || locale}`;
  }
  if (path1 === 'versioned_docs/version-7.x') {
    return `https://github.com/pnpm/pnpm.github.io/edit/main/docs/${path2}`;
  }
  // Link to GitHub for English docs
  return `https://github.com/pnpm/pnpm.github.io/edit/main/${path1}/${path2}`;
}

module.exports={
  "title": "pnpm",
  "tagline": "Fast, disk space efficient package manager",
  "url": "https://gzaripov.github.io",
  "baseUrl": "/pnpm.github.io/",
  "organizationName": "gzaripov",
  "projectName": "pnpm.github.io",
  "scripts": [
    "https://buttons.github.io/buttons.js",
    "/homepage.js",
  ],
  "favicon": "img/favicon.png",
  "customFields": {
    "users": require('./users.json'),
    "repoUrl": GITHUB_URL,
    "translationRecruitingLink": TRANSLATE_URL,
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          editUrl: ({locale, versionDocsDirPath, docPath}) => makeEditUrl(locale, versionDocsDirPath, docPath),
          "path": "./docs",
          "routeBasePath": "/",
          "sidebarPath": path.join(__dirname, "sidebars.json"),
          lastVersion: '7.x',
        },
        "gtag": {
          trackingID: "UA-91385296-1",
          anonymizeIP: true,
        },
        "blog": {
          "path": "blog",
          editUrl: ({locale, blogDirPath, blogPath}) => makeEditUrl(locale, blogDirPath, blogPath),
        },
        "theme": {
          customCss: require.resolve('./src/css/customTheme.css'),
        }
      }
    ]
  ],
  "plugins": [
    [
      "content-docs",
      ({
        "id": "community",
        "path": "community",
        "routeBasePath": "community",
        "sidebarPath": path.join(__dirname, "sidebarsCommunity.json"),
      }),
    ],
  ],
  "themeConfig": {
    "prism": {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    "navbar": {
      "title": "pnpm",
      "logo": {
        "src": "img/pnpm-no-name-with-frame.svg"
      },
      "items": [
        {
          "to": "motivation",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "/faq",
          "label": "FAQ",
          "position": "left"
        },
        {
          "to": "/community/articles",
          "label": "Community",
          "position": "left"
        },
        {
          "to": "/benchmarks",
          "label": "Benchmarks",
          "position": "left"
        },
        {
          type: 'docsVersionDropdown',
          "position": "right",
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              to: 'https://crowdin.com/project/pnpm',
              label: 'Help Us Translate',
            },
          ],
        },
        {
          label: '🧡 Sponsor Us',
          position: 'right',
          items: [
            {
              label: 'Open Collective',
              href: SPONSOR_URL,
            },
            {
              label: 'GitHub Sponsors',
              href: GITHUB_SPONSOR_URL,
            },
            {
              label: 'Crypto Donations',
              href: CRYPTO_DONATIONS_HREF,
            }
          ]
        },
        {
          href: 'https://github.com/pnpm/pnpm',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    "image": "img/ogimage.png",
    "footer": {
      "links": [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'installation'
            },
            {
              label: 'pnpm CLI',
              to: 'pnpm-cli',
            },
            {
              label: 'Workspace',
              to: 'workspaces',
            },
            {
              label: '.npmrc',
              to: 'npmrc',
            },
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'User Showcase',
              to: 'users'
            },
            {
              label: 'Project Chat',
              href: 'https://r.pnpm.io/chat',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/pnpmjs'
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCbxCCNH8jFiGuLA2uM_ZdJQ',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/pnpm'
            },
          ]
        },
        {
          title: 'Contributing',
          items: [
            {
              label: 'GitHub',
              href: GITHUB_URL,
            },
            {
              label: 'Help Us Translate',
              href: TRANSLATE_URL,
            },
            {
              label: 'Vote for us on stackshare',
              href: 'https://stackshare.io/pnpm',
            },
            {
              label: 'Like us on AlternativeTo',
              href: 'https://alternativeto.net/software/pnpm/about/',
            },
          ],
        },
        {
          items: [
            {
              html: `<a href="https://www.netlify.com">
  <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
</a>`,
            }
          ],
        },
      ],
      "copyright": "Copyright © 2015-2022 contributors of pnpm",
      "logo": {
        "src": "img/pnpm-light.svg"
      },
      "style": "dark",
    },
    "algolia": {
      "appId": "RAHRBBK2WL",
      "apiKey": "a337998a623aa8f80d2a97a79d565086",
      "indexName": "pnpm",
      "contextualSearch": true,
    },
  },
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: LOCALE_CI ? [LOCALE_CI] : ['en', 'ru'],
    localeConfigs: {
      en: { label: "English" },
      ru: { label: `Русский (${progress["ru"].translationProgress}%)` }
    },
  },
}
