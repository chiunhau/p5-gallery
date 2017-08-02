function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255, 0, 0);
}

function draw() {

}

function mouseDragged() {
	fill(255);
	noStroke();
	ellipse(mouseX, mouseY, 20, 20);
}
