function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0, 0);

	var grid = new f5.Grid();
	grid.set(40, 20, 40, 40);
	grid.go(function() {
		noFill();
		stroke(255);
		push();
		translate(20, 20);
		rotate(PI/4);
		rect(-20, -20, 40, 40);
		pop();
	})
}

function draw() {

}

function mouseClicked() {
	save();
}
