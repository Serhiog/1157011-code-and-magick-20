'use strict';
(function () {

  var userDialog = document.querySelector('.setup');
  var wizardTemplate = document.querySelector('#similar-wizard-template').content;
  var setupList = document.querySelector('.setup-similar-list');
  var wizardList = document.querySelector('.setup-similar');
  var form = userDialog.querySelector('.setup-wizard-form');

  wizardList.classList.remove('hidden');

  var onLoad = function (response) {
    var fragment = new DocumentFragment();

    for (var i = 0; i < response.slice(0, 4).length; i++) {
      var cloneWizard = wizardTemplate.cloneNode(true);
      cloneWizard.querySelector('.setup-similar-label').textContent = response[i].name;
      cloneWizard.querySelector('.wizard-coat').style.fill = response[i].colorCoat;
      cloneWizard.querySelector('.wizard-eyes').style.fill = response[i].colorEyes;
      fragment.appendChild(cloneWizard);
    }
    setupList.appendChild(fragment);

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
