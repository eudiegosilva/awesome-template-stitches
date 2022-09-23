module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'multiple-themes-stitches',
    'storybook-addon-next',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  }
};
