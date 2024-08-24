//!Task 1

// const computers = [
//   {
//     title: "Macbook Air M1",
//     price: 85000,
//   },
//   {
//     title: "Dell",
//     price: 65000,
//   },
//   {
//     title: "Asus ZenBook",
//     price: 40000,
//   },
//   {
//     title: "Acer Aspire",
//     price: 45000,
//   },
//   {
//     title: "Macbook Pro",
//     price: 100000,
//   },
// ];

// const ascending = computers.sort((a, b)=>a.price-b.price);
// console.log("Сортировка по возрастанию:");
// console.log(ascending);

// const computers1 = [
//   {
//     title: "Macbook Air M1",
//     price: 85000,
//   },
//   {
//     title: "Dell",
//     price: 65000,
//   },
//   {
//     title: "Asus ZenBook",
//     price: 40000,
//   },
//   {
//     title: "Acer Aspire",
//     price: 45000,
//   },
//   {
//     title: "Macbook Pro",
//     price: 100000,
//   },
// ];

// const descending = computers1.sort((a, b)=>b.price-a.price);
// console.log("Сортировка по убыванию:");
// console.log(descending);

//!Task 2

// const grades = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];

// const descendingGrades = grades.slice().sort((a, b) => b - a);
// console.log("Сортировка по убыванию:");
// console.log(descendingGrades);

// const grades1 = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];

// const ascendingGrades1 = grades1.slice().sort((a, b) => a - b);
// console.log("Сортировка по возрастанию:");
// console.log(ascendingGrades1);

//!Task 3

// const fruits = ["strawberry", "mango", "watermelon", "grapes", "lemon", "kiwi"];
// const descendingFruits = fruits.slice().sort().reverse();
// console.log("Сортировка по убыванию:");
// console.log(descendingFruits);

// const fruits1 = [
//   "strawberry",
//   "mango",
//   "watermelon",
//   "grapes",
//   "lemon",
//   "kiwi",
// ];

// const ascendingFruits1 = fruits1.slice().sort();
// console.log("Сортировка по возрастанию:");
// console.log(ascendingFruits1);

//!Task 4

// const numbers = [4, 123, 5, 6, 100];

// let minNumber = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < minNumber) {
//     minNumber = numbers[i];
//   }
// }
// console.log("Наименьшее число:", minNumber);

// const numbers1 = [4, 123, 5, 6, 100];

// let maxNumber = numbers1[0];
// for (let i = 1; i < numbers1.length; i++) {
//   if (numbers1[i] > maxNumber) {
//     maxNumber = numbers1[i];
//   }
// }
// console.log("Наибольшее число:", maxNumber);

//!Task 5

// function formatDate(date) {
//   const day = String(date.getDate()).padStart(2, "0");
//   const month = String(date.getMonth() + 1).padStart(2, "0");
//   const year = date.getFullYear();

//   return `${day}.${month}.${year}`;
// }

// const formattedString = formatDate(new Date("2022-01-01"));
// console.log(formattedString);

// const formattedString2 = formatDate(new Date("2022-11-30"));
// console.log(formattedString2);

// function formatTime(date) {
//   const hours = date.getHours();
//   const minutes = date.getMinutes();

//   return `саат ${hours}, минута ${minutes}`;
// }

// const timeString = formatTime(new Date("2022-01-01T11:40:00"));
// console.log(timeString);

//!Task 6

// const instagramUser = {
//   userName: "Uzumaki123",
//   email: "user@gmail.com",
//   password: "123123",
//   avatarUrl: "https://www.google.com/search?q=cat",
//   followers: "1m",
//   follwing: 512,
//   title: "Never Give up",
// };

// console.log("Ключи объекта instagramUser:");
// for (let key in instagramUser) {
//   console.log(key);
// }

// const instagramUser1 = {
//   userName: "Uzumaki123",
//   email: "user@gmail.com",
//   password: "123123",
//   avatarUrl: "https://www.google.com/search?q=cat",
//   followers: "1m",
//   follwing: 512,
//   title: "Never Give up",
// };

// console.log("Значения объекта instagramUser:");
// for (let key in instagramUser1) {
//   console.log(instagramUser1[key]);
// }

//!Task 7

// const computers2 = [
//   {
//     title: "Macbook Air М1",
//     price: 85000,
//   },
//   {
//     title: "Dell",
//     price: 65000,
//   },
//   {
//     title: "Asus ZenBook",
//     price: 40000,
//   },
//   {
//     title: "Acer Aspire",
//     price: 45000,
//   },
//   {
//     title: "Macbook Pro",
//     price: 100000,
//   },
// ];

// let totalPrice = 0;

// for (const computer of computers2) {
//   totalPrice = computer.price;
// }

console.log("Общая сумма цен всех компьютеров:", totalPrice);


//!Task 8

// const instagramUser2 = {
//   userName: "Uzumaki123",
//   email: "user@gmail.com",
//   password: "123123",
//   avatarUrl: "https://www.google.com/search?q=cat",
//   followers: "1m",
//   following: 512,
//   title: "Never Give up",
// };

// console.log("Ключи объекта instagramUser:");
// for (const key in instagramUser2) {
//   console.log(key);
// }

// const instagramUser3 = {
//   userName: "Uzumaki123",
//   email: "user@gmail.com",
//   password: "123123",
//   avatarUrl: "https://www.google.com/search?q=cat",
//   followers: "1m",
//   following: 512,
//   title: "Never Give up",
// };

// const values1 = Object.values(instagramUser3);
// let i = 0;

// console.log("Значения объекта instagramUser:");

// while (i < values1.length) {
//   console.log(values1[i]);
//   i++;
// }

// const instagramUser4 = {
//   userName: "Uzumaki123",
//   email: "user@gmail.com",
//   password: "123123",
//   avatarUrl: "https://www.google.com/search?q=cat",
//   followers: "1m",
//   following: 512,
//   title: "Never Give up",
// };
// console.log("Свойства объекта instagramUser:");
// for (const [key, value] of Object.entries(instagramUser4)) {
//   console.log(`${key}: ${value}`);
// };
 