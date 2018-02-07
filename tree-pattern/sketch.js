var theta = 25, startL;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255, 0);
	stroke('#663100');
	strokeWeight(1);
	noLoop();
	frameRate(5);
	angleMode(DEGREES);
	startL = windowHeight * 0.22;
	translate(0, windowHeight - 50);
	translate(windowWidth / 2, 0);

	line(0, 0, 0, -startL);
	translate(0, -startL);

	branch(startL);

	translate(0, startL);
	branch(startL * 1.2);

}
// function mouseMoved() {
// 	background(255, 63, 0);
// 	line(0, 0, 0, -startL);
// 	line(0, 0, 0, -startL);
// 	translate(0, -startL);
//
// 	branch(startL);
//
// 	translate(0, startL);
// 	branch(startL * 1.2);
// }

function mouseClicked() {
	save();
}
function branch(l) {
	l *= random(0.6, 0.75);
	if(l > 7) {
		push();
		rotate(random(-theta, theta));
		line(0, 0, 0, -l);
		translate(0, -l);
		branch(l);
		pop();

		push();
		rotate(random(-theta, theta));
		line(0, 0, 0, -l);
		translate(0, -l);
		branch(l);
		pop();
	}

}
