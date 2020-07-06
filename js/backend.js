'use strict';
(function () {

  var URL = 'https://javascript.pages.academy/code-and-magick/data';

  window.backend = {

    backEndLoad: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.addEventListener('load', function () {
        if (xhr.status === '200') {
          onLoad(xhr.response);
        } else {
          onError('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });
      xhr.responseType = 'json';
      xhr.open('GET', URL);
      xhr.send();
    },
    backEndSave: function (data, onLoad, onError) { }

  };
  window.backend.backEndLoad();


})();
