//control flow
//condition
//if (condition){code}
const password = "219rtuio";
if (password.length > 6) {
    console.log("your password is strong");
}
if (false) {
    console.log("working password is strong");
}
if (false) {
 console.log("working");
}











const country = "Canada";
const continent = "North American";
const population = 12;
const island = false;
const language = "English";

// sarah speaks english has less than 50 people and is not an island
// you should live in Canada
// Canada does not meet your criteria

if (language === "English" && population < 50 && island) {
    console.log('you should live in ${country}');
} else {
    console.log('${country} dese not meet your criteria');
}
const age = 18;
//>=18

if (age >= 18) {
   console.log("you are an adult"); 
} else {
    console.log(" you are not one");
}

//
// if (codition)else if (another condition)else if(condition){}else{}

// const password = "456u";
// recommended >7 an dinclude @, strong > 7 and weak

if (password.length >= 7 && password.includes("@")) {
    console.log("your password is recommended");
} else if (password.length >= 7) {
    console.log("your password is strong");
} else {
    console.log("your password isbweak");
}

// whether a number is positive, negative or zero
const num = 0

if (num > 0) {
    console.log('${num} is a POSITIVE number');
} else if (num < 0) {
    console.log('${num} is a NEGATIVE Number');
} else {
    console.log("This is Zero");
}
//even or add

if (num % 2 === 0) {
    console.log("This is EVEN");
} else {
    console.log("This is ODD");
}


// if you are less than 18 - welcome to the baby section
//18 and 50 - welcome to the club
//50+ - welcome to the vip section

const myAge = 78
if (myAge < 18) {
    continent.log("welcome to the baby Section");
} else if (myAge > 50) {
    console.log("Welome to VIP SECTION");
} else {
    console.log("Welcome to the club");
}

if (myAge < 18) {
    console.log("welcome to baby section");
} else if (myAge <= 50) {
    console.log("welcome to the club");
} else {
    console.log("welcome VIP SECTION");
}

// SWITCH STATeMENT
const day = 67;
switch (day) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
        console.log("TUESDAY");
        break;
    case 3:
        console.log("WENSEDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
        console.log("FRIDAY");
        break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;
}

const grade = "a";
switch (grade) {
    case "A":
    case "a":
        console.log("EXELLENT");
        break;
    case "B":
    case "b":
        console.log("VERY GOOD");
        break
    case "C":
    case "b":
        console.log("GOOD");
        break
    case "D":
    case "d":
        console.log("FAIR");
        break
    case "E":
    case "e":
        console.log(POOR);
        break
    case "F":
    case "f":
        console.log(FAIR);
        break;
    default:
        console.log("NOT A VALID GRADE");
        break;
}

// bmi = mass /height ** 2

const marksHeight = 1.69;
const marksWeight = 78;
const johnsHeight = 1.95;
const johnsWeight = 92;


const marksBmi = marksWeight / marksHeight ** 2;
const johnBmi = johnsWeight / johnsHeight ** 2;
console.log(marksBmi, johnBmi);

const markhighterBmi = marksBmi > johnBmi;
console.log(markhighterBmi);

if (marksBmi > johnBmi) {
    console.log(`MARK'S BMI ${marksBmi.toFixed(2)}`);
    
}





// ternary operator
//if(condition)(code 1)else(code 2)

// condition ? action 1 : action 2

15 > 7 ? console.log("yes") : console.log("no");

const num2 = 46;

num2 % 2 === 0
    ? console.log("This an EVEN number")
    :console.log("This is an ODD number");


//Loops- repitive tasks- for , while, do.. whileloop
// for (initializer let i = 0; condition i < 5 incriment i ++ )(code)

// for (let i = 0; i < 5; i++){
//     console.log('in the loop ' + i);
// }
// console.log("outside of loops");

// sum of
// let sum = 0;
// for (i = 0; i <= 10; i ++) {
//     sum += i
// }

// console.log(sum);

// initializer
// while(tcondition)(code increment)

// let X = 0;
// while(X < 20) {
//     console.log("HELLO");
//     X++;
// }

// let y = 0;
// do {
//     console.log("HEY");
//     y++
// }
// while (y < 5);
    
// primitive date types - strings, strings mothods
//number, maths operator, logical, cpmparison
// booleans truthy and falsy valn
// null and undefined
// condition statement
// loops


//functions
// const var1 = "John"

// function delaration
function myfunction() {
    console.log("HELLO CLASS");
    console.log("YOU ARE WELCOME");
}
myfunction();

function greet(name = "User", age = 18) {
    console.log("WELCOME" + name + age);
}
greet("John", 76);
greet("Sandra", 5);
greet("Emmnuel", 78);
greet();
greet("ola");
greet("ola", 40);

// calculate he age of users
// 2023 - year

function calcAge(year) {
    const age = 2023 - year;
    console.log('Your age is ${age}');
}

calcAge(1960);
calcAge(2000);

function sumNums(a, b) {
    console.log('the sum of ${a} and ${b} is ${a + b}');   
}

sumNums(4.5, 78);
sumNums(-45, 87);

// finland has 6 million people its capital city is helsink
function decribecountry(country, population, capitalcity) {
    console.log(`${country} has ${population} million people and its capital city is ${capitalcity}')`)
}
     
