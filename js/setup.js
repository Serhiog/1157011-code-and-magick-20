'use strict';
// Константы
var ITEMSCOUNT = 4;
var NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALLCOLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

// Переменные
var wizardTemplate = document.querySelector('#similar-wizard-template').content;
var setupList = document.querySelector('.setup-similar-list');
var setup = document.querySelector('.setup');

// Случайное число от min до (max+1)
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// Создаем настройки персонажей
var createWizard = function () {
  return {
    name: NAME[randomInteger(0, NAME.length - 1)] + ' ' + SURNAME[randomInteger(0, NAME.length - 1)],
    coatColor: COATCOLOR[randomInteger(0, COATCOLOR.length - 1)],
    eyesColor: EYESCOLOR[randomInteger(0, COATCOLOR.length - 1)],
  };
};

// Получаем нужное количество настроек
var createWizards = function () {
  var setups = [];
  for (var i = 0; i <= ITEMSCOUNT - 1; i++) {
    setups.push(createWizard(i));
  }
  return setups;
};

var newWizards = createWizards();

// Рендерим волшебников
var renderWizards = function () {
  var fragment = new DocumentFragment();

  for (var i = 0; i < newWizards.length; i++) {
    var cloneWizard = wizardTemplate.cloneNode(true);
    cloneWizard.querySelector('.setup-similar-label').textContent = newWizards[i].name;
    cloneWizard.querySelector('.wizard-coat').style.fill = newWizards[i].coatColor;
    cloneWizard.querySelector('.wizard-eyes').style.fill = newWizards[i].eyesColor;
    fragment.appendChild(cloneWizard);
  }
  setupList.appendChild(fragment);
};
renderWizards();

// Отображаем интерфейс выбора
var wizardList = document.querySelector('.setup-similar');
var inputMenu = setup.querySelector('#active');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var fireBallColor = document.querySelector('.setup-fireball-wrap');

wizardList.classList.remove('hidden');

setupOpen.addEventListener('click', function () {
  setup.classList.remove('hidden');
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    setup.classList.remove('hidden');
  }
});

setupClose.addEventListener('click', function () {
  setup.classList.add('hidden');
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    setup.classList.add('hidden');
  }
});


document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27 && inputMenu !== document.activeElement) {
    setup.classList.add('hidden');
  }
});

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = COATCOLOR[randomInteger(0, COATCOLOR.length)];
  document.querySelector('#coat').value = wizardCoat.style.fill;
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = EYESCOLOR[randomInteger(0, EYESCOLOR.length)];
  document.querySelector('#eyes').value = wizardEyes.style.fill;
});

fireBallColor.addEventListener('click', function () {
  fireBallColor.style.backgroundColor = FIREBALLCOLOR[randomInteger(0, FIREBALLCOLOR.length)];
  document.querySelector('#fireball').value = fireBallColor.style.backgroundColor;
});
