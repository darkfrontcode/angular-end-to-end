import angular from 'angular'
import router from 'angular-ui-router'

import routerConfig from './router/config'

import home from './modules/home'
import about from './modules/about'

angular.module('app', [
    router,
    home,
    about
]).config(routerConfig)
