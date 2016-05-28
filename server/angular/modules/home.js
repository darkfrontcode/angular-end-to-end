import angular from 'angular'
import uirouter from 'angular-ui-router'

import homeRoute from '../router/routes/home'
import homeController from '../controllers/home'

import friends from '../services/friends'

export default angular.module('home', [uirouter, friends])
    .config(homeRoute)
    .controller('homeController', homeController)
    .name
