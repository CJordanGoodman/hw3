for (var i = 0; i < width; i += 64) {
	for (var j = 50; j > 7; j -= 12) {
    rect(i + 50 - j/2, height/2 - j/2, j, j);
  }
}
