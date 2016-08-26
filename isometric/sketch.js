"use strict";

var SIDE = 20;
var W = 2 * SIDE * Math.cos(Math.PI / 6);
var H = 2 * SIDE * Math.sin(Math.PI / 6);

var grids = [];

var colour = new ColorPool();

function setup() {

  colour.add(color(0, 255, 251));
  colour.add(color(39, 36, 143));
  colour.add(color(255, 255, 0));

  createCanvas(windowWidth, windowHeight);
  background(255, 0, 0);
  stroke(255);
  for (var i = 0; i < 70; i++) {
    for (var j = 0; j < 40; j++) {
      grids.push([i % 2 === 0 ? j * W : j * W + W / 2, i * H / 2 - 20]);
    }
  }
  // Math.floor(Math.random() * 4) +
  for (var _j = 0; _j < 40; _j++) {
    var randomGrid = grids[Math.floor(Math.random() * grids.length)];
    iso(randomGrid[0], randomGrid[1], 4);
  }

  for (var _j2 = 0; _j2 < 50; _j2++) {
    var randomGrid = grids[Math.floor(Math.random() * grids.length)];
    iso(randomGrid[0], randomGrid[1], 3);
  }

  for (var _j3 = 0; _j3 < 80; _j3++) {
    var randomGrid = grids[Math.floor(Math.random() * grids.length)];
    iso(randomGrid[0], randomGrid[1], 2);
  }

  for (var _j4 = 0; _j4 < 250; _j4++) {
    var randomGrid = grids[Math.floor(Math.random() * grids.length)];
    iso(randomGrid[0], randomGrid[1], 1);
  }

  for (var _j5 = 0; _j5 < 200; _j5++) {
    var randomGrid = grids[Math.floor(Math.random() * grids.length)];
    iso(randomGrid[0], randomGrid[1], 0.5);
  }

  for (var _j6 = 0; _j6 < 300; _j6++) {
    var randomGrid = grids[Math.floor(Math.random() * grids.length)];
    iso(randomGrid[0], randomGrid[1], 0.25);
  }
}

function iso(x, y, s) {
  var w = W * s;
  var h = H * s;

  fill(colour.select(0));
  quad(x, y, x + w / 2, y + h / 2, x, y + h, x - w / 2, y + h / 2);
  fill(colour.select(1));
  quad(x + w / 2, y + h / 2, x + w / 2, y + h * 1.5, x, y + 2 * h, x, y + h);
  fill(colour.select(2));
  quad(x - w / 2, y + h / 2, x, y + h, x, y + 2 * h, x - w / 2, y + h * 1.5);
}

function ColorPool() {
  this.pool = [];
  this.add = function (c) {
    this.pool.push(c);
  };
  this.select = function (n) {
    if (n >= 0) {
      return this.pool[n];
    } else {
      return this.pool[Math.floor(Math.random() * this.pool.length)];
    }
  };
}