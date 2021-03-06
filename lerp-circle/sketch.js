"use strict";

var count = 150;
var radius = 180;

var dots = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (var i = 0; i < count; i++) {
    dots.push(new Dot(i));
  }
}

function draw() {
  // background(255);
  translate(windowWidth / 2, windowHeight / 2);
  rotate(frameCount * 0.011);
  translate(-windowWidth / 2, -windowHeight / 2);
  var fader = 1 - Math.abs(mouseX - windowWidth / 2) / (windowWidth / 2) * 0.5;
  for (var i = 0; i < count; i++) {

    dots[i].update(fader);
    dots[i].render();
  }
}

function Dot(i) {
  var circleX = Math.floor(Math.cos(i * 2 * Math.PI / count) * radius + windowWidth / 2);
  var circleY = Math.floor(Math.sin(i * 2 * Math.PI / count) * radius + windowHeight / 2);
  this.circlePos = createVector(circleX, circleY);
  this.randomPos = createVector(Math.floor(Math.random() * height + (width - height) / 2), Math.floor(Math.random() * height));
  this.currentPos = this.randomPos.copy();
  this.size = Math.floor(Math.random() * 18 + 1);
  this.fillColor = color(Math.random() * 50 + 200);
}

Dot.prototype.update = function (fader) {
  this.currentPos.x = lerp(this.randomPos.x, this.circlePos.x, fader);
  this.currentPos.y = lerp(this.randomPos.y, this.circlePos.y, fader);
  // this.size = Math.floor(Math.sin(frameCount * 0.01) * 20 + 5);
};

Dot.prototype.render = function () {
  stroke(0);
  fill(this.fillColor);
  ellipse(this.currentPos.x, this.currentPos.y, this.size, this.size);
};