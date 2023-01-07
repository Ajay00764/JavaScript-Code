// Chapter 4. String 

// let ajay = "ajay dont know about 'javascript'" // you can use single quotes in double quotes
// console.log(ajay)
// ajay = 'ajay don"t know about "css" also' // you can use double quotes in single quotes
// console.log(ajay)
// ajay = `ajay don't know about "css" also` // you can use both quotes in template literals
// console.log(ajay)

// how we can use varibles in template literals

// let nav = "Ajay"
// let str = `Good Morning ${nav}`
// console.log(str)


// Escape Sequence Characters

// let str = 'this is \' single quotes '
// let str = 'this is \" double quotes '
// let str = 'this is \n new line character'
// let str = 'this is \t for tab space'

// console.log(str)

// String properties and methods

// let nav = "Ajay Shivarkar "

// length propertie
// console.log(nav.length) // return 4 

// toUpperCase();
// console.log(nav.toUpperCase()) // converts to upper case

// toLowerCase();
// console.log(nav.toLowerCase()) // converts to lower case

// slice(start, end);
// console.log(nav.slice(2)) // returns "ay Shivarkar"
// console.log(nav.slice(2,8)) // returns "ay Shi"

// replace("this", "with this");
// console.log(nav.replace("Ajay", "Rahul"))

// concat(var, "str")
// let nav2 = "Pandharinath"
// console.log(nav.concat(nav2, " I can add this too"))
// console.log(nav + nav2 + " I can add this too " + nav2)

// trim()
// let nav2 = "         Ajay         "
// console.log(nav2.trim()) // removes spaces


// Practice Set 4 : 

// 1. Solution

// console.log("har\"".length) // return 4


// 2. Solution

// let str = "This is a normal string using for solution"

// includes()
// console.log(str.includes("Ajay")) // return booleans (false)
// console.log(str.includes("normal")) // return true

// startwith()
// console.log(str.startsWith("This")) // return true because it's startsWith "This"

// endswith()
// console.log(str.endsWith("solution")) // return true because it's endsWith "solution"

// 3. Solution

// let str = "This IS String for CONverting in LowerCASE"
// console.log(str.toLowerCase()) // converts string to lower case

// 4. Solution

// let str = "Please Give rs 1000"
// console.log(str.slice(14,19)) // returns "1000"

// 5. Solution

// let str = "Rahul is Great Person"
// console.log(str.replace("l", "m"))
// console.log(str[4] = "R")

// string are immutable we can not change it 
// we need to create a new varibles to store changed string

// let str = "this is Rahul"
// let str2 = str.replace("Rahul", "Ajay")
// console.log(str2)

// So the answer is "NO"