app.factory('posts', ['$http', function($http) {
  var postService = {
    posts: [],

    getAll: function() {
      // blank fo rnow
    }
  };
  
  return postService;
}]);