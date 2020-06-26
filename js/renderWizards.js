'use strict';
(function () {
  console.log(window.createSetup.createWizard.name);
  var wizardTemplate = document.querySelector('#similar-wizard-template').content;
  var setupList = document.querySelector('.setup-similar-list');
  var renderWizards = function () {
    var fragment = new DocumentFragment();

    for (var i = 0; i < 4; i++) {
      var cloneWizard = wizardTemplate.cloneNode(true);
      cloneWizard.querySelector('.setup-similar-label').textContent = window.createSetup.createWizard.name;
      cloneWizard.querySelector('.wizard-coat').style.fill = window.createSetup.createWizard.coatColor;
      cloneWizard.querySelector('.wizard-eyes').style.fill = window.createSetup.createWizard.eyesColor;
      fragment.appendChild(cloneWizard);
    }
    setupList.appendChild(fragment);
  };
  renderWizards();

})();
