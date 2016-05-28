import angular from 'angular'
import router from 'angular-ui-router'

import homeController from './controllers/home'
import aboutController from './controllers/about'

const app = angular.module('app', ['ui.router']);

app.config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('home', { url: "/", templateUrl: "pages/home", controller: homeController })
            .state('about', { url: "/about", templateUrl: "pages/about", controller: aboutController })

        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise("/");
}])
