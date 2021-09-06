$("#watch").click(function (e) {
  $("#audio")[0].play();
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
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
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
    let time = getTime();
    let hourOp;
    let minutesOp;
    let secondsOp;

    if (time.hours < 6) {
      hourOp = time.hours + 6;
    } else {
      hourOp = time.hours - 6;
    }

    if (time.minutes < 30) {
      minutesOp = time.minutes + 30;
      secondsOp = time.seconds + 30;
    } else {
      minutesOp = time.minutes - 30;
      secondsOp = time.seconds + 30;
    }

    ctx.clearRect(0, 0, 500, 500); // reset canvas

    let xPosition = 200;
    let yPosition = 195;

    //Long lines
    drawLine(
      ctx,
      xPosition,
      yPosition,
      x2(time.hours, 12, xPosition, 70),
      y2(time.hours, 12, yPosition, 70),
      4.5,
      "rgba(2,2,6,255)"
    );
    drawLine(
      ctx,
      xPosition,
      yPosition,
      x2(time.minutes, 60, xPosition, 95),
      y2(time.minutes, 60, yPosition, 95),
      3,
      "rgba(2,2,6,255)"
    );
    drawLine(
      ctx,
      xPosition,
      yPosition,
      x2(time.seconds, 60, xPosition, 120),
      y2(time.seconds, 60, yPosition, 120),
      1.5,
      "red"
    );
    //Short lines
    drawLine(
      ctx,
      xPosition,
      yPosition,
      x2(hourOp, 12, xPosition, 22),
      y2(hourOp, 12, yPosition, 22),
      4.5,
      "rgba(2,2,6,255)"
    );
    drawLine(
      ctx,
      xPosition,
      yPosition,
      x2(minutesOp, 60, xPosition, 22),
      y2(minutesOp, 60, yPosition, 22),
      3,
      "rgba(2,2,6,255)"
    );
    drawLine(
      ctx,
      xPosition,
      yPosition,
      x2(secondsOp, 60, xPosition, 22),
      y2(secondsOp, 60, yPosition, 22),
      1.5,
      "red"
    );
    //Circles stop
    drawCircle(
      ctx,
      x2(time.hours, 12, xPosition, 70),
      y2(time.hours, 12, yPosition, 70),
      10,
      1,
      "rgba(2,2,6,255)",
      "rgba(244,244,244,255)"
    );
    drawCircle(
      ctx,
      x2(time.minutes, 60, xPosition, 95),
      y2(time.minutes, 60, yPosition, 95),
      10,
      1,
      "rgba(2,2,6,255)",
      "rgba(244,244,244,255)"
    );
    
    //Circles start
    drawCircle(ctx, xPosition, yPosition, 10, 0.5, "rgba(86,86,86,255)", "rgba(2,2,6,255)");
    drawCircle(ctx, xPosition, yPosition, 7, 0.5, "rgba(86,86,86,255)", "rgba(2,2,6,255)");
    drawCircle(
      ctx,
      xPosition,
      yPosition,
      3,
      1,
      "rgba(164,164,164,255)",
      "rgba(164,164,164,255)"
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
