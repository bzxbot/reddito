'use strict'

app.controller('PostsCtrl', function ($scope, Post) {
	$scope.posts = [];
	$scope.post = {url: 'http://', title: ''};

	$scope.submitPost = function() {
		Post.save($scope.post, function (ref) {
			console.log(ref);
			console.log(ref.name);
			$scope.posts[ref.name] = $scope.post;
			console.log($scope.posts);
			console.log($scope.post);
			$scope.post = {url: 'http://', title: ''};
		});
	};

	$scope.deletePost = function(postId) {
		Post.delete({id: postId}, function() {
			delete $scope.posts[postId];
		});
	};
});
