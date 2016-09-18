function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(100);
	fill('yellow');
	noStroke();
	ellipse(width / 2 + sin(frameCount * 0.05) * 100, height / 2 + cos(frameCount * 0.05) * 100, 50, 50)
}
