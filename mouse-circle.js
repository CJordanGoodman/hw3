function draw() {
  clear();
	for (var i = 0; i < 360; i += 10) {
  	line(mouseX, mouseY, width/2 + 150 * Math.cos(i * Math.PI / 180), height/2 + 150 *Math.sin(i * Math.PI / 180));
	}
}
