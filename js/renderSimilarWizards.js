'use strict';

(function () {
  var NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var wizardList = document.querySelector('.setup-similar');

  wizardList.classList.remove('hidden');

  window.renderSimilarWizards = {
    createWizard: function () {

      return {
        name: NAME[window.util.randomInteger(0, NAME.length - 1)] + ' ' + SURNAME[window.util.randomInteger(0, NAME.length - 1)],
        coatColor: COATCOLOR[window.util.randomInteger(0, COATCOLOR.length - 1)],
        eyesColor: EYESCOLOR[window.util.randomInteger(0, COATCOLOR.length - 1)],
      };
    }
  };
})();
