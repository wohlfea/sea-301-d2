var Article = function(props) {
  this.author = props.author;
  this.title = props.title;
  this.body = props.body;
  this.publishedOn = props.publishedOn;
}

Article.prototype.toHTML = function() {
  // Here's the old way of templating.
  // How does jQuery let you keep the HTML in the HTML?
  return '<article>' +
    '<h1>' + this.title +'</h1>' +
    '</article>'
}
