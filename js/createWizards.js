'use strict';
(function () {
  var wizardTemplate = document.querySelector('#similar-wizard-template').content;
  var setupList = document.querySelector('.setup-similar-list');

  var createWizards = function () {
    var fragment = new DocumentFragment();

    for (var i = 0; i < 4; i++) {
      var cloneWizard = wizardTemplate.cloneNode(true);
      cloneWizard.querySelector('.setup-similar-label').textContent = window.renderSimilarWizards.createWizard().name;
      cloneWizard.querySelector('.wizard-coat').style.fill = window.renderSimilarWizards.createWizard().coatColor;
      cloneWizard.querySelector('.wizard-eyes').style.fill = window.renderSimilarWizards.createWizard().eyesColor;
      fragment.appendChild(cloneWizard);
    }
    setupList.appendChild(fragment);
  };
  createWizards();



  // window.load = function () {
  //   var fragment = new DocumentFragment();

  //   for (var i = 0; i < 4; i++) {
  //     var cloneWizard = wizardTemplate.cloneNode(true);
  //     cloneWizard.querySelector('.setup-similar-label').textContent = window.renderSimilarWizards.createWizard().name;
  //     cloneWizard.querySelector('.wizard-coat').style.fill = window.renderSimilarWizards.createWizard().coatColor;
  //     cloneWizard.querySelector('.wizard-eyes').style.fill = window.renderSimilarWizards.createWizard().eyesColor;
  //     fragment.appendChild(cloneWizard);
  //   }
  //   setupList.appendChild(fragment);
  // }, function () { });

  // var form = document.querySelector('.setup-wizard-form');
  // var setup = document.querySelector('.setup');
  // form.addEventListener('submit', function (evt) {
  //   window.upload(new FormData(form), function () {
  //     setup.classList.add('hidden');
  //   });
  //   evt.preventDefault();
  // });
})();
