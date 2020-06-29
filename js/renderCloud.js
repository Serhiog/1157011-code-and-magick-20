'use strict';
(function () {
  window.renderCloud = {
    renderCloud: function (ctx, x, y, color) {
      ctx.fillStyle = color;
      ctx.fillRect(x, y, window.renderStatisticsConsts.CLOUD_WIDTH, window.renderStatisticsConsts.CLOUD_HEIGHT);
    }
  };
})();
