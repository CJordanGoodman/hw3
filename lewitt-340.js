createCanvas(640, 230);
noStroke();

// Create Rectangles
fill("#cc120c");
rect(10, 10, 200, 100);
rect(10, 120, 200, 100);
fill("#cfbd1b");
rect(220, 10, 200, 100);
rect(220, 120, 200, 100);
fill("#4e4bd1");
rect(430, 10, 200, 100);
rect(430, 120, 200, 100);

// Fill in Horizontal Lines
stroke("#6e2017");
for (var i = 0; i < 100; i += 4) {
  line(10, 10 + i, 209, 10 + i);
}
stroke("#d19a33");
for (var i = 0; i < 100; i += 4) {
  line(10, 120 + i, 209, 120 + i);
}
stroke("#a66317");
for (var i = 0; i < 100; i += 4) {
  line(220, 10 + i, 419, 10 + i);
}
stroke("#5f6e13");
for (var i = 0; i < 100; i += 4) {
  line(220, 120 + i, 419, 120 + i);
}
stroke("#05f2c7");
for (var i = 0; i < 100; i += 4) {
  line(430, 10 + i, 629, 10 + i);
}
stroke("#a80e00");
for (var i = 0; i < 100; i += 4) {
  line(430, 120 + i, 629, 120 + i);
}

// Paint center shape over lines
noStroke();
fill("#cc120c");
ellipse(110, 60, 80, 80);
rect(90, 130, 40, 80);
fill("#cfbd1b");
rect(280, 20, 80, 80);
beginShape();
vertex(300, 130);
vertex(340, 130);
vertex(360, 210);
vertex(280, 210);
endShape();
fill("#4e4bd1");
beginShape();
vertex(530, 20);
vertex(570, 100);
vertex(490, 100);
endShape();
beginShape();
vertex(490, 210);
vertex(510, 130);
vertex(570, 130);
vertex(550, 210);
endShape();



// Fill in Vertical Lines
stroke("#d19a33");
for (var i = 0; i <= 80; i += 4) {
  var dx = 110 - 70 - i;
  var theta = Math.acos(dx/40);
  var dy = Math.sin(theta) * 40;
  
  line(70 + i, 60 - dy, 70 + i, 60 + dy)
}
stroke("#6e2017");
for (var i = 0; i <= 40; i += 4) {
  line(90 + i, 130, 90 + i, 210);
}
stroke("#5f6e13");
for (var i = 0; i <= 80; i += 4) {
  line(280 + i, 20, 280 + i, 100);
}
stroke("#a66317");
for (var i = 0; i <= 20; i += 4) {
  line(280 + i, 210, 280 + i, 210 - (4 * i));
}
for (var i = 20; i <= 60; i += 4) {
  line(280 + i, 210, 280 + i, 130);
}
for (var i = 0; i <= 20; i += 4) {
  line(340 + i, 210, 340 + i, 210 - (4 * (20 - i)));
}
stroke("#a80e00");
for (var i = 0; i <= 40; i += 4) {
  line(490 + i, 100, 490 + i, 100 - (2 * i));
}
for (var i = 0; i <= 40; i += 4) {
  line(530 + i, 100, 530 + i, 100 - (2 * (40 - i)));
}
stroke("#05f2c7");
for (var i = 0; i <= 20; i += 4) {
  line(490 + i, 210, 490 + i, 210 - (4 * i));
}
for (var i = 20; i <= 60; i += 4) {
  line(490 + i, 210, 490 + i, 130);
}
for (var i = 0; i <= 20; i += 4) {
  line(550 + i, 130 + (4 * (20 - i)), 550 + i, 130);
}
