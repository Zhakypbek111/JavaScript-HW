//!TASK 1
function logToConsole(x, y) {
    if (x > y) {
      for (let i = y; i <= x; i++) {
        console.log(i);
      }
    } else {
      for (let i = x; i <= y; i++) {
        console.log(i);
      }
    }
  };
  logToConsole(0, 10);
 
  const logToConsole1 = function (x, y) {
    for (let i = x; i <= y; i++) {
      console.log(i);
    }
  };
  logToConsole1(0, 10);
  
  const logToConsole2 = (x, y) => {
    for (let i = x; i <= y; i++) {
      console.log(i);
    }
  };
  logToConsole2(0, 10);
  
  
! TASK 2
 function showEvenNumbers(x, y) {
    for (let i = x; i <= y; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  
  showEvenNumbers(1, 10);
  
  const showEvenNumbers1 = function (x, y) {
    for (let i = x; i <= y; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  };
  
  showEvenNumbers1(1, 10);
  const showEvenNumbers2 = (x, y) => {
    for (let i = x; i <= y; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  };
  
  showEvenNumbers2(1, 10);/

  //!Task 3
  function calculateSum(x, y) {
    let sum = 0;
    for (let i = x; i <= y; i++) {
      if (i % 2 === 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  const res = calculateSum(3, 200);
  console.log(res);
  
  const calculateSum1 = function (x, y) {
    let sum2 = 0;
    for (let i = x; i <= y; i++) {
      if (i % 2 === 0) {
        sum2 += i;
      }
    }
    return sum2;
  };
  
  const res1 = calculateSum1(3, 200);
  console.log(res1);
  
  const calculateSum3 = (x, y) => {
    let sum3 = 0;
    for (let i = x; i <= y; i++) {
      if (i % 2 === 0) {
        sum3 += i;
      }
    }
    return sum3;
  };
  
  const res3 = calculateSum3(3, 200);
  console.log(res3);
  

!TASK 4

function findChar(word, char) {
    return word.includes(char);
  }
  console.log(findChar("Bill Gates", "e"));
  
  const findChar1 = function (word1, char1) {
    return word1.includes(char1);
  };
  
  console.log(findChar1("Bill Gates", "e"));
  
  const findChar2 = (word2, char2) => {
    return word2.includes(char2);
  };
  
  console.log(findChar2("Bill Gates", "e"));

!TASK 5

function reverse(str) {
    return str.split("").reverse().join("");
  }
  
  console.log(reverse("hello"));
  
  const reverseString = function (str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  };
  
  console.log(reverseString("hello"));
  
  const reverseString1 = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  };
  
//   console.log(reverseString1("hello"));
  
