//!Task 1
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((number) => number * number);

console.log(squaredNumbers);

//!Task 2

const users = [
  { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
  { firstName: "Ariana", lastName: "Grande", age: 22, gender: "female" },
  { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
  { firstName: "Cristiano", lastName: "Ronaldo", age: 38, gender: "male" },
];

const transformedUsers = users.map((user) => ({
  fullName: `${user.firstName}  ${user.lastName}`,
  age: user.age,
  gender: user.gender,
}));

console.log(transformedUsers);

//!Task 3
const numbers1 = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
const evenNumbers = numbers1.filter((number1) => number1 % 2 === 0);

console.log(evenNumbers);

//!Task 4

const users1 = [
  { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
  { firstName: "Ariane", lastName: "Grande", age: 18, gender: "female" },
  { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
  { firstName: "Kakashi", lastName: "Hatake", age: 28, gender: "male" },
  { firstName: "Sakura", lastName: "Chan", age: 18, gender: "female" },
];

const femaleUsers1 = users1.filter((user) => user.gender === "female");

// console.log(femaleUsers1);

//!Task 5 

const array = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];
const sum = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

//!Task 6

const num = [1, 2, 3, 4, 5, 4, 8, 34, 3, 6];

const filteredNum = num.filter((n) => n !== undefined);

let sum1 = 0;

filteredNum.forEach((n) => {
  if (n % 2 !== 0) {
    sum1 += n;
  }
});

console.log(sum1);


//!Task 7

const users2 = [
  { firstName: "John", lastName: "Obama", age: 34, gender: "male" },
  { firstName: "Ariane", lastName: "Grande", age: 18, gender: "female" },
  { firstName: "Naruto", lastName: "Uzumaki", age: 19, gender: "male" },
  { firstName: "Kakashi", lastName: "Hatake", age: 28, gender: "male" },
  { firstName: "Sakura", lastName: "Chan", age: 18, gender: "female" },
];

const foundUser = users2.find((user2) => user2.firstName === "Naruto");

console.log(foundUser);

//!Task 8

const numbers3 = [1, 2, 3, 4, 5, 4, 34, 3, 6];

const index = numbers3.findIndex((number3) => number3 === 34);

console.log(index);
  