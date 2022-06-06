// Sketchfab Viewer API: Start/Stop the viewer
var version = '1.12.0';
var uid = 'cedc8083eea54c30a8354eab4bccdf06';
var iframe = document.getElementById('api-frame');
var client = new window.Sketchfab(version, iframe);

var error = function error() {
  console.error('Sketchfab API error');
};

var success = function success(api) {
  api.addEventListener('viewerstart', function () {
    console.log('viewerstart');
  });
  api.addEventListener('viewerstop', function () {
    console.log('viewerstop');
  });
  api.start(function () {
    document.getElementById('start').addEventListener('click', function () {
      api.start();
    });
    document.getElementById('stop').addEventListener('click', function () {
      api.stop();
    });
    api.addEventListener('viewerready', function () {
      console.log('viewerReady');
    });
  });
};

client.init(uid, {
  success: success,
  error: error,
  autostart: 1,
  preload: 1
}); //////////////////////////////////
// GUI Code
//////////////////////////////////

function initGui() {
  var controls = document.getElementById('controls');
  var buttonsText = '';
  buttonsText += '<button id="start">Start</button>';
  buttonsText += '<button id="stop">Stop</button>';
  controls.innerHTML = buttonsText;
}

initGui(); //////////////////////////////////
// GUI Code end
//////////////////////////////////