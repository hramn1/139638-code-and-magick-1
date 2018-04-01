'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var BAR_DISTANCE = 50;
var randomOpacity = Math.random();

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, CLOUD_Y + 2 * GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP, CLOUD_Y + 3.5 * GAP);

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_WIDTH + (BAR_DISTANCE + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP);
    ctx.fillText(times[i].toFixed(), CLOUD_X + BAR_WIDTH + (BAR_DISTANCE + BAR_WIDTH) * i, CLOUD_HEIGHT - BAR_DISTANCE + (BAR_HEIGHT * times[i]) / -maxTime);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_DISTANCE + BAR_WIDTH) * i, CLOUD_HEIGHT - 30, BAR_WIDTH, (BAR_HEIGHT * times[i]) / -maxTime);
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (randomOpacity + i / 10) + ')';
      ctx.fillRect(CLOUD_X + BAR_WIDTH + (BAR_DISTANCE + BAR_WIDTH) * i, CLOUD_HEIGHT - 30, BAR_WIDTH, (BAR_HEIGHT * times[i]) / -maxTime);
    }
  }
};
