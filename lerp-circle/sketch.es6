const count = 100;
const radius = 200;

function setup() {
	createCanvas(windowWidth, windowHeight);
  frameRate(10);
}

function draw() {
  background(255);
  fill(255, 0, 0);
  ellipse(windowWidth / 2, windowHeight / 2, 10, 10)
  for (let i = 0; i < count; i ++) {
    const randomX = Math.floor(Math.random() * windowWidth)
    const randomY = Math.floor(Math.random() * windowHeight)

    const circleX = Math.cos(i * 2 * PI / count) * radius + windowWidth / 2;
    const circleY = Math.sin(i * 2 * PI / count) * radius + windowHeight / 2;
    console.log(circleX)

    let fader = 1 - (Math.abs(mouseX - windowWidth / 2) / (windowWidth / 2)) * 0.4;
    fill(100);
    noStroke();
    ellipse(lerp(randomX, circleX, fader), lerp(randomY, circleY, fader), 5, 5);
  }
}
