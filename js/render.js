'use strict';
(function () {
  var MAX_SIMILAR_WIZARD_COUNT = 4;
  var wizardTemplate = document.querySelector('#similar-wizard-template').content;
  var setupList = document.querySelector('.setup-similar-list');

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  window.render = function (response) {
    var takeNumber = response.length > MAX_SIMILAR_WIZARD_COUNT ? MAX_SIMILAR_WIZARD_COUNT : response.length;
    similarList.innerHTML = '';
    for (var i = 0; i < takeNumber; i++) {
      var cloneWizard = wizardTemplate.cloneNode(true);
      cloneWizard.querySelector('.setup-similar-label').textContent = response[i].name;
      cloneWizard.querySelector('.wizard-coat').style.fill = response[i].colorCoat;
      cloneWizard.querySelector('.wizard-eyes').style.fill = response[i].colorEyes;
      setupList.appendChild(cloneWizard);
    }
  };
  similar.classList.remove('hidden');
})();




