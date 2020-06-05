module.exports = {
  stories: ['../src/storybook/stories/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-viewport/register',
    './.storybook/palette-color/register.js',
    'storybook-addon-themes'
  ],
};
