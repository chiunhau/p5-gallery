"use strict";

var count = 100;
var radius = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background(255);
  fill(255, 0, 0);
  ellipse(windowWidth / 2, windowHeight / 2, 10, 10);
  for (var i = 0; i < count; i++) {
    var randomX = Math.floor(Math.random() * windowWidth);
    var randomY = Math.floor(Math.random() * windowHeight);

    var circleX = Math.cos(i * 2 * PI / count) * radius + windowWidth / 2;
    var circleY = Math.sin(i * 2 * PI / count) * radius + windowHeight / 2;
    console.log(circleX);

    var fader = 1 - Math.abs(mouseX - windowWidth / 2) / (windowWidth / 2) * 0.4;
    fill(100);
    noStroke();
    ellipse(lerp(randomX, circleX, fader), lerp(randomY, circleY, fader), 5, 5);
  }
}