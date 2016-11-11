function setup() {
	createCanvas(windowWidth, windowHeight);
	background(10);
	stroke(100, 100, 200, 15);
}

function draw() {
	translate(width / 4, height / 2);
	machine(frameCount * 0.009, Math.tan(frameCount * 0.01) * 150, 400);
	translate(width / 2, 0);
	machine(frameCount * 0.009, Math.sin(frameCount * 0.01) * 150, 400);
}

function machine(rotation, radius, barLen) {
	push();
	rotate(rotation);
	translate(radius * Math.cos(rotation), radius * Math.sin(rotation))
	line(0, -barLen, 0, barLen);
	pop();
}
