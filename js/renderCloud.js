'use strict';
(function () {
  window.renderCloud = {
    renderCloud: function (ctx, x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, window.renderStatistics.CLOUD_WIDTH, window.renderStatistics.CLOUD_HEIGHT);
    }
  };
})();
