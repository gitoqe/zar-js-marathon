const $arenas = document.querySelector(".arenas");

let player1 = {
  name: "SCORPION",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["knife"],
  attack() {
    console.log(this.name + " fight");
  },
};

let player2 = {
  name: "SUB-ZERO",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["fist"],
  attack() {
    console.log(this.name + " fight");
  },
};

function createPlayer(player, obj) {
  const $tempPlayer = document.createElement("div");
  $tempPlayer.classList.add(player);

  const $tempProgressBar = document.createElement("div");
  $tempProgressBar.classList.add("progressbar");

  const $tempCharacter = document.createElement("character");
  $tempCharacter.classList.add("character");

  const $tempLife = document.createElement("life");
  $tempLife.classList.add("life");
  $tempLife.style.width = "100%";
	$tempLife.innerText = obj["hp"];

  const $tempName = document.createElement("name");
  $tempName.classList.add("name");
  $tempName.innerText = obj["name"];

  const $tempImg = document.createElement("img");
  $tempImg.src = obj["img"];

  $tempProgressBar.appendChild($tempLife);
  $tempProgressBar.appendChild($tempName);
  $tempCharacter.appendChild($tempImg);
  $tempPlayer.appendChild($tempProgressBar);
  $tempPlayer.appendChild($tempCharacter);

  $arenas.appendChild($tempPlayer);
}

createPlayer("player1", player1)
createPlayer("player2", player2)
