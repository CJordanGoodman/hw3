background("black");
noFill();
stroke("white");
// Circle
ellipse(width/2, height/2, width - 40, height - 40);
// Bounding box
rect(20, 20, width - 40, height - 40);
// Vertical lines at 1/4 and 3/4 of bounding box
line(20 + (width - 40)/4, 20, 20 + (width - 40)/4, height - 20);
line(20 + 3 * (width - 40)/4, 20, 20 + 3 * (width - 40)/4, height - 20);
// Diagonal lines
line(20, height - 20, 20 + (width - 40)/4, 20);
line(width - 20, height - 20, 20 + 3 * (width - 40)/4, 20);
line(20, height - 20, width/2, 20);
line(width - 20, height - 20, width/2, 20);
line(20 + 3 * (width - 40)/4, height - 20, width - 20, 20);
