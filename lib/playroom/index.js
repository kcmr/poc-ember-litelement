/* eslint-env node */
'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');
const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

module.exports = EngineAddon.extend({
  name: 'playroom',

  lazyLoading: {
    enabled: true
  },

  options: {
    autoImport: {
      forbidEval: true,
      webpack: {}
      // webpack: {
      //   module: {
      //     rules: [
      //       {
      //         test: /\.m?js$/,
      //         use: {
      //           loader: require.resolve('babel-loader'),
      //           options: {
      //             presets: [['@babel/preset-env', { targets: require('./config/targets') }]],
      //           },
      //         },
      //         include: readdirSync('node_modules')
      //           .map((name) => join(__dirname, 'node_modules', name))
      //           .filter((source) => lstatSync(source).isDirectory()),
      //       },
      //     ],
      //   },
      // }
    }
  },

  isDevelopingAddon() {
    return true;
  }
});