decribecountry('France', 6, 'paris');
decribecountry("belgium", 3, 'Brussel');
decribecountry("Russia", 65, "Moscow");

//check if an email is valid or not
checkEmail("test@gmail,com");

function checkEmail(email) {
    if (email.includes("@")) {
        console.log('${emsil} is a vaild email address');
    } else {
        console.log('${email} is not a vaild email');
    }
    
}
checkEmail("abcgoole.com");


//HOISTING -
//function expression
// const myAge = 90;
// console.log(myAge);

// myfunction 2(4, 5);
const myfunction2 = function (a , b) {
    console.log("anytjing");
    console.log(a + b);
};

myfunction(7, 8);
// return keyword


// creats a function that cals average of the two teams
// d - 103, 93, 89
// k - 110, 87, 95

const calcAverage = function (a, b, c) {
    const avg = (a, b, c) / 3;
    // return avg.tofixed(2);
    return Number(avg.toFixed(2));

};

const averageDolphin2 = calcAverage(123, 98, 89);
const avgkaola2 = calcAverage(110, 87, 95);
console.log(averageDolphin2, avgkaola2);

function checkwinner(teamA, teamB) {
    if (teamA > teamB) {
        console.log("first Team won");
    } else if (teamB > teamA) {
        console.log("second Team won");
    } else {
        console.log("No winner");
    }
}
checkwinner(averageDolphin2, avgkaola2);
//ARROW FUNCTION
// const name = ()=>{}

const logger = (a, b, c) => {
    const total = a + b + c;
    return total;

};

console.log((logger(4, 5, 7)));

// const difference = (a, b) => {
    // return a - b;
// };
const difference = (a, b) => a - b;

console.log(difference(67, 50));

const calcAvg = (a, b, c) => {
    const avg = (a + b + c) / 3;
    return Number(avg.toFixed(2));
};

//VARIABLE SCOPING - global local var

// const myname = "Moyo",
// console.log(myname);
// if (true) {
 //  const surname = "Ayo"; 
 // const surname = "Wale";
 // console.log(surname);
 //console.log("in a block" + mynmae);
//}
 

const surname = "Ade";
console.log("Outside" + name);




//ARRAYS [element, element, el]

const students = ["mofe", "precious", "sheu"];
console.log(students);
//arrays properties and methods
console.log(students.length);

//get element in arr
console.log(students[0]);
console.log(students[students.length - 1]);


//converting an array to a string - tstring, join
console.log(students.toString());
console.log(students.join(" "));
//adding elements to sn array - push unshitf

students.push("0la");
students.push("nike");

students.unshift("Ebuka");
students.unshift("emma");

console.log(students);

//remove element form an array pop shift
students.pop();
students.pop();
students.pop();

students.shift();
students.shift();
console.log(students);

console.log(students.sort());
console.log(students.reverse());
console.log(students.includes("Ola"));
console.log(students.includes("Mofe"));

// inddexof lastindexof
const anotherStudent = ["toyin", "Zinab"];
console.log(students.concat(anotherStudent, ["Ayo", "Ade", "Ade"]));


// includes, sort, reverse pop, push, shift, unshift,
//slice, splice, concta, join, toString

console.log(students.slice(0, 2)); // 0, 1


const countries = ["Canada", "France", "Germeany", "Dublin"];
console.log(countries.length);
countries.length > 5 ? console.log('country.length is greather that 4') : console.log(`is not greater than 5`);
let savings = 20000;
const transactions = [5000, -10000, -100];

transactions.push(-2000);
transactions.push(50000);

transactions.push(-3000);
transactions.pop();
console.log(transactions);
let debit = 0;
let credit = 0;

for (i = 0; i < transactions.length; i++) {
   // console.log(transactions[i]);
    // savings = saving + transaction[i]
    savings += transactions[i];
    if (transactions[i] < 0) {
        debit += transactions[i];
        console.log(`you have been debited ${transactions[i]}`);
    } else {
        credit += transactions[i];
        console.log(`you have been credited ${transactions[i]}`);
    }
        
    }


console.log(`The total debit is ${debit}`);
console.log(`The total credit is ${credit}`);  
console.log(`your account balance is ${savings}`);


// filter, find, map, forEach
// higher order function, callback func
const friends = ["John", "Jane", "Adam", "Jennifer", "Owen"];
friends.includes("Lestar");

friends.forEach((friend, index) => {
console.log(`${index} The name of my friend is ${friend}`);
});

friends.forEach((f, index) => {
    console.log((f, index));
});


//Map
friends.map((val) => {
    if (val === "Jane") {
        console.log(`${val} is my best friend`);
    } else {
        console.log(`${val} is just my friend`);
    }
});

friends.map((val) => {
    if (val === "Jennifer") {
        console.log(`${val} is my bestie`);
    } else {
        console.log(`${val} is just a friend`);
        }
});

//filter find

const filteredFriends = friends.filter((friend) => {
    return friend.length > 6;
});
console.log(filteredFriends);

//Find

const foundUser = friends.find((friend) => {
    return friend.startsWith("J");
});
console.log(foundUser);

const result = friends.filter((friend) => friend.length > 6);
const result2 = friends.find((f) => f.startsWith("A"));

console.log(result, result2);

//object
//asybchronous
//Dom

