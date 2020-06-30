'use strict';

var setupWindow = document.querySelector('.setup');
var dragElement = document.querySelector('.upload');

dragElement.addEventListener('mousedown', function (evt) {
  evt.preventDefault();

  var startPosition = {
    x: evt.clientX,
    y: evt.clientY
  };

  var drag = false;

  var moveElement = function (moveEvt) {
    moveEvt.preventDefault(moveEvt);

    drag = true;

    var shift = {
      x: startPosition.x - moveEvt.clientX,
      y: startPosition.y - moveEvt.clientY,
    };

    startPosition = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    setupWindow.style.top = (setupWindow.offsetTop - shift.y) + 'px';
    setupWindow.style.left = (setupWindow.offsetLeft - shift.x) + 'px';
  };

  var letGoMouse = function (upEvt) {
    upEvt.preventDefault();
    if (drag) {
      var cancelClick = function (clickEvt) {
        clickEvt.preventDefault();
        dragElement.removeEventListener('click', cancelClick);
      };
      dragElement.addEventListener('click', cancelClick);
    }
    document.removeEventListener('mousemove', moveElement);
    document.removeEventListener('mouseup', letGoMouse);

  };
  document.addEventListener('mousemove', moveElement);
  document.addEventListener('mouseup', letGoMouse);
});
