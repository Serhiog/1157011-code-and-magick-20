'use strict';

(function () {
  var wizardList = document.querySelector('.setup-similar');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setup = document.querySelector('.setup');
  var inputMenu = setup.querySelector('#active');

  wizardList.classList.remove('hidden');

  window.eventListener.isRemove(setupOpen, 'keydown', setup, 'hidden', 'Enter');

  window.eventListener.isAdd(setupClose, 'click', setup, 'hidden');

  window.eventListener.isRemove(setupOpen, 'click', setup, 'hidden');

  window.eventListener.isAdd(setupClose, 'keydown', setup, 'hidden', 'Enter');

  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape' && inputMenu !== document.activeElement) {
      setup.classList.add('hidden');
    }
  });

})();
