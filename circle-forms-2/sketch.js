function setup() {
	createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(HSL, 100);
  background(255, 0, 0);
}

function draw() {
  background(255, 0, 0);
  translate(width / 2, height / 2);
  drawCircle(Math.sin(frameCount * 0.001));
}

function drawCircle(s) {
  for (var i = 0; i < 100; i ++) {
    var hue = color(Math.sin(s * i * 0.1) * 50 + 50, 100, 50);
    fill(hue, 100, 60);
    noStroke();
    push();
    rotate(i * 2 * PI / 50 + frameCount * 0.01);
    var w = Math.floor(Math.tan(i * s) * 200 + 300);
    rect(0, 0, w, 10);
    pop();
  }
}
