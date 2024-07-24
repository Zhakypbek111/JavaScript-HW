let a = 10;
if (a === 10) {
  console.log("Верно");
} else {
  console.log("Не верно");
}

//  Задания 2

let batir = 33;
if (batir <= 20) {
  console.log("1 Подъезд");
} else if (batir <= 48) {
  console.log("2 Подъезд");
} else if (batir <= 90) {
  console.log("3 Подъезд");
}

//Задания 3

let b = 2;
if (b < 5) {
  console.log("Верно");
} else {
  console.log("Не верно");
}

//Задания 4

const hour = 17;
if (hour <= 12) {
  console.log("Доброе утро!");
} else if (hour <= 17) {
  console.log("Добрый день,!");
} else {
  console.log("Добрый вечер!");
}

//Задания 5
const time = 13;
const name = "Nooruz";
if (time <= 12 && name) {
  console.log("Доброе утро!");
} else if (time <= 17 && name) {
  console.log("Добрый день!");
} else {
  console.log("Добрый вечер, Нооруз!");
}

//Задание 6
let guest = 1;
if (guest <= 65) {
  console.log("Скидка");
} else {
  console.log("Без скидки");
}

//Задания 7
let player1 = prompt("player1");
let player2 = prompt("player2");
if (player1 === "Бумага" && player2 === "Ножница") {
  console.log("Player2 win");
} else if (player1 === "Камень" && player2 === "Бумага") {
  console.log("Player2 win");
} else if (player1 === "Бумага" && player2 === "Бумага") {
  console.log("Ничья");
} else if (player1 === "Ножницы" && player2 === "Камень") {
  console.log("Player2 win");
} else if (player1 === "Камень" && player2 === "Камень") {
  console.log("Ничья");
}

//Задания 8
//Так как % отнимает целое число у 7 по два отрицатедьных чисел и  в итоге у нас не четное число.

//Задания 9

let number =5;
number ===5?
console.log("Five"):
console.log("Not five");