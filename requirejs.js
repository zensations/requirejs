Drupal.behaviors.requirejs = {
  attach: function (context, settings) {
    require.config({
      baseUrl: settings.requirejs.baseUrl,
      paths: settings.requirejs.paths
    });
  }
};
