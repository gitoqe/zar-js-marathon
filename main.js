/*
## Task #0

Создай один два объекта с именем разных игроков, где будут поля 

- name - это строка;
- hp - это число;
- img - это строка;
- weapon - это массив строк (пока можно написать любое оружие, которое вы сможете придумать, не имеет пока значение какое);
- attack - это функция, внутри которой нужно поместить console.log, который будет выводить сконкатинированную строку имя вашего персонажа + fight (<имя вашего персонажа> + ‘Fight...’);
*/
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
  let arenas = document.querySelector(".arenas");

  let temp_player = document.createElement("div");
  temp_player.classList.add(player);

  let temp_progress_bar = document.createElement("div");
  temp_progress_bar.classList.add("progressbar");

  let temp_character = document.createElement("character");
  temp_character.classList.add("character");

  let temp_life = document.createElement("life");
  temp_life.classList.add("life");
  temp_life.style.width = "100%";
	temp_life.innerText = obj["hp"];

  let temp_name = document.createElement("name");
  temp_name.classList.add("name");
  temp_name.innerText = obj["name"];

  let temp_img = document.createElement("img");
  temp_img.src = obj["img"];

  temp_progress_bar.appendChild(temp_life);
  temp_progress_bar.appendChild(temp_name);
  temp_character.appendChild(temp_img);
  temp_player.appendChild(temp_progress_bar);
  temp_player.appendChild(temp_character);

  arenas.appendChild(temp_player);
}

createPlayer("player1", player1)
createPlayer("player2", player2)
