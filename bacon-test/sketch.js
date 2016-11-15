var xoff = 0;
var bacon;

function setup() {
	createCanvas(windowWidth, windowHeight);
	translate(100, 100);
	curveTightness(-0.1);
	noStroke();
	translate(100, 100);
	bacon = new Bacon(0, 100, 200, 300, 400, 500, 0, 0, 0, 0, 0, 0);

}

function draw() {
	background(0);
	var ys = [
		noise(xoff) * 100,
		noise(xoff + 100) * 100,
		noise(xoff + 200) * 100,
		noise(xoff + 300) * 100,
		noise(xoff + 400) * 100,
		noise(xoff + 500) * 100
	];

	bacon.update(ys)
	bacon.render();

	xoff += 0.01;
}

function Bacon(x1, x2, x3, x4, x5, y1, y2, y3, y4, y5) {
	this.x = [x1, x2, x3, x4, x5];
	this.y = [y1, y2, y3, y4, y5];

	this.update = function(ys) {
		this.y = ys;
	};

	this.renderStrip = function(stripWidth) {
		noStroke();
		beginShape();
		curveVertex(this.x[0], this.y[0]);
		curveVertex(this.x[0], this.y[0]);
		curveVertex(this.x[1], this.y[1]);
		curveVertex(this.x[2], this.y[2]);
		curveVertex(this.x[3], this.y[3]);
		curveVertex(this.x[4], this.y[4]);
		curveVertex(this.x[4], this.y[4]);
		curveVertex(this.x[4], this.y[4]);
		curveVertex(this.x[4], this.y[4] + stripWidth);
		curveVertex(this.x[4], this.y[4] + stripWidth);
		curveVertex(this.x[4], this.y[4] + stripWidth);
		curveVertex(this.x[3], this.y[3] + stripWidth);
		curveVertex(this.x[2], this.y[2] + stripWidth);
		curveVertex(this.x[1], this.y[1] + stripWidth);
		curveVertex(this.x[0], this.y[0] + stripWidth);
		curveVertex(this.x[0], this.y[0] + stripWidth);
		endShape();
	};

	this.render = function() {
		fill(255);
		this.renderStrip(120);

		fill(255, 0, 0);
		this.renderStrip(30);
		translate(0, 60);
		this.renderStrip(20);
		translate(0, 25);
		this.renderStrip(15);
		translate(0, 25);
		this.renderStrip(40);
	}
}
