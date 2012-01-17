Drupal.behaviors.requirejs = {
  attach: function (context, settings) {
    require.config({
      baseUrl: '/',
      paths: settings.requirejs.paths
    });
  }
};
