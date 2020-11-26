/*
Javascript for index.html
*/

AFRAME.registerComponent('do-something-once-loaded', {
  init: function () {
    // This will be called after the entity has properly attached and loaded.
    console.log('I am ready!');
    AFRAME.log('I am ready!');
  }
});

The code below that is supposed to handle the Playing and Pausing of the video never executes
AFRAME.registerComponent('videohandler', {
  init: function () {
    var marker = this.el;
    this.vid = document.querySelector("#vid");

    marker.addEventListener('markerFound', function () {
      this.vid.play();
      const img = this.el.sceneEl.querySelector('a-image');
      img.setAttribute('src', '#myvideo');
    }.bind(this));

    marker.addEventListener('markerLost', function() {
      this.vid.pause();
      //this.vid.currentTime = 0;
    }.bind(this));
  }
});
