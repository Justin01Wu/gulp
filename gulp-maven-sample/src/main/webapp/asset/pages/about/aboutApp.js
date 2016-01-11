(function (window) {
    'use strict';
    
    
    function _getCurrentPath() {
        var scripts = document.getElementsByTagName("script");
        var currentFile = scripts[scripts.length - 1].src;
        var currentPath = currentFile.substr(0, currentFile.lastIndexOf('/')) + "/";
        return currentPath;
    }
    
	window.testLib3 = function() {

		var myJs3Obj = new MyJs3({
			id : "lab4"
		});
		myJs3Obj.show();
		myJs3Obj.options.callBack = function(msg) {
			console.log(msg);
		};
		myJs3Obj.show();
	}    
    
    var root = _getCurrentPath();        
    console.log('root=') + root;
    
    var myAboutApp = angular.module('myAboutApp',[]);
    
    function aboutController($scope, $location, $routeParams) {
        console.log('in aboutController');
        console.log('$location.url=' + $location.$$url);
        console.log('$location.path=' + $location.$$path);

        $scope.actualTemplateUrl =  root + 'about.html';

        
        if ($routeParams.search) {
            $scope.message = 'Look for ' + $routeParams.search + '?';
        } else {
            $scope.message = 'Look! I am an about page.';
        }
    }
    
    myAboutApp.controller('aboutController', aboutController);   
    
})(window);
    