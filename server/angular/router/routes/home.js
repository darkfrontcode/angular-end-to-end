routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider.state('home', {
        url: "/",
        templateUrl: "pages/home",
        controller: 'homeController',
        controllerAs: 'home'
    })
}
