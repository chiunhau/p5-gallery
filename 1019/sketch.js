var boxes = [];

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
	for (var i = 0; i < 100; i ++) {
		boxes.push(new Box());
	}
}

function draw() {
	for (var i = 0; i < boxes.length; i ++) {
		boxes[i].update();
		boxes[i].render();
	}
}


function Box() {
	this.x = random(-width / 2, width / 2);
	this.y = random(-height / 2, height / 2);
	this.z = random(-200, 200);
	this.rotateX = random(0, 2 * PI);
	this.rotateY = random(0, 2 * PI);
	this.rotateZ = random(0, 2 * PI);
	this.size = random(10, 80);
	this.range = random(0, 50);

	this.update = function() {
			this.rotateX += 0.06;
			this.rotateY += 0.06;
			this.rotateZ += 0.06;
			this.x += map(Math.sin(frameCount * 0.01), -1, 1, -this.range, this.range);
			this.y += map(Math.cos(frameCount * 0.01), -1, 1, -this.range, this.range);
			this.z += map(Math.sin(frameCount * 0.01), -1, 1, -this.range, this.range);
	}

	this.render = function() {
		push();
		translate(this.x, this.y, this.z);
		rotateX(this.rotateX);
		rotateY(this.rotateY);
		rotateZ(this.rotateZ);
		box(this.size);
		pop();
	}
}
