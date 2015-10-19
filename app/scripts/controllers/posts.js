'use strict';

app.controller('PostsCtrl', function ($scope, $location, Post, Auth) {
	$scope.posts = Post.all;

	$scope.post = {url: 'http://', title: ''};

	$scope.deletePost = function(post) {
		Post.delete(post);
	};

	$scope.canDeletePost = function(post) {
		return post.creatorUID === Auth.user.uid; 
	};
});
