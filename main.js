const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

let player1 = {
  player: 1,
  name: "SCORPION",
  hp: 90,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["knife"],
  attack: function () {
    console.log(this.name + " fight");
  },
};

let player2 = {
  player: 2,
  name: "SUB-ZERO",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["fist"],
  attack: function () {
    console.log(this.name + " fight");
  },
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(playerObj) {
  const $tempPlayer = createElement("div", `player${playerObj["player"]}`);
  const $tempProgressBar = createElement("div", "progressbar");
  const $tempCharacter = createElement("div", "character");
  const $tempLife = createElement("div", "life");
  const $tempName = createElement("div", "name");

  const $tempImg = createElement("img");

  $tempLife.style.width = `${playerObj["hp"]}%`;
  $tempLife.innerText = playerObj["hp"];

  $tempName.innerText = playerObj["name"];

  $tempImg.src = playerObj["img"];

  $tempProgressBar.appendChild($tempLife);
  $tempProgressBar.appendChild($tempName);
  $tempCharacter.appendChild($tempImg);
  $tempPlayer.appendChild($tempProgressBar);
  $tempPlayer.appendChild($tempCharacter);

  return $tempPlayer;
}

function changeHP(player) {
  const $playerLife = document.querySelector(
    `.player${player["player"]} .life`
  );

  player.hp -= Math.ceil(Math.random() * 20);
  $playerLife.style.width = `${player["hp"]}%`;

  if (player["hp"] <= 0) {
    player.hp = 0;
    $playerLife.style.width = `${player["hp"]}%`;
    $arenas.appendChild(playerLose(player["name"]));
  }
}

function playerLose(name) {
  const $loseTitle = createElement("div", "loseTitle");
  $loseTitle.innerText = `${name} lose`;
  return $loseTitle;
}

$randomButton.addEventListener("click", function () {
  changeHP(player1);
  changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
