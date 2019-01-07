import Engine from 'ember-engines/engine';
import loadInitializers from 'ember-load-initializers';
import Resolver from './resolver';
import config from './config/environment';

const { modulePrefix, services } = config;
const dependencies = { services };

const Eng = Engine.extend({
  modulePrefix,
  Resolver,
  dependencies
});

loadInitializers(Eng, modulePrefix);

export default Eng;
