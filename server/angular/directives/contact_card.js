var directives = angular.module('directives', []);

directives.directive('contactCard', function(){
    return {
        restrict: 'E',
        scope: {
            firstName: '=',
            lastName: '='
        },
        transclude: true,
        replace: true,
        link: function(scope, element, attrs){
            // console.log(arguments, attrs);
            $(element).on({
                click: function(){
                    console.log('you have clicked here.')
                }
            })
        },
        template: [
            '<div>',
                '<span ng-transclude></span>',
                ' - ',
                '{{firstName}}',
                '&nbsp;',
                '{{lastName}}',
            '</div>'
        ].join(''),
        controller: function($scope){
            console.log($scope.firstName+' '+$scope.lastName);
        }
    }
});
