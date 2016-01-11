(function (window) {
    'use strict';
    
    
    function _getCurrentPath() {
        var scripts = document.getElementsByTagName("script");
        var currentFile = scripts[scripts.length - 1].src;
        var currentPath = currentFile.substr(0, currentFile.lastIndexOf('/')) + "/";
        return currentPath;
    }
    
    var root = _getCurrentPath();        
    console.log('root=') + root;
    
    var myHomeApp = angular.module('myHomeApp',[]);
    
    function homeController($scope, $location, $routeParams) {
        console.log('in homeController');
        
        //templateUrl: 'asset/pages/home/home.html',  
        console.log('root=') + root;
        $scope.actualTemplateUrl =  root + 'home.html';
    }
    
    myHomeApp.controller('homeController', homeController);   
    
})(window);