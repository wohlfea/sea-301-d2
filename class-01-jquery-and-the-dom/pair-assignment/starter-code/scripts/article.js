function Article (opts) {
  // TODO: Use the js object passed in to complete this contructor function:
  // Save the properties of `opts` into `this`.
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();

  $newArticle.data('category', this.category);

  // TODO: Use jQuery to fill in the template with properties
  // from this particular Article instance. We need to fill in:
  // the author name and url, the article title and body, and the
  // publication date.

  // Include the publication date as a 'title' attribute to show on hover:
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn)

  // Display the date as a relative number of "days ago":
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')

  $newArticle.append('<hr>');

  // TODO: This cloned article is no longer a template, so we should remove that class

  return $newArticle;
}

blog.rawData.sort(function(a,b) {
  return a.publishedOn < b.publishedOn;
});

blog.rawData.forEach(function(ele) {
  blog.articles.push(new Article(ele));
})

// TODO: Now that blog.articles has all our article objects,
// we need to stick them into the DOM. We can convert each one to html
// with the .toHTML function we defined on the prototype, but what
// do we do with that HTML? How do we do it for every individual
// article?
