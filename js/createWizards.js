'use strict';
(function () {

  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');

  var FIREBALLCOLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var fireBallColor = document.querySelector('.setup-fireball-wrap');
  var fireball = document.querySelector('#fireball');

  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };


  window.wizard.onEyesChange = function (color) {
    eyesColor = color;
    updateWizards();
  };

  window.wizard.onCoatChange = function (color) {
    coatColor = color;
    updateWizards();
  };

  window.eventListener.isBackground(fireBallColor, 'click', FIREBALLCOLOR, fireball);

  var onLoad = function (response) {
    wizards = response;
    updateWizards();
  };

  var onError = function (errorMessage) {
    var error = document.createElement('div');
    error.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    error.style.position = 'absolute';
    error.style.left = 0;
    error.style.right = 0;
    error.style.fontSize = '30px';
    error.textContent = errorMessage;

    document.body.insertAdjacentElement('afterbegin', error);
  };


  var onLoadForm = function () {
    userDialog.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onLoadForm, onError);
    evt.preventDefault();
  });

  window.backend.load(onLoad, onError);
})();
