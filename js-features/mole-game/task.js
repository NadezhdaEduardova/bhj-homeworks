const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

const reload = () => {
	dead.textContent = 0;
	lost.textContent = 0;
}
const getHole = (index) => document.getElementById("hole${index}");

for (i = 1; i < 10; i++) {
  let hole = getHole(i);
  
  hole.onclick = function () {
    if (hole.classList.contains("hole_has-mole")) {
      dead.textContent++;
    } else {
      lost.textContent++;
    }
     if (dead == 10) {
       alert ("You are vin!");
       reload ();
     }
    if (lost == 5) {
       alert ("You are lost");
       reload ();
    }
  }
}
    
