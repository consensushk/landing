const paths = require('./config/paths');

const font = require('./src/styles/vars/font');
const colors = require('./src/styles/vars/colors');
const utils = require('./src/styles/vars/utils');

const variables = Object.assign({}, font, colors, utils);

module.exports = {
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('postcss-import')({
      path: paths.appSrc,
    }),
    require('postcss-nested'),
    require('postcss-composes'),
    require('postcss-cssnext')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      features: {
        customProperties: {
          variables,
        },
      },
    }),
  ],
};
