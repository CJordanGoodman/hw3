var rate = 0.3;
var px = 0;
var py = 0;
colorMode(HSB);
fill(0, 255, 255);
function draw() {
  clear();
  var targetX = mouseX;
  var targetY = mouseY;
  ellipse(px, py, 15, 15);
  px = targetX*rate + px*(1-rate); // rate is 0.1, or 10% -- (1-rate) is 0.9, or 90%
	py = targetY*rate + py*(1-rate);
}
