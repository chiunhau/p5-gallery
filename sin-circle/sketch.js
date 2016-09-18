function setup() {
	createCanvas(windowWidth, windowHeight);
	rectMode(CENTER);
	colorMode(HSL, 100);
	fill(255);
	noStroke();
	background(0);
	// translate(windowWidth / 2, windowHeight / 2);

	// for(var i = 0; i < 3000; i ++) {
	// 	line1(i * 0.01, Math.sin(i * 0.0005)  * 200, i);
	// }

}

function draw() {
	translate(0, windowHeight / 2);
	translate(frameCount * 0.4, 0);
	line1(frameCount * 0.01, Math.sin(frameCount * 0.001)  * 300, frameCount);
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

function bar(angle, len) {
	push();
	rotate(angle);
	ellipse(-len, 0, 1, 1);
	ellipse(len, 0, 1, 1);
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
	fill();
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


function line2(angle, len) {
	push();
	translate(frameCount * 0.5, 0);
	rotate(angle);
	stroke('rgba(255, 255, 255, 0.2)');
	line(-len / 2, -len / 2, len / 2, len / 2);
	pop();
}

function line3(angle, len) {
	push();
	rotate(angle);
	translate(100, 0);
	stroke('rgba(255, 255, 255, 0.2)');
	line(0, 0, len, 0);
	pop();
}

// function mouseClicked() {
// 	noLoop();
// 	save();
// }
