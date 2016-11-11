function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	translate(width / 2, height / 2);
	drawSomething(Math.sin(frameCount * 0.0005) * 200, 10);
	// drawLine();
	// translate(width / 2, 0);
	// drawSomething(Math.tan(frameCount * 0.01) * 200, 50);
}

function drawSomething(l, x) {
	push();
	fill(0);
	rotate(frameCount / x);
	ellipse(0, l, 3, 3);
	pop();
}

function drawLine() {
	push();
	rotate(frameCount / 100);
	line(-20, 0, 20, 0);
	pop();
}
