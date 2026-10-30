console.log(`Hello`);
console.log(`I like Ice-cream`);

window.alert(`This is an alert!`);
window.alert(`I like Ice-cream`);

//This is a comment
/*This is a comment over multiple lines*/

document.getElementById("myH1").textContent = `Hello`;
document.getElementById("myP").textContent = "I like ice-cream";
// variable = A container that stores a value.
//            Behaves as if it were that value it contains.
//1.declaration  let x;
//2.assignment   x=100;
let x = 100;
console.log(x);
let age = 25;
let price =1.99;
let gpa = 2.1;
let firstName = "Shra";
let favouriteFood ="ice-cream";
let email = "shravanisumant248@gmail.com";


console.log(typeof age);
console.log(`You are ${age} years old`);
console.log(`The price is ${price}`);
console.log(`Your gpa is: ${gpa}`);

let online = true;
let forSale = true;
let isStudent = true;

console.log(`Shra is online:${online}`);
console.log(`Is this car for sale: ${forSale}`);
console.log(`Enrolled: ${isStudent}`);

let fullName = "Shravani Sumant";
let agee = 16;
let student = true;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p1").textContent = `You are ${agee} years old`;
document.getElementById("p3").textContent = `Enrolled :${student}`;
//arithmetic operators = operands(values, variables, etc.)
//                       operators(+_*/);

let students = 30;
console.log(students);
students +=1;
students -=2;
students *=3;
students /=3;
students++;
students--;

//How to accept your user input
//1.EASY WAY = window prompt
//2.PROFFESIONAL WAY = HTML textbox
let username;
username = window.prompt(`What's your user name?`);
console.log(username);

let user_name;
document.getElementById('mySubmit').onclick = function(){
    user_name = document.getElementById('myText').value;
    document.getElementById('mYH1').textContent = `Hello ${user_name}`
}
//type conversion = change the datatype of a value to another
//                  (strings,numbers,booleans)
let agg = window.prompt(`How old are you`);
agg = Number(age);
agg+=1;
console.log(agg, typeof agg);

let s = "pizza";
let y = "pizza";
let z = "pizza";

s = Number(s);
y = String(y);
z = Boolean(z);// If any string is converted to a boolean it always results in true this is helpful in checking if the user actually inputed
console.log(s,typeof s);
console.log(y,typeof y);
console.log(z,typeof z);
// const = a variable that can't be changed
const PI = 3.14159;
let radius;
let circumference;
//PI = 2340.7;// This which was allegedly written by someone else will not work with tthe const variable
radius = window.prompt(`Enter the radius of a circle`);
circumference = 2 *PI*radius;
document.getElementById("mySub").onclick =function(){
    radius = document.getElementById("mYText").value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}
console.log(circumference);

//COUNTER PROGRAM
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");
const countLabel = document.getElementById("countLabel");

let count=0;
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent=count;
}
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent=count;
}
resetBtn.onclick = function(){
    count=0;
    countLabel.textContent=count;
}

let randomnum = Math.random();
console.log(randomnum);

//IF STAEMENTS = if a consition is true execute some code
//                 else do something else
let way = 25;
if(age >=18){
    console.log("You are old enough to enter this site.");
}
else{
    console.log("You are not old enough to enter this site.");
}
let time = 9;
if (time<12){
    console.log("Good morning");
}
else{
    console.log("Good afternoon");
}

//let Xtudent = 