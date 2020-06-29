'use strict';

(function () {
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setup = document.querySelector('.setup');
  var inputMenu = setup.querySelector('#active');

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.key === 'Enter') {
      openSetupbyKey();
    }
    setupOpen.removeEventListener('keydown', openSetupbyKey);
  });

  var openSetupbyKey = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', closeSetupbyKey);
  };

  setupOpen.addEventListener('click', function () {
    openSetupbyClick();
    document.addEventListener('keydown', closeSetupbyKey);
  });

  var openSetupbyClick = function () {
    setup.classList.remove('hidden');
    setupOpen.removeEventListener('click', openSetupbyClick);
  };

  var closeSetupbyClick = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', closeSetupbyKey);
  };

  setupClose.addEventListener('click', function () {
    closeSetupbyClick();
  });

  var closeSetupbyKey = function (evt) {
    if (evt.key === 'Escape' && inputMenu !== document.activeElement) {
      setup.classList.add('hidden');
    }
  };

  setupClose.addEventListener('keydown', function () {
    closeSetupbyClick();
  });

})();
