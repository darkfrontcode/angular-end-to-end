import angular from 'angular'
import uirouter from 'angular-ui-router'

import homeRoute from '../router/routes/home'
import homeController from '../controllers/home'

export default angular.module('home', [uirouter])
    .config(homeRoute)
    .controller('homeController', homeController)
    .name
