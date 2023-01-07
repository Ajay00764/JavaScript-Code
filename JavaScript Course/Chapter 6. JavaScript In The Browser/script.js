// intreaction 

// prompt()
// let age = prompt("Enter you age : ")
// we can get value from the user as a string

// alert()
// alert("Hey don't click on this button")
// we can alert the user 

// confirm()
// let conf = confirm("Are you male");
// console.log(conf)
// we can get booleans from the user (true, false)

// Practice set 6.

// 1. Solution

// let age = prompt("Enter your age : ")

// if(age >= 18){
//     alert("you can drive")
// }else{
//     alert("you can not drive")
// }

// 2. Solution

// let age;
// let conf;

// do{
//     age = prompt("Enter your age : ")
    
//     if(age >= 18){
//         alert("you can drive")
//     }else{
//         alert("you can not drive")
//     }

//     conf = confirm("Do you want to Enter your age again?")
// }while(conf)

// 3. Solution

// let age;
// let conf;

// do{
//     age = prompt("Enter your age : ")
    
//     if(age < 0){
//         console.error("Please enter your age in positive integer format");
//     }else if(age >= 18){
//         alert("you can drive")
//     }else{
//         alert("you can not drive")
//     }

//     conf = confirm("Do you want to Enter your age again?")
// }while(conf)


// 4. Solution

// let num = prompt("Enter the number : ");

// if(num >= 4){
//     location.href = "https://google.com"
// }else{
//     document.body.innerHTML = "What's up deepak seth"
// }

// 5. Solution

// document.body.style.backgroundColor = prompt("Enter the color : ");