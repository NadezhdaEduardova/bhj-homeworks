const fhoto = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker_counter");

fhoto.onclick = function () {
  if (clickerCounter.textContent % 2 == 0) {
    fhoto.width = 300;
  } else {
    fhoto.width = 200;
  }
  clickerCounter.textContent ++;
}
