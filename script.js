//!Task 1

let student1 = {
  name: "Rysbek",
  lang: "kg",
  age: 25,
};

let student2 = Object.assign({}, student1);

delete student2.age;

console.log("student1:", student1);
console.log("student2:", student2);

//!Task 2

//Всякий раз, когда мы объявляем новые переменные, 
// создаем объекты или вызываем новый метод, 
// JV выделяет память для этих операций в стеке или в куче.

//!Task 3

let array = [
  true,
  5,
  "hello",
  { hobbies: ["reading", "driving", "playing"] },
  false,
];

console.log(array[0]);

console.log(array[1]);

console.log(array[3].hobbies);

array[3].hobbies.pop();
console.log(array[3].hobbies);

array.unshift("new-element");
console.log(array);

array.push("end-element");
console.log(array);

array.shift();
console.log(array);

const helloIndex = array.indexOf("hello");
console.log(helloIndex);

const sliceArray = array.slice(0, 3);
console.log(sliceArray);

array[3].hobbies.push("football");
console.log(array[3].hobbies);

const indexOfFive = array.indexOf(5);
const indexOfHello = array.indexOf("hello");

if (indexOfFive !== -1) {
  array.splice(indexOfFive, 1);
}
if (indexOfHello !== -1) {
  array.splice(indexOfHello, 1);
}

console.log(array);

console.log(array.length);

//!Task 4

function sumOfNumbers(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number") {
      sum += array[i];
    }
  }

  return sum;
}

let myArray = [1, "hello", 3, true, 5, { key: "value" }, 7, false];
let result = sumOfNumbers(myArray);
console.log(result);
