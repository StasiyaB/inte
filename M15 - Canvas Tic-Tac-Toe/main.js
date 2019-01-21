'use strict';
var canvas = document.getElementById("my-canvas");
var context= canvas.getContext('2d');
var h = 0;
var firstMove = Math.random();

context.fillStyle = '#333';
context.fillRect(10,10,620,620);
//greed lines
context.save();
context.beginPath();
context.moveTo(220,20);
context.lineTo(220,620);
context.moveTo(420,20);
context.lineTo(420,620);
context.moveTo(20,220);
context.lineTo(620,220);
context.moveTo(20,420);
context.lineTo(620,420);
context.lineWidth = 5;
context.setLineDash([20,20]);
context.lineDashOffset = 10;
context.strokeStyle = '#999'
context.stroke();
context.closePath();
context.restore();

//circle
function createCircle(x,y) {

  context.beginPath();
  context.arc(x,y,50,0,Math.PI*2,true);
  context.lineWidth = 5;
  context.stroke();
  context.closePath();
}
//cross
function createCross(x, y) {
  context.beginPath();
  context.moveTo(x-20,y+20);
  context.lineTo(x+20,y-20);
  context.moveTo(x-20,y-20);
  context.lineTo(x+20,y+20);
  context.lineWidth = 5;
  context.stroke();
  context.closePath();
}

canvas.addEventListener("click", onClickPosition);

function displayMove() {

  for (var i = 0; i <= 2; i++) {

      var x = 200*i+120;

    for (var j= 0; j<= 2; j++) {

      var y = 200*j+120;

      h += 20;
      context.strokeStyle = 'hsl('+h+',71%,50%)';
      if (firstMove < 1/2) {

        createCross(x,y);
      } else {

        createCircle(x,y);
      }
    }
  }
}

function onClickPosition(event) {

  var offset = canvas.getBoundingClientRect();
  var location = {  x: event.clientX - offset.left - 20, y: event.clientY - offset.top - 20}
  console.log(event.clientX);
  console.log(event.clientY);

  displayMove();

}
