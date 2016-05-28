'use strict';

require('babel-core/register')({
    presets: ["es2015","stage-0"]
});

var environment = process.env.NODE_ENV || 'development';
environment==='production' ? require('./server/config/production') : require('./server/config/development');
