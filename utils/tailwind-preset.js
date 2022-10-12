const plugin = require('tailwindcss/plugin');
const pluginTypography = require('@tailwindcss/typography');
const { COLOR_THEMES, FONT_THEMES } = require('../themes');

const THEME = process.env.BLOG_THEME || 'default';
const FONT_PRIMARY = process.env.BLOG_FONT_HEADINGS || 'sans-serif';
const FONT_SECONDARY = process.env.BLOG_FONT_BODY || 'sans-serif';

const hoveredSiblingPlugin = plugin(function ({ addVariant, e }) {
  addVariant('hovered-sibling', ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `:hover + .hovered-sibling\\:${rule.selector.slice(1)}`;
    });
  });
});

const themesConfig = plugin(function ({ addComponents }) {
  const cssVars = {};

  Object.keys(COLOR_THEMES[THEME].colors).forEach((key) => {
    cssVars[`--color-${key}`] = `${COLOR_THEMES[THEME].colors[key]}`;
  });

  cssVars['--font-primary'] = FONT_THEMES[FONT_PRIMARY];
  cssVars['--font-secondary'] = FONT_THEMES[FONT_SECONDARY];

  const themeCompiled = {
    '.theme-compiled': cssVars,
  };

  addComponents(themeCompiled);
});

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: 'var(--color-primary)',
        'gradient-1': 'var(--color-gradient-1)',
        'gradient-2': 'var(--color-gradient-2)',
        'gradient-3': 'var(--color-gradient-3)',
        'gradient-4': 'var(--color-gradient-4)',
      },
      fonts: {
        primary: 'var(--font-primary)',
        secondary: 'var(--font-secondary)',
      },
      theme: {
        bejamas: {
          colors: {
            primary: '#FF8585',
            reddie: {
              colors: {
                primary: '#FF4D4D',
                'gradient-1': '#FFC700',
                'gradient-2': '#FF85DD',
                'gradient-3': '#FF85DD',
                'gradient-4': '#FF8585',
              },
            },
          },
        },
      },
      typography(theme) {
        return {
          dark: {
            css: {
              color: theme('colors.neutral.300'),
              '[class~="lead"]': { color: theme('colors.neutral.400') },
              a: { color: theme('colors.neutral.100') },
              strong: { color: theme('colors.neutral.100') },
              'ul > li::before': {
                backgroundColor: theme('colors.neutral.700'),
              },
              hr: { borderColor: theme('colors.neutral.800') },
              blockquote: {
                color: theme('colors.neutral.100'),
                borderLeftColor: theme('colors.neutral.800'),
              },
              h1: { color: theme('colors.neutral.100') },
              h2: { color: theme('colors.neutral.100') },
              h3: { color: theme('colors.neutral.100') },
              h4: { color: theme('colors.neutral.100') },
              code: { color: theme('colors.neutral.100') },
              'a code': { color: theme('colors.neutral.100') },
              pre: {
                color: theme('colors.neutral.200'),
                backgroundColor: theme('colors.neutral.800'),
              },
              thead: {
                color: theme('colors.neutral.100'),
                borderBottomColor: theme('colors.neutral.700'),
              },
              'tbody tr': { borderBottomColor: theme('colors.neutral.800') },
            },
          },
        };
      },
    },
  },
  variants: {
    extend: {
      borderRadius: ['first', 'last'],
      borderWidth: ['last', 'hovered-sibling'],
      typography: ['dark'],
    },
  },
  plugins: [hoveredSiblingPlugin, pluginTypography, themesConfig],
};
