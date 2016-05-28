import angular from 'angular'
import router from 'angular-ui-router'

import routerConfig from './router/config'

import homeModule from './modules/home'
import aboutModule from './modules/about'

angular.module('app', [
    router,
    homeModule,
    aboutModule
]).config(routerConfig)
