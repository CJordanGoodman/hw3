for (var i = 0; i < width/2; i += 10) {
  line(width/2 - i, i, width/2 + i, i);
}
for (var i = width/2; i > 0; i -= 10) {
  line(width/2 - i, width - i, width/2 + i, width - i);
}
