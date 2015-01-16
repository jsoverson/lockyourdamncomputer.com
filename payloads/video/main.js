
var video;

function setup() {
  console.log('setup');
  video = document.getElementById('video');
  goFullScreen();
}

function activate() {
  console.log('activating');
  video.volume = 1;
  video.play();
}

function teardown() {

}

// called via the embedded object
function onYouTubePlayerReady() {
  console.log('youtube player ready');
}

function _videoEnded() {
  console.log('video ended');
  setTimeout(function(){
    window.location = '../../done.html'
  }, 1250);
}

