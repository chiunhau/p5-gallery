var field1, field2;

function setup() {
	createCanvas(windowWidth, windowHeight);
	field1 = new Field(200, width, height);
	noStroke();
	fill(0);
	rect(0, 0, width / 2, height);
	fill(255);
	rect(width / 2, 0, width / 2, height);
}

function mouseMoved() {
	noStroke();
	fill(0);
	rect(0, 0, width / 2, height);
	fill(255);
	rect(width / 2, 0, width / 2, height);

	field1.update();
	field1.render();
}

function Field(n, w, h) {
	this.n = n;
	this.w = w;
	this.h = h;
	this.positions = [];
	this.highlights = [];

	for (var i = 0; i < this.n; i ++) {
		this.positions.push(new p5.Vector(random(w), random(h)))
	}

	this.update = function() {
		this.highlights = [];
		for (var i = 0; i < this.n; i ++) {
			if (p5.Vector.dist(this.positions[i], createVector(mouseX, mouseY)) < 130) {
				this.highlights.push(this.positions[i]);
			}
		}
	}

	this.render = function() {
		fill(0);
		noStroke();
		for (var i = 0; i < this.n; i ++) {
			if (this.positions[i].x < width / 2 ) {
				fill(255);
			}
			else {
				fill(0);
			}
			ellipse(this.positions[i].x, this.positions[i].y, 1, 1);
		}

		if (mouseX > 0 && mouseY > 0) {
			if (mouseX < width / 2 ) {
				stroke(255);
				for( var i = 0; i < this.highlights.length; i ++) {
					line(this.highlights[i].x, this.highlights[i].y, mouseX, mouseY);
				}
			}

			else {
				stroke(0);
				shuffle(this.highlights, true);
				var l = this.highlights.length;
				// if (this.highlights.length > 5) {
				// 	l = 6;
				// }
				// else {
				// 	l = this.highlights.length;
				// }
				for( var i = 0; i < l; i ++) {
					for ( var j = 0; j < l; j ++) {
						line(this.highlights[i].x, this.highlights[i].y, this.highlights[j].x, this.highlights[j].y);
					}

				}
			}
		}
	}
}
