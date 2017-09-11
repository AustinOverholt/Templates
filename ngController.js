(function(){
	'use strict';
	angular
		.module('myApp')
		.controller('mainController', mainController);

	mainController.$inject = ['$scope', 'mainService'];

	function mainController($scope, mainService)	{

		var vm = this;
		vm.$scope = $scope;
		vm.mainService = mainService;
		vm.$onInit = _init


		// The fold 

		function _init() {
			console.log('controller initialized');
		}

	}


})();