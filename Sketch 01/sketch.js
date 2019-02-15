function setup() {

  createCanvas(400, 400);
	let c = color(255,255,0);
 	background(220);
	fill(c);
	ellipse(200,200,300,300);
}

function draw() {
	fill(0,0,0);
	ellipse(150,150,50,100);
	ellipse(250,150,50,100);
  noFill();
	arc(200, 240, 120, 100, 6.5, 3);
  strokeWeight(6);
}	



