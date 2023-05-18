const photo = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker_counter");

photo.onclick = function() {
  if (clickerCounter.textContent % 2 == 0) {
    photo.width = 300;
  } else {
    photo.width = 200;
  }
  clickerCounter.textContent ++;
}
