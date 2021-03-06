'use strict';

app.controller('AuthCtrl', function ($scope, $location, Auth) {
	if (Auth.signedIn()) {
		$location.path('/');
	}

	$scope.login = function () {
		Auth.login($scope.user).then(function () {
			$location.path('/');
		}, function(error) {
			$scope.error = error.toString();
		});

	};

	$scope.register = function () {
		Auth.register($scope.user).then(function() {
			return Auth.login($scope.user).then(function() {
				Auth.user.username = $scope.user.username;
				return Auth.createProfile(Auth.user);
			}).then(function() {
				$location.path('/');
			});
		}, function(error) {
			$scope.error = error.toString();
		});
	};

});
