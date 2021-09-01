let audio = document.getElementById("audio");
let count = 0;

$("#watch").click(function (e) {
    audio.play();
  e.preventDefault();
});

(function () {
  function x2(n, i, x1, r) {
    return x1 + r * Math.sin((2 * Math.PI * n) / i);
  }

  function y2(n, i, y1, r) {
    return y1 - r * Math.cos((2 * Math.PI * n) / i);
  }

  function getTime() {
    var date = new Date();
    return {
      hours: date.getHours(),
      minutes:
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes(),
      seconds:
        date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds(),
    };
  }

  function drawCircle(ctx, x, y, r, width, strokeColor, background) {
    ctx.beginPath();
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = background;
    ctx.lineWidth = width;
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  }

  function drawLine(ctx, xStart, yStart, xStop, yStop, width, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.moveTo(xStart, yStart);
    ctx.lineTo(xStop, yStop);
    ctx.stroke();
    ctx.closePath();
  }

  function startClock(ctx) {
    var time = getTime();

    ctx.clearRect(0, 0, 500, 500); // reset canvas

    drawLine(
      ctx,
      200,
      200,
      x2(time.hours, 12, 200, 55),
      y2(time.hours, 12, 200, 55),
      4,
      "rgba(2,2,6,255)"
    ); // hours
    drawCircle(ctx, 200, 200, 7, 7, "rgba(2,2,6,255)", "rgba(2,2,6,255)");
    drawCircle(
      ctx,
      x2(time.hours, 12, 200, 55),
      y2(time.hours, 12, 200, 55),
      5,
      5,
      "rgba(244,244,244,255)",
      "rgba(244,244,244,255)"
    );

    drawLine(
      ctx,
      200,
      200,
      x2(time.minutes, 60, 200, 75),
      y2(time.minutes, 60, 200, 75),
      4,
      "rgba(2,2,6,255)"
    ); // minutes

    drawCircle(ctx, 200, 200, 5, 7, "rgba(86,86,86,255)", "rgba(86,86,86,255)");
    drawCircle(
      ctx,
      x2(time.minutes, 60, 200, 75),
      y2(time.minutes, 60, 200, 75),
      5,
      5,
      "rgba(244,244,244,255)",
      "rgba(244,244,244,255)"
    );

    drawLine(
      ctx,
      200,
      200,
      x2(time.seconds, 60, 200, 95),
      y2(time.seconds, 60, 200, 95),
      4,
      "rgba(2,2,6,255)"
    ); // seconds
    drawCircle(
      ctx,
      200,
      200,
      2,
      7,
      "rgba(164,164,164,255)",
      "rgba(164,164,164,255)"
    );
    drawCircle(
      ctx,
      x2(time.seconds, 60, 200, 95),
      y2(time.seconds, 60, 200, 95),
      5,
      5,
      "rgba(244,244,244,255)",
      "rgba(244,244,244,255)"
    );
  }

  let canvas = document.getElementById("clock-canvas");
  let ctx;

  if (canvas.getContext) {
    ctx = canvas.getContext("2d");

    startClock(ctx);

    setInterval(function () {
      startClock(ctx);
    }, 1000);
  } else {
    document.getElementsByTagName("body")[0].innerHTML +=
      "<h2>Canvas not supported.</h2>";
  }
})();
