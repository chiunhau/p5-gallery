function setup() {
	createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(HSL, 100);
  background(255, 0, 0);
  frameRate(30);
}

function draw() {
  background(255, 0, 0);
  translate(width / 2, height / 2);
  drawCircle((Math.cos(frameCount * 0.01) + 1) * 0.009);
}

function drawCircle(s) {
  for (var i = 0; i < 1000; i ++) {
    var hue = color(Math.sin(s * i * 0.1) * 50 + 50, 100, 50);
    fill(hue, 100, 60);
    noStroke();
    push();
    rotate(i * 2 * PI / 1000);
    var w = Math.floor(Math.cos(i * s) * 200 + 400);
    rect(0, 0, w, 2);
    pop();
  }
}

function mousePressed() {
  saveFrames('test', 'png', 20, 30);
}
