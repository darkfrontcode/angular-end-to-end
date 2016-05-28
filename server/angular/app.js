import angular from 'angular'
import friend_controller from './controllers/friends'

const app = angular.module('app', ['friend_controller', 'directives']);
