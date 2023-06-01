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
}