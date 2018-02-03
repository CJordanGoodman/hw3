function draw() {
  clear();
	for (var i = 0; i < width; i += 10) {
  	line(mouseX, mouseY, i, height);
	}
}
