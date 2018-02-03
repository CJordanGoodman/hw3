function setup() { 
  createCanvas(400, 400);
	background("white");
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
		diameter = 10;
		stroke("black");
    fill(255, 0, 0);
  } else if (key == 'G') {
		diameter = 10;
		stroke("black");
    fill(0, 255, 0);
  } else if (key == 'B') {
		diameter = 10;
		stroke("black");
    fill(0, 0, 255); 
  } else if (key == 'E') {
		noStroke();
		diameter = 30;
		fill("white");
	} 
}
