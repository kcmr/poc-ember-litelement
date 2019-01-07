/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'playroom',
    environment,
    services: [
      'toast'
    ]
  };

  return ENV;
};
