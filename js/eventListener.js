'use strict';

(function () {

  window.eventListener = {


    isAdd: function (target, event, element, classAd, key) {
      target.addEventListener(event, function (evt) {
        if (evt.key === key) {
          element.classList.add(classAd);
        }
        element.classList.add(classAd);
      });
    },

    isRemove: function (target, event, element, classRemove, key) {
      target.addEventListener(event, function (evt) {
        if (evt.key === key) {
          element.classList.remove(classRemove);
        }
        element.classList.remove(classRemove);
      });
    },

    isFill: function (target, event, object, element) {
      target.addEventListener(event, function () {
        target.style.fill = object[window.util.randomInteger(0, object.length)];
        element.value = target.style.fill;
      });
    },

    isBackground: function (target, event, object, element) {
      target.addEventListener(event, function () {
        target.style.backgroundColor = object[window.util.randomInteger(0, object.length)];
        element.value = target.style.backgroundColor;
      });
    },

  };
})();
