import angular from 'angular'
import uirouter from 'angular-ui-router'

import aboutRoute from '../router/routes/about'
import aboutController from '../controllers/about'

export default angular.module('about', [uirouter])
    .config(aboutRoute)
    .controller('aboutController', aboutController)
    .name
