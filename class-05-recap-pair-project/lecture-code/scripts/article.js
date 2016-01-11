var articles = [];

// article constructor
function Article (opts) {
    this.author = opts.author;
    this.authorUrl = opts.authorUrl;
    this.title = opts.title;
    this.category = opts.category;
    this.body = opts.body;
    this.publishedOn = opts.publishedOn;
}

// convert article object's properties to an "HTML snippet"
Article.prototype.toHtml = function() {
  var handleFunc = Handlebars.compile($('#article-template').text());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  console.log(this.body);
  this.body = marked(this.body)
  return (handleFunc(this));
    /* Call Handlebars
       Compute date
       Convert markdown to HTML
       Render "HTML snippet" and return it
    */
};


if (typeof rawData !== 'undefined') {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    articles.push(new Article(ele));
  })
};

articles.forEach(function(a){
  $('#articles').append(a.toHtml())
});
