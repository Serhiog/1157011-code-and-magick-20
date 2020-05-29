// Константы
var fireballSize = 22;

// Поведение фаербола
function getFireballSpeed (isWindFromLeft) {
  if (isWindFromLeft) {
    return 5;
  } else
    return 2;
}

// Параметры мага
var wizardSpeed = 3;
var wizardWidth = 70;
var WizardHeight = 1.337 * wizardWidth;

// Параметры игрового поля
function getWizardX (gameFieldWidth) {
  return (gameFieldWidth - wizardWidth) / 2;
 }
function getWizardY (gameFieldHeight) {
  return gameFieldHeight / 3;
}
