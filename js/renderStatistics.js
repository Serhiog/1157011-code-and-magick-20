'use strict';
(function () {

  window.renderCloud = {
    CLOUD_WIDTH: 420,
    CLOUD_HEIGHT: 270
  };

  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var SPACE_LEFT = 45;
  var SPACE_BETWEEN = 50;
  var BAR_WIDTH = 40;
  var barHeight = -150;

  window.renderStatistics = function (ctx, players, times) {

    window.renderCloud.renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    window.renderCloud.renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.fillText('Ура вы победили!', CLOUD_X + (GAP * 3), CLOUD_Y + 30);
    ctx.fillText('Список результатов:', CLOUD_X + (GAP * 3), CLOUD_Y + 50);
    var maxTime = window.util.getMaxElement(times);

    for (var i = 0; i < players.length; i++) {
      ctx.font = '16px PT Mono';
      ctx.fillStyle = '#000';
      ctx.fillText(players[i], (CLOUD_X + SPACE_LEFT) + ((GAP + 80) * i), (CLOUD_Y + window.renderCloud.CLOUD_HEIGHT - 25));

      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(212, 100%, ' + Math.floor(Math.random() * 100) + '%)';
      }
      ctx.fillRect(CLOUD_X + SPACE_LEFT + ((SPACE_BETWEEN + BAR_WIDTH) * i), CLOUD_Y + (window.renderCloud.CLOUD_HEIGHT - 50), BAR_WIDTH, (barHeight * times[i]) / maxTime);
      ctx.fillStyle = '#000';
      ctx.fillText(Math.round(times[i]), (CLOUD_X + SPACE_LEFT) + ((GAP + 80) * i), ((CLOUD_Y + window.renderCloud.CLOUD_HEIGHT - 60) + (barHeight * times[i]) / maxTime));
    }
  };
})();
