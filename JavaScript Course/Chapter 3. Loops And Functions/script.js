// Chapter 3. Loops and Funcitons

// Types of loops in JavaScript

// 1. For loop
// 2. For in loop
// 3. for of loop
// 4. while loop
// 5. do while loop


// 1. For loop

// for(let i = 0; i <= 3000; i++){ // (var declarations ; condition ; code){ code}
//     console.log("I love you " + i)
// }

// 2. For in loop // for keys in object

// let arr = ["orange", "mango", "banana", "papaya", "grapes", "sitafal", "ramfal"]

// for(ajay in arr){
//     console.log(arr[ajay])
// }

// 3. for of loop // for values in object array

// let arr = ["orange", "mango", "banana", "papaya", "grapes", "sitafal", "ramfal"]

// for(item of arr){
//     console.log(item.toUpperCase())
// }

// 4. while loop

// let i = 0;

// while(i <= 3000){
//     console.log("I miss you " + i)
//     i ++
// }

// Do while loop

// let i = 0;

// do{
//     console.log("I can't live without you " + i)
//     i++
// }while(i <= 3000)

// function 

// function myFunc (a, b) {
//     console.log(a + b)
//     return a + b;
// }

// myFunc(2,5)
// myFunc(2,6)
// myFunc(2,3)
// myFunc(2,52)

// const myFunc = (a, b) => {console.log(a+b)}
// myFunc(34, 35)

// Practice Set 

// 1. Solution

// let obj = {
//     harry: 97,
//     rohan: 91,
//     aakash: 70,
//     ajay: 99,
//     rahul: 100,
// }


// for(let i = 0; i<= Object.keys(obj).length - 1; i++){
//     console.log(`The Marks of ${Object.keys(obj)[i]} are ${obj[Object.keys(obj)[i]]}`);
// }

// 2. Solution 

// for(i in obj){
//     console.log("The Marks of " +  i + " are " +  obj[i])
// }

// 3. Solution

// let num = 23;
// let numb;


// do{
//     numb  = prompt("enter a number : ")
//     numb = Number.parseInt(numb)

//     if (num == numb) {
//         console.log("You won")
//     } else {
//         console.log("try again")
//     }
// }while (num != numb) 


// 4. Solution

// function mean (a,b,c,d,e){
//     console.log((a + b + c + d + e)/5)
// }

// mean(76,82,75,78,90)