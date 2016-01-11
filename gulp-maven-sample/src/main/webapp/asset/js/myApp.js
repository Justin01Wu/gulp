// myApp.js

// create the module and name it myApp
// also include ngRoute for all our routing needs
var myApp = angular.module('myApp', ['ngRoute','myAboutApp','myHomeApp']);

// configure our routes

myApp.config(function ($routeProvider) {

    $routeProvider
            // route for the home page
            .when('/', {                
            	template: "<div ng-include='actualTemplateUrl'></div>",
                controller: 'homeController'
            })

            // route for the about page
            .when('/about', {
            	template: "<div ng-include='actualTemplateUrl'></div>",
                controller: 'aboutController'
            });


});


// the following code is only for route monitor 
/*
myApp.run(['$rootScope', '$sce', '$location', '$route',
    function ($rootScope, $sce, $location, $route) {

        $rootScope.$on('$locationChangeStart', function (event, newUrl, oldUrl) {
            console.log('    ==>> in locationChangeStart');
            console.log('      ==>> going to change to ' + newUrl);
            console.log('      ==>> from  ' + oldUrl);

            // we can hide real url by this way:   
            //$rootScope.target = $location.search()['key']; // (equivalent) key = GET[key]
            // $rootScope.target = $location.search().key; // Other solution
            // it comes from  http://stackoverflow.com/questions/22841015/angularjs-how-to-change-location-path-in-routechangestart-event
        });

        $rootScope.$on('$routeChangeStart', function (event, next, current) {
            console.log('    ==>> in routeChangeStart');
            if (next) {
                if (next.$$route.keys.length > 0) {
                    console.log('      ==>> going to change to ' + next.$$route.keys[0].name);
                } else {
                    console.log('      ==>> going to change to ' + next.$$route.templateUrl);
                }
            }
            if (current) {
                if (current.$$route.keys.length > 0) {
                    console.log('      ==>> from ' + current.$$route.keys[0].name);
                } else {
                    console.log('      ==>> from ' + current.$$route.templateUrl);
                }
            }

        });

    }]);
*/