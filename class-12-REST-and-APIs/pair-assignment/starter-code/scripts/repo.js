(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // TODO: How would you like to fetch your repos? Don't forget to call the callback.

    // Fetch repo's with ajax - 1st requirement
    // Write a success function to do something
    var qs = '?per_page=100&sort=updated';
    $.get('/github/users/bnates/repos' + qs).done(function(data, msg, xhr){
      repos.all = data;
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
