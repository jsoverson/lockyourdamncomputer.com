(function(window, document){

  var button = document.getElementById('start'),
    html = document.getElementsByTagName('html')[0];

  button.addEventListener('click', function(){
    enable();
    setup();
  });


  function enable() {
    goFullscreen(html);
    html.classList.add('enabled');
    setTimeout(addDisableTriggers, 5000);
  }

  function disable() {
    removeDisableTriggers();
    if (html.classList.contains('enabled')) html.classList.remove('enabled');
    html.classList.add('activated');
    activate();
    teardown();
  }

  function addDisableTriggers() {
    document.addEventListener('keypress',disable);
    document.addEventListener('mousemove',disable);
    document.addEventListener('click',disable);
  }

  function removeDisableTriggers() {
    document.removeEventListener('keypress',disable);
    document.removeEventListener('mousemove',disable);
    document.removeEventListener('click',disable);
  }

  function goFullscreen(elem) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    }
  }


}(this, this.document));