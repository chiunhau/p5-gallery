function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSL, 100);
	background(0, 0);
}

function draw() {
	translate(0, windowHeight / 2);
	translate(frameCount * 0.5, 0);
	line1(frameCount * 0.01, Math.sin(frameCount * 0.002)  * 300, frameCount);
}

function line1(angle, len, i) {
	push();
	// translate(len * 3, 0);
	rotate(angle);
	strokeWeight(2);
	stroke(40 + sin(i * 0.01) * 20, 100, 50);
	line(-len / 4, -len / 4, len / 2, len / 2);
	pop();
}

function mouseClicked() {
	save();
}
