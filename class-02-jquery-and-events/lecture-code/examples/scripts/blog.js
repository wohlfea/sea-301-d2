var blog = {};
blog.articles = [];

blog.truncateArticles = function() {
  $('article p:not(:first-child)').hide();
  $('main').on('click', '.read-on', function(event) {
    event.preventDefault();
    $(this).parent().find('p').fadeIn();
    $(this).hide();
  });
};
