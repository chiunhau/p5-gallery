var balls = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	for (var i = 0; i < 10; i ++) {
		for (var j = 0; j < 10; j ++) {
			balls.push(new Ball(createVector(i * 30, j * 30)));
		}
	}
}

function draw() {
	background(255);
	translate((windowWidth - 300) / 2, (windowHeight - 300) / 2);
	for (var i = 0; i < balls.length; i ++) {
		balls[i].update((Math.tan(frameCount * 0.01)) / 10);
		balls[i].render();
	}
}

function Ball(gridPos) {
	this.scaSize = Math.random() * 30 + 8;
	this.gridPos = gridPos;
	this.scaPos = createVector(Math.random() * 600 - 100, Math.random() * 300);
	this.currentPos = createVector(0, 0);
	this.currentSize = 1;

	this.update = function(fader) {
		this.currentPos.x = lerp(this.gridPos.x, this.scaPos.x, fader);
		this.currentPos.y = lerp(this.gridPos.y, this.scaPos.y, fader);
		this.currentSize = lerp(5, this.scaSize, fader);
	}

	this.render = function() {
		fill(0);
		ellipse(this.currentPos.x, this.currentPos.y, this.currentSize, this.currentSize);
	}
}
