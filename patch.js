function jordanPatch(x, y) {
  // Fill in background
  colorMode(HSB);
  fill(167, 100, 90);
  rect(x, y, 100, 100);
  //noFill();
  //stroke(238);
  //rect(x, y, 100, 100);
  
  // your code here!
  // Draw grid
  var i;
  for (i = 0; i < 100; i += 5) {
   	line(x, y + i, x + 99, y + i)
  }
  for (i = 0; i < 100; i += 5) {
   	line(x + i, y, x + i, y + 99)
  }
  
  colorMode(HSB);
  fill(0, 100, 255);
  
  // Draw Heart row by row
  for (i = 25; i < 35; i += 5) {
  	rect(x + i, y + 15, 5, 5); 
  }
  for (i = 65; i < 75; i += 5) {
  	rect(x + i, y + 15, 5, 5); 
  }
  for (i = 20; i < 40; i += 5) {
  	rect(x + i, y + 20, 5, 5); 
  }
  for (i = 60; i < 80; i += 5) {
  	rect(x + i, y + 20, 5, 5); 
  }
  for (i = 15; i < 45; i += 5) {
  	rect(x + i, y + 25, 5, 5); 
  }
  for (i = 55; i < 85; i += 5) {
  	rect(x + i, y + 25, 5, 5); 
  }
  for (i = 10; i < 90; i += 5) {
  	rect(x + i, y + 30, 5, 5); 
  }
  for (i = 10; i < 90; i += 5) {
  	rect(x + i, y + 35, 5, 5); 
  }
  for (i = 10; i < 90; i += 5) {
  	rect(x + i, y + 40, 5, 5); 
  }
  for (i = 10; i < 90; i += 5) {
  	rect(x + i, y + 45, 5, 5); 
  }
  for (i = 15; i < 85; i += 5) {
  	rect(x + i, y + 50, 5, 5); 
  }
  for (i = 15; i < 85; i += 5) {
  	rect(x + i, y + 55, 5, 5); 
  }
  for (i = 20; i < 80; i += 5) {
  	rect(x + i, y + 60, 5, 5); 
  }
  for (i = 25; i < 75; i += 5) {
  	rect(x + i, y + 65, 5, 5); 
  }
  for (i = 30; i < 70; i += 5) {
  	rect(x + i, y + 70, 5, 5); 
  }
  for (i = 35; i < 65; i += 5) {
  	rect(x + i, y + 75, 5, 5); 
  }
  for (i = 40; i < 60; i += 5) {
  	rect(x + i, y + 80, 5, 5); 
  }
  for (i = 45; i < 55; i += 5) {
  	rect(x + i, y + 85, 5, 5); 
  }

	// Draw lower X shapes
  for (i = 5; i < 25; i += 5) {
    rect(x + i, y + 65 + i, 5, 5);
  }
  for (i = 5; i < 25; i += 5) {
    rect(x + i, y + 90 - i, 5, 5);
  }
  for (i = 75; i < 95; i += 5) {
    rect(x + i, y - 5 + i, 5, 5);
  }
  for (i = 75; i < 95; i += 5) {
    rect(x + i, y + 160 - i, 5, 5);
  }
  
  // Draw upper diagonals X shapes
  for (i = 5; i < 20; i += 5) {
    rect(x + i, y + 20 - i, 5, 5);
  }
  for (i = 5; i < 20; i += 5) {
    rect(x + i, y + i, 5, 5);
  }
  for (i = 80; i < 95; i += 5) {
    rect(x + i, y - 75 + i, 5, 5);
  }
  for (i = 80; i < 95; i += 5) {
    rect(x + i, y + 95 - i, 5, 5);
  }
}
