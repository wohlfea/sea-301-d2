(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#about').show().siblings().hide();

    // TODO: Call a function to load all the data.
    // Pass a view function as a callback, so the view will render after the data is loaded.

  };

  module.aboutController = aboutController;
})(window);
