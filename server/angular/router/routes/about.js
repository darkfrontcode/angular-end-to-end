routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider.state('about', {
        url: "/",
        templateUrl: "pages/about",
        controller: 'aboutController',
        controllerAs: 'about'
    })
}
