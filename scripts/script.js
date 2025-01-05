// var my_name = "Nouman Fatta"; // snake_case
// var myFatherName = "Amin Fatta" // camelCase
// var MyName = "Nouman Fatta" // PascalCase

// var greetings = "'H''e''l'l'o', wolrd"; // string
// console.log(greetings);
// var num = 1; // number
// var bool = false; // boolean
// // var bool = true
// var arr1 = ["1", "2", "3"];
// var arr = [greetings, num, bool, arr1];
// // var arr = ["Hello", 123, true];
// console.log(num);
// console.log(bool);
// console.log(arr);

// var fan = {
//   wings: 6,
//   color: "white",
//   size: "smalle",
//   type: "stand",
//   isRunning: false,
//   speeds: ["1", "2", "3"],
//   brandDetails: {
//     name: "Pak Fan",
//     established: 1998,
//   },
// };

// console.log(fan);

// console.log(arr1[1], arr[2]);

// var fruits = ["Apple", "Banana", "Mango", "Pear"];

// console.log(fruits[2], fruits[1]);

// console.log(fan.speeds[2]);
// console.log(fan.brandDetails);

// var firstName = "John";
// var lastName = "Doe";
// var fullName = firstName + " " + lastName;
// var age = 30;
// console.log(fullName);

// var intro =
//   "My name is " +
//   fullName +
//   ". And I am a software engineeer. My age is " +
//   age;
// console.log(intro);

// console.log("-------------------------------------------------");

// var plus = "7" + (3 + "2" + "3") + "5" + 4;
// var mius = "10" - ("5" + 10) - "10";

// var BODMAS = 10 + 20 * (3 - 6) - 2 / (2 - 4);
// var multiply = "2" / "0.5";

// var modulus = 8 % 5;

// // 10-59

// // -500 + "10"

// // 75354
// // 732354

// console.log(modulus);

// var market = prompt("What is there in the market?");

// if (market === "karela") {
//   console.log("Chay! chay!!");
// } else {
//   console.log("Woww!! nice!!");
// }

// var userAge = 11;

// if (userAge >= 18) {
//   console.log("Eligible for NIC");
// } else {
//   console.log("Jaa! Pehle bara hoke aa!");
// }

// if (userAge >= 18) {
//   console.log("Smart card banao!");
// } else if (userAge >= 12) {
//   console.log("Iska junior card banao!");
// } else {
//   console.log("Jaa! Pehle bara hoke aa!");
// }

// var age = prompt("Please enter your age");
// var isMarried = prompt("Are you married?");
// var skinColor = prompt("What is your skin color");

// // if (age >= 18) {
// //   if (isMarried === "yes") {
// //     console.log("You can enter");
// //   } else {
// //     console.log("You cannot come");
// //   }
// // } else {
// //   console.log("You cannot come");
// // }

// if (age >= 18 && isMarried === "yes" && skinColor === "white") {
//   console.log("You can enter");
// } else {
//   console.log("You cannot enter");
// }

// var age = prompt("Please enter your age");
// if (age >= 18) {
//   var isMarried = prompt("Are you married?");
//   if (isMarried === "yes" || isMarried === "y") {
//     console.log("You can enter");
//   } else {
//     console.log("You must be married");
//   }
// } else {
//   console.log("You must be 18");
// }

// 1. Tak user's age
// 2. if age is between 14 - 17 show avaiable techno kids course
// 3. if age is greater than or equal to 18, show available MS office course
// 4. ghar pe beth

// Take user input for course and just print the statement about that course.

// var age = prompt("Please enter your age");
// if (age >= 14 && age <= 17) {
//   var selectedCourse = prompt(
//     "Please select Course: \n 1. MS Office. \n 2. GD"
//   );
//   if (selectedCourse === "1") {
//     console.log("Congratz! You have been enrolled in MS Office");
//   } else if (selectedCourse === "2") {
//     console.log("Congratz! You have been enrolled in GD");
//   } else {
//     console.log("Inavlid input");
//   }
// } else if (age >= 18 && age <= 30) {
//   var selectedCourse = prompt(
//     "Please select Course: \n 1. Web Dev. \n 2. Data Analyst"
//   );
//   if (selectedCourse === "1") {
//     console.log("Congratz! You have been enrolled in Web Dev");
//   } else if (selectedCourse === "2") {
//     console.log("Congratz! You have been enrolled in Data Analyst");
//   } else {
//     console.log("Inavlid input");
//   }
// } else {
//   console.log("You are not eligble");
// }

// var test = "0";
// if (test == true) {
//   console.log("Right");
// } else {
//   console.log("Wrong");
// }

