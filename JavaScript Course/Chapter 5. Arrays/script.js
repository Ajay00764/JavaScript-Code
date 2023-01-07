// Chapter 5. Arrays

// let array = ["ajay", "rahul", "rohan", "rohit", 323, 232, true , null,];
// array can store more than one velue !!

// console.log(array[3] = "nagesh")
// console.log(array)
// console.log(array.length)
// console.log(typeof(array))

// Arrays Methods 

// toString()
// console.log(array.toString())
// console.log(array)

// join()
// console.log(array.join("*"))

//pop()
// array.pop() // removes last value of an array
// console.log(array)

// push(value) 
// array.push("23") // adds value to array at last
// console.log(array)

// shift()
// array.shift() // removes the first value of the array
// console.log(array)

// unshift()
// array.unshift("Kunal") // add value to the array and starts
// console.log(array)

// delete array[4]
// console.log(array)

// concat()
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3 = [7,8,9]
// let whole = arr1.concat(arr2, arr3)
// console.log(whole) // cna't change the original array

// sort()
// let arr = [32,3,99,54,5,235,2,43,523]
// console.log(arr.sort())
// console.log(arr) // original array will change

// splice()
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// numbers.splice(2,4,23,24,25,26)
// console.log(numbers)

// slice()
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
// let arr2 = arr.slice(2,6) // original array will not change
// console.log(arr2)

// reverse()
// let arr = [0, 1, 2, 3, 4, 5,23,423,42,342,35,2,356, 7, 8, 9];
// arr.reverse() // reverse the array
// console.log(arr)


// Looping Through the Arrays

// For each loop

// const arr = [22,43,52,12,64,74,20]
// arr.forEach((value)=>{
//     console.log(value - 10)
// })

// Array.from

// let str = "Ajay Shivarkar"; 
// Array.from(str).forEach((value)=>{ // converts string to array
//     console.log(value)
// })

// for of

// const arr = [22,43,52,12,64,74,20]
// for(item of arr){
//     console.log(item)
// }

// for in 

// const arr = [22,43,52,12,64,74,20]
// for(item in arr){
//     console.log(item)
// }

// Map 

// const arr = [22,43,52,12,64,74,20] 
// arr.map((value,index, array)=>{
//     value = value * value
//     console.log(value)
// })

// Filter 

// const arr = [22,43,52,12,64,74,20] 
// let arr2 = arr.filter((value)=>{
//     return value >= 30
// })
// console.log(arr2)

// Reduce

// const arr = [22,43,52,12,64,74,20] 

// let arr2 = arr.reduce((value, value2)=>{
//     console.log(value)
//     console.log(value2)
//     return value + value2
// })

// console.log(arr2)

// Practice Set 5

// 1. Solution

// let numbers = [2,4,12,14,16];
// console.log(numbers)
// let inp = prompt("Enter a Number : ")
// inp = Number.parseInt(inp)
// numbers.push(inp);
// console.log(numbers)

// 2. Solution

// let numbers = [1,2];
// let inp;
// while(inp != 0){
//     inp = prompt("Enter a number : ");
//     numbers.push(inp)
// }
// console.log(numbers)

// 3. Solution

// let arr = [10,15,20,25,30,45,50];
// let arr2 = arr.filter((value)=>{
//     return value % 10 == 0;
// })
// console.log(arr2)

// 4. Solution

// let arr = [10,15,20,25,30,45,50];
// let arr2 = arr.map((value)=>{
//     return value * value;
// })
// console.log(arr2)

// 5. Solution

// let arr = [10,15,20,25,30,45,50];
// let arr2 = arr.reduce((value, value2)=>{
//     return value + value2;
// })
// console.log(arr2)


// Practice Set Again 

// Solution 1

// let num = [1,2,3,4,5,6,7]
// let inp = prompt("Enter a number : ")
// inp = parseInt(inp)
// num.push(inp)
// console.log(num)

// Solution 2

// let num = []
// let inp;
// while(inp != 0){
//     inp = parseInt(prompt("Enter a number : "))
//     num.push(inp)
// }
// console.log(num);

// Solution 3

// let num = [3,2,3,20,30,35,10,40,60,3003]
// let change = num.filter((elem)=>{
//     return elem % 10 == 0;
// })
// console.log(change)

// Solution 4

// let arr = [3,43,43,2,32,2,3,2,3,]
// let s = arr.map((elem)=>{
//     return elem * elem
// })
// console.log(s)

// Solution 5

// let arr = [1,2,3,4,5,6,7,8];
// let arr2 = arr.reduce((elem, elem2)=>{
//     return (elem + elem2)
// })
// console.log(arr2)