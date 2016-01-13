$(runDemo(window)); // jQuery's "onDocReady"

function runDemo(my) {
  // DOM elements
  var $cmd   = $('#cmd');
  var $dbOut = $('#dbOut');
  var $rmLog = $('#rmLog');
  var $loadingZone = $('#loadingZone');

  clearLog();

  my.articles = [];
  var articlesURL = 'articles.json';
  var fragmentName = '';

  my.runSQLcmd = function(cmd) {
    webDB.execute(cmd,
                  function(response) { mylog('<hr>'+cmd+"<br>"+JSON.stringify(response)); }
                 );
  }

  // Render. Data must exist at this point!
  my.showArticles = function(A) {
    var articles = A;
    console.log("Async: Near top of showArticles(): articles="+articles);
    $.each(articles, function(i, a) {
      console.log('  a=' + a);
      var $row = $('<tr>');
      var $cell0 = $('<td>').text(a.author);   $row.append($cell0);
      var $cell1 = $('<td>').text(a['title']); $row.append($cell1);
      var $cell2 = $('<td>').text(a['body']);  $row.append($cell2);
      $dbOut.append($row);
    });
  }

  my.processJSON = function(data) {
    webDB.insertAllRecords(data);
    console.log("Async: Just after insertAllRecords() call.");
    // getAllArticles() is sequential and accepts a callback, so we can do this:
    webDB.getAllArticles(my.showArticles);
  }

  // Init SQL database. Wipe it clean since this is a demo and not Lab #8
  webDB.init();
  my.runSQLcmd('DROP TABLE articles');
  webDB.setupTables();

  // Get external data
  // Do what the blog app would do on a localStorage cache miss
  $.getJSON(articlesURL, my.processJSON);

  // Runs SQL command if at least one semicolon is inside the text area
  my.checksemi = function() {
    var cv = $cmd.val();
    if (cv.match(/.+;/)) {
      my.runSQLcmd(cv);
    }
  }

  $rmLog.on('click', clearLog);

  // Check for semicolon on each textarea content change
  $cmd.on('input', my.checksemi);
}