// var percentage = +prompt("Enter your percentage");
// if (percentage > 100) {
//   console.log("Not valid input");
// } else if (percentage >= 90) {
//   console.log("Your grade is A++");
// } else if (percentage >= 80) {
//   console.log("Your grade is A+");
// } else if (percentage >= 70) {
//   console.log("Your grade is A");
// } else if (percentage >= 50) {
//   console.log("Your grade is B");
// } else if (percentage >= 0) {
//   console.log("You are fail!");
// } else {
//   console.log("Not valid input");
// }

// var a = "1";
// var icecream = "chocolate";
// if (icecream !== "vanilla") {
//   console.log("Le aao!");
// } else {
//   console.log("Rehne do!");
// }

// var flag = false;

// for (var i = 1; i > 0; i++) {
//   if (i === 10) {
//     console.log(i);
//     break;
//   }
// }
// console.log(i);

// for (var i = 0; i >= 0; i++) {
//   var table = prompt("Enter the number you want table of");
//   if (table >= 1 && isNaN(table) === false) {
//     for (var j = 1; j <= 10; j++) {
//       console.log(table + " X " + j + " = " + j * table);
//     }
//     break;
//   }
// }

// for (var i = 0; i >= 0; i++) {
//   var myName = prompt("What is your name?");
//   if (myName === "Nouman") {
//     break;
//   }
//   if (myName === "Talha") {
//     continue;
//     console.log("kaun talha?");
//   }
//   console.log("Your name is", myName);
// }

var cities = ["isb", "khi", "lhr", "multan"];

// console.log(cities.length);

// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   if (i === 5) {
//     continue;
//   }
//   console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>");
// }

// for (var i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
// }
// console.log("============================")
// for (var i = cities.length - 1; i >= 0; i--) {
//   console.log(cities[i]);
// }

// var userCity = prompt("Enter city name");
// var cityFound = false;
// for (var i = 0; i < cities.length; i++) {
//   console.log(i)
//   if (cities[i] === userCity) {
//     cityFound = true;
//     break
//   }
// }

// if (cityFound === true) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

// function greetWorld() {
//   var i = 10;
//   while (true) {
//     i--;
//     if (i === 9) {
//       continue;
//     }
//     if (i === 5) {
//       break;
//     }
//     console.log("Hello", i);
//   }
// }

// greetWorld();

// console.log("--------");
// console.log("--------");
// console.log("--------");
// console.log("--------");
// console.log("--------");
// console.log("--------");

// greetWorld();

// console.log("----");
// console.log("----");
// console.log("----");
// console.log("----");
// console.log("----");
// console.log("----");

// console.log("----");
// console.log("----");
// console.log("----");
// console.log("----");
// console.log("----");
// console.log("----");

// greetWorld()

function takeBath() {
  console.log("I take a bath");
}
function performNamaz(prayerNumber) {
  var prayers = ["Fajr", "Zohr", "Asr", "Magrib", "Isha"];
  console.log("I perform namaz", prayers[prayerNumber - 1]);
}
function go(place) {
  console.log("I go to", place);
}
function back() {
  console.log("I come back to home");
}
function eat(mealName) {
  console.log("I have", mealName);
}
function release() {
  console.log("I release");
}
function sleep() {
  console.log("I sleep");
}
function routine() {
  takeBath();
  performNamaz(1);
  eat("breakfast");
  go("work");
  performNamaz(2);
  eat("lunch");
  performNamaz(3);
  go("park");
  performNamaz(4);
  performNamaz(5);
  back();
  eat("dinner");
  release();
}
// console.log("Day 1");
// routine();
// // console.log("Day 2");
// // routine();

// function sum(a, b, c) {
//   console.log("Sum of", a, ",", b, "and", c, "is", a + b + c);
// }
// var num1 = prompt("number 1")
// var num2 = prompt("number 2")
// var num3 = prompt("number 3")
// sum(10, 20, 30);

// var num = 10;
// if (num < 10) {
//   console.log("Yes number is greater than 9");
// } else if (num > 8) {
//   console.log("Yes number is greater than 8");
// }
// if (num > 7) {
//   console.log("Yes");
// }
// var n1 = +prompt("enter n1");
// var n2 = +prompt("enter n2");
// var o = prompt("enter operator");

function calculate(n1, n2, o) {
  if (o === "+") {
    return n1 + n2;
  } else if (o === "-") {
    return n1 - n2;
  } else if (o === "*") {
    return n1 * n2;
  } else if (o === "/") {
    return n1 / n2;
  }
  console.log("hello");
  return "hello world";
}

// var result = calculate(n1, n2, o);
// console.log(result)
function test() {
  return "hello";
  console.log("asjdajd");
}

console.log(test());
