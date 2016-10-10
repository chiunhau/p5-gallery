function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	colorMode(HSL, 100);
	fill(255);
	noStroke();
	background(0);
}

function draw() {
	translate(0, windowHeight / 2);
	translate(frameCount * 0.55, 0);
	line3(frameCount, Math.sin(frameCount * 0.008)  * 200, frameCount);
	// line3(frameCount * 0.008, Math.tan(frameCount * 0.008)  * 300, frameCount);
}

function line1(angle, len, i) {
	push();
	// translate(len * 3, 0);
	rotate(angle);
	strokeWeight(2);
	stroke((i * 0.1) % 100, 100, 50);
	line(-len / 4, -len / 4, len / 2, len / 2);
	pop();
}

function line2(angle, len, i) {
	push();
	// translate(len * 3, 0);
	rotate(angle);
	strokeWeight(3);
	stroke((i * 0.08) % 100, 100, 50);
	line(len, 0, -len, 0);
	pop();
}

function line3(angle, len, i) {
	push();
	// translate(len * 3, 0);
	rotate(Math.PI * Math.sin(angle * 0.01) / 2 + 1);
	strokeWeight(3);
	stroke((i * 0.1) % 100, 100, 50);
	line(len, 0, -len, 0);
	pop();
}
