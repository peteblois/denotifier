(function() {

/**
 * Runs in the context of the page.
 **/

App = function() {
  this.findNotification = this.findNotification.bind(this);

  this.findNotification();
}

App.prototype.findNotification = function() {

  var notification = document.querySelector('a[aria-label="Google Notifications"]');
  if (notification) {
    notification.style.opacity = .1;
    return;
  }

  window.setTimeout(this.findNotification, 500);
}

new App();
})();
