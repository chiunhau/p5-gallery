var swatch = new f5.Swatch();
var swatch2 = new f5.Swatch();

var grid = new f5.Grid();
function setup() {
	createCanvas(windowWidth, windowHeight);

	noStroke();

	swatch.add(color(255, 0, 255));
	swatch.add(color(0, 0, 255));
	swatch.add(color(255, 255, 0));

	swatch2.add(color(100, 100, 255));
	swatch2.add(color(0, 255, 255));
	swatch2.add(color(0, 255, 0));

	grid.set(20, 20, 40, 40);


	grid.go(function() {
		fill(swatch.random());
		stroke(swatch2.random());
		strokeWeight(3);
		var size = Math.floor(Math.random() * 30 + 10);
		ellipse(0, 0, size, size);
	})




}

function draw() {

}
