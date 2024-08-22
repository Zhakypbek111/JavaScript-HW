//!Task 1
function createStudent(firstName, lastName, age, university, faculty, gpa) {
  return {
    firstName: firstName,
    lastName: lastName,
    age: age,
    university: university,
    faculty: faculty,
    gpa: gpa,
  };
};

// console.log(createStudent("Nooruz", "Abdykalykov", 24, "ALATOO", "CS", 87));

//!Task 2

const student = createStudent("Nooruz", "Abdykalykov", 24, "ALATOO", "CS", 87);
console.log(student);
function deleteKey(object, key) {
  
  if (key in object) {
    delete object[key];
    return object;
  } else {
    return `Ключ ${key} отсутствует в объекте`;
  }
};
const modifiedStudent = deleteKey(student, "age");
console.log(modifiedStudent);

const result = deleteKey(student, "height");
console.log(result);

//!Task 3

let user = {
  name: "Рысбек",
  email: "rysbek@gmail.com",
  age: 25,
  password: "12345",
};

let sum = 5;

let userEmail = prompt("Введите вашу почту:");

if (userEmail !== user.email) {
  alert("Кечиресин, мындай почта жок");
} else {
  let userPassword = prompt("Введите ваш пароль:");

  if (userPassword !== user.password) {
    alert("Пароль туура эмес");
  } else {
    let answer = prompt("2 + 3 = ? (Туура эсептесен премия аласын)");

    if (Number(answer) === sum) {
      user.sum = sum;
      alert(`Туура! сенин премиян = ${user.sum}`);
    } else {
      alert("Туура эмес жооп бердин");
    }
  }
};



