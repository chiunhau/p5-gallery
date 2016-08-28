var grid_size = 20;
var bar_width = 10;
var colorPool;


function setup() {
	createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  background(200);
  colorMode(HSL, 100);
  colorPool = new ColorPool();

  colorPool.add(color(60, 100, 50));

  console.log(colorPool.pool)
  for (var i = 0; i < Math.floor(height / grid_size); i ++) {
    for (var j = 0; j < Math.floor(width / grid_size); j ++) {
      var randomAngle = Math.random() >= 0.5 ? PI / 4 : -PI / 4;
      fill(colorPool.select())
      drawBar(j * grid_size, i * grid_size, grid_size / Math.cos(PI / 4) + bar_width, bar_width, randomAngle)
    }
  }
}

function draw() {

}

function drawBar(cx, cy, w, h, angle) {
  noStroke();
  push();
  translate(cx, cy);
  rotate(angle);
  rect(0, 0, w, h, 100, 100, 100, 100);
  pop();
}

function ColorPool(colorMode, max) {
  this.pool = [];

  this.add = function(c) {
    this.pool.push(c);
  }

  this.select = function() {
    return this.pool[Math.floor(Math.random() * this.pool.length)]
  }

}
