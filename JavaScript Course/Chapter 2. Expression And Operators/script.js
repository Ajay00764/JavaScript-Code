// expression and operators 

// arithmetic operators : 

// 1. "+"
// 2. "-"
// 3. "*"
// 4. "/"
// 5. "**"
// 6. "%"
// 7. "++"
// 8. "--"

// let a = 4;
// let b = 2;

// console.log(a + b) // 4 + 2 = 6
// console.log(a - b) // 4 - 2 = 2
// console.log(a * b) // 4 * 2 = 8
// console.log(a / b) // 4 / 2 = 2
// console.log(a % b) // 4 % 2 = 0
// console.log(a ** b) // 4 x 4 x 4 x 4 = 256
// a++ => a = a + 1
// a-- => a = a - 1
// console.log(a)


// assignment operator : 

// 1. "=" // a = 23
// 2. "-=" // a -= 23 // a = a - 23
// 3. "*=" 
// 4. "/="
// 5. "**="
// 6. "%="
// 7. "+="

// let a = 28;

// console.log(a -= 10) // a = a - 10
// console.log(a += 10) // a = a + 10
// console.log(a *= 10) // a = a * 10
// console.log(a /= 10) // a = a / 10
// console.log(a **= 10) // a = a ** 10
// console.log(a %= 10) // a = a % 10


// comparison operaotrs : 

// 1. ==
// 2. !=
// 3. === 
// 4. !==
// 5. <=
// 6. >=
// 7. >
// 8. <

// comparison operators always return booleans (true, false) 

// let a = 6; 
// let b = "6";

// console.log(a == b) // 6 == "6" = true
// console.log(a != 6) // 6 != "6" = false 6 == 6 is true 


// console.log(a === b) // 6 === "6" = false data type change
// console.log(a !== b) // 6 !== "6" = false

// console.log(a <= b)
// console.log(a < b)
// console.log(a >= b)
// console.log(a > b)

// logical operetors 

// 1. And "&&"
// 2. Or "||"
// 3. Not "!"

// console.log(5 == 5 && 10 == 12) // if both condition is true then it is true
// console.log(5 == 5 || 10 == 12) // if any one condition is true then it is true

// console.log(!(10 == 12)) // jo such ko zuth or zuth ko sach karde use logical not kehte hai

// Nested if else 

// if(condition){code} // when condition is true the code will run neither it will not run 

// if(10==12){
//     console.log("it will work")
// }else if(10 != 10){
//     console.log("it is second condition")
// }else if(10 != 10){
//     console.log("it is third condition")
// }else if(10 != 10){
//     console.log("it is fourth condition")
// }else if(10 == 10){
//     console.log("it is fifth condition")
// }else{
//     console.log("it will work when condition is false")
// }


// let age = prompt("Enter your age : ")

// if(age >= 18 && age <= 100){
//     document.body.innerHTML = ("you can drive")
// }else if(age <= 17 && age >= 6){
//     document.body.innerHTML = ("you are a kid you can't drive")
// }else if(age < 6 && age > 0){
//     document.body.innerHTML = ("who gave you computer")
// }else if(age > 100 || age <= 0){
//     document.body.innerHTML = ("you are not belong to this world")
// }else{
//     document.body.innerHTML = ("please enter a number")
// }


// ternary operator  : ?

// (10 ==10) ? "true" : "false"

// let age = prompt("enter your age : ")
// document.body.innerHTML = (age >= 18) ? "you can drive" : "you can not drive"


// 1. Solution

// if(age <= 20 && age >= 10){
//     console.log("You are in teenage now")
// }else{
//     console.log("you are not teenager")
// }

// 2. solution

// let ajay = prompt("enter fruits name");

// switch(ajay){
//     case "banana" :
//         console.log("it is banana")
//         break;
//     case "orange" :
//         console.log("it is orange")
//         break;
//     case "mango" :
//         console.log("it is mango")
//         break
//     default : 
//         console.log("no match found")
// }

// 3. Solution

// let num = prompt("Enter a number : ")

// if(num % 2 == 0 || num % 3 == 0){
//     console.log("the number is divisible by 2 neigher 3")
// }else{
//     console.log("The number is not divisible by 2 neigher 3")
// }

// 4. Solution

// let num = prompt("Enter a number : ")

// if(num % 2 == 0){
//     console.log("the number is divisible by 2")
// }else if( num % 3 == 0){
//     console.log("The number is divisible by 3")
// }else{
//     console.log("The number is not divisible by 2 neigher 3")
// }

// 5. Solution 

// let age = prompt("enter your age : ")
// document.body.innerHTML = (age >= 18) ? "you can drive" : "you can not drive"