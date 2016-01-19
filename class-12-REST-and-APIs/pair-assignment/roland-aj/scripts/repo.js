(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE: How would you like to fetch your repos? Don't forget to call the callback.

    // Fetch repo's with ajax - 1st requirement
    // Write a success function to do something
    var qs = '?per_page=100&sort=updated';
    $.ajax({
      url: 'https://api.github.com/users/wohlfea/repos' + qs,
      type: 'GET',
      headers: {'Authorization': 'token ' + githubToken},
      success: function(data, message, xhr){
        repos.all = data;
      }
    }).done(callback)
  };

  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
