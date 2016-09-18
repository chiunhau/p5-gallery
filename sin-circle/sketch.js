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

function bar(angle, len) {
	push();
	rotate(angle);
	ellipse(-len, 0, 2, 2);
	ellipse(len, 0, 2, 2);
	pop();
}

function bar2(angle, len) {
	push();
	rotate(angle);
	ellipse(-len, 0, 2, 2);
	ellipse(len * 0.4, 0, 2, 2);
	pop();
}

function tri(angle, len) {
	push();
	rotate(angle);
	fill('rgba(255, 255, 255, 0.5)');
	ellipse(-len,  0, 2, 2);
	ellipse(len, 0, 2, 2);
	ellipse(0, len * Math.sqrt(3), 2, 2);
	pop();
}

function tri2(angle, len) {
	push();
	rotate(angle);
	ellipse(-len, - len * Math.sqrt(3) / 2 , 4, 4);
	ellipse(len, - len * Math.sqrt(3) / 2, 4, 4);
	ellipse(0, len * Math.sqrt(3) / 2, 4, 4);
	pop();
}

function tri3(angle, len) {
	push();
	rotate(angle);
	ellipse(-len,  30, 4, 4);
	ellipse(len * 0.5, 30, 4, 4);
	ellipse(0, len * Math.sqrt(3), 4, 4);
	pop();
}

function tri4(angle, len) {
	push();
	rotate(angle);
	fill('rgba(255, 255, 255, 0.5)');
	ellipse(-len,  0, 2, 2);
	ellipse(0, len * Math.sqrt(3), 2, 2);
	pop();
}

function line1(angle, len) {
	push();
	translate(len * 3, 0);
	rotate(angle);
	stroke('rgba(255, 255, 255, 0.2)');
	line(-len / 2, -len / 2, len / 2, len / 2);
	pop();
}

function mouseClicked() {
	noLoop();
}
