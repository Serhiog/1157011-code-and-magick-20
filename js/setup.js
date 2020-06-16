'use strict';
// Константы
var ITEMSCOUNT = 4;
var NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COATCOLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYESCOLOR = ['black', 'red', 'blue', 'yellow', 'green'];

// Переменные
var wizzardTemplate = document.querySelector('#similar-wizard-template').content;
var setupList = document.querySelector('.setup-similar-list');

// Случайное число от min до (max+1)
function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

// Отображаем интерфейс настройки
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

// Создаем настройки персонажей
var createCharacter = function () {
  return {
    name: NAME[randomInteger(0, NAME.length - 1)] + ' ' + SURNAME[randomInteger(0, NAME.length - 1)],
    coatColor: COATCOLOR[randomInteger(0, COATCOLOR.length - 1)],
    eyesColor: EYESCOLOR[randomInteger(0, COATCOLOR.length - 1)],
  };
};

// Получаем нужное количество настроек
var createSetups = function () {
  var setups = [];
  for (var i = 0; i <= ITEMSCOUNT - 1; i++) {
    setups.push(createCharacter(i));
  }
  return setups;
};

var newWizzards = createSetups();

// Рендерим волшебников
var renderWizzards = function () {
  var fragment = new DocumentFragment();

  for (var i = 0; i < newWizzards.length; i++) {
    var cloneWizzard = wizzardTemplate.cloneNode(true);
    cloneWizzard.querySelector('.setup-similar-label').textContent = newWizzards[i].name;
    cloneWizzard.querySelector('.wizard-coat').style.fill = newWizzards[i].coatColor;
    cloneWizzard.querySelector('.wizard-eyes').style.fill = newWizzards[i].eyesColor;
    fragment.appendChild(cloneWizzard);
  }
  setupList.appendChild(fragment);
};
renderWizzards();

// Отображаем интерфейс выбора
var interfaceWizzards = document.querySelector('.setup-similar');
interfaceWizzards.classList.remove('hidden');

