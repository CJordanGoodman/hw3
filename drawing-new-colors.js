function setup() { 
  createCanvas(400, 400);
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
    fill(255, 0, 0);
  } else if (key == 'G') {
    fill(0, 255, 0);
  } else if (key == 'B') {
    fill(0, 0, 255); 
  } else if (key == 'C') {
		fill("#00a3a3");
	} else if (key == 'L') {
		fill("#a065d4");
	} else if (key == 'O') {
		fill("#f29925");
	}