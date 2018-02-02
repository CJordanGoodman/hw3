for (var i = 0; i < width/2; i += 5) {
	line(i, 0, i, 2 * i);
}
for (var i = width/2; i < width; i += 5) {
  line(i, 0, i, height);
}
