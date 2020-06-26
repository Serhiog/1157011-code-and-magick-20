'use strict';

(function () {

  var FIREBALLCOLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireBallColor = document.querySelector('.setup-fireball-wrap');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var coat = document.querySelector('#coat');
  var eyes = document.querySelector('#eyes');
  var fireball = document.querySelector('#fireball');

  window.eventListener.isFill(wizardCoat, 'click', COATCOLOR, coat);

  window.eventListener.isFill(wizardEyes, 'click', EYESCOLOR, eyes);

  window.eventListener.isBackground(fireBallColor, 'click', FIREBALLCOLOR, fireball);

})();


