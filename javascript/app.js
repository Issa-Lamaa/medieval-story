 function theName() {
  document.getElementById("loginForm").style.display = 'none';
  let badName = document.getElementById("badName").value;
  document.getElementById("man").innerHTML = badName;
  document.getElementById("manTwo").innerHTML = badName;
  document.getElementById("manThree").innerHTML = badName;
  document.getElementById('game').style.display = 'block';
  let heroName = document.getElementById("heroName").value;
  document.getElementById("dude").innerHTML = heroName;
  document.getElementById("dudeTwo").innerHTML = heroName;
  document.getElementById("dudeThree").innerHTML = heroName;
  document.getElementById("dudeFour").innerHTML = heroName;
  document.getElementById("dudeFive").innerHTML = heroName;
  document.getElementById("dudeSix").innerHTML = heroName;
  document.getElementById("dudeSeven").innerHTML = heroName;
  document.getElementById("dudeEight").innerHTML = heroName;
  document.getElementById('oof').style.display = 'none';
 }

let theOutcome = document.getElementById('outcome');

function backDown() {
  outcome.innerHTML = "Sir Mace: Ha! I knew you were just a coward like everyone else! [GAME OVER]" ;
}

function nope() {
  outcome.innerHTML = "And so the fight begun... Wihin seconds, Sir Mace fell and begged for mercy.";
  document.getElementById("rest").style.display = 'block';
}

let theLife = document.getElementById('life');

let theLiving = document.getElementById('living');

function kill() {
  theLife.innerHTML = "And so the king was dead, killed by his own fighter";
  document.getElementById('living').style.display = 'block';
}

function spare() {
  theLife.innerHTML = "The worried knight left the room. Panicking, he saw his life had no purpose since he had decided to forfeit his life's training for nothing, he realized he had left thousands to suffer, and so, feeling guilty, he slit his wrists with his sword, and slowly bled to death...";
  document.getElementById('living').style.display = 'none';
}