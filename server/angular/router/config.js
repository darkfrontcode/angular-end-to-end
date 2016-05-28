routerConfig.$inject = ['$urlRouterProvider', '$locationProvider']

export default function routerConfig($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true)
    $urlRouterProvider.otherwise('/')
}
