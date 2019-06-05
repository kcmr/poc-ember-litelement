'use strict';

const b = {
  chungos: [
    'chrome >= 30',
    'firefox >= 32',
    'ios >= 9',
    'last 1 edge versions'
  ],
  wenos: [
    'last 1 Chrome versions',
    'last 1 Firefox versions',
    'last 1 Safari versions'
  ]
};

const isCI = !!process.env.CI;
const isProduction = process.env.EMBER_ENV === 'production';

if (isCI || isProduction) {
  // No, gracias
  // browsers.push('ie 11');
}

const browsers = b.wenos;

module.exports = {
  browsers
};
