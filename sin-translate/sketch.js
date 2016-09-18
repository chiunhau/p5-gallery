function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	fill(255);
	noStroke();
	background(0);
}

function draw() {
	translate(windowWidth / 2, windowHeight / 2);
	line1(frameCount * 0.02, Math.sin(frameCount * 0.0015)  * 150);
}

function line1(angle, len) {
	push();
	translate(len * 3, 0);
	rotate(angle);
	stroke('rgba(255, 255, 255, 0.2)');
	line(-len / 2, -len / 2, len / 2, len / 2);
	pop();
}

// click whenever you want to stop the animation
function mouseClicked() {
	noLoop();
}
