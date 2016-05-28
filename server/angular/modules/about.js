import angular from 'angular'
import uirouter from 'angular-ui-router'

import aboutRoute from '../router/routes/about'
import aboutController from '../controllers/about'

import friends from '../services/friends'

export default angular.module('about', [uirouter, friends])
    .config(aboutRoute)
    .controller('aboutController', aboutController)
    .name
