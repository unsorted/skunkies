module.exports = {
  presets: [
    [
      'next/babel',
      {
        'preset-env': {},
        'transform-runtime': {},
        'styled-jsx': {},
        'class-properties': {},
      },
    ],
    ['@emotion/babel-preset-css-prop'],
  ],
  plugins: ['macros', '@emotion/babel-plugin'],
};
