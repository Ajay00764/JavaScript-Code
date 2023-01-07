// ********************** Chapter 9 - Callbacks, promises and async / await **********************


// What is synchronous and asynchronous programming\


// Synchronous => Synchronous actions are the actions that are initiat and finish one-by-one
// console.log("start")
// console.log("after start")
// console.log("before end")
// console.log("end")


// Asynchronous => asynchronous actions are the actions that we initate now and they finish later 
// example : setTimeout
// console.log("start")
// setTimeout(() => {
//     console.log("middle")
// }, 3000);
// console.log("end")


// Callbacks => A callback function is a function 
// passed into another function
// as an argument
// which is then invoked inside the ourter function to complete an actions

// EXAMPLE : 

// function loadScript(src, callback){
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = function(){
//         console.log("script loaded => " + src);
//         callback(null, src);
//     }
//     script.onerror = function(error){
//         console.log("failed to load script with src=" + src);
//         callback(new Error("failed to load script with src=" + src));
//     }
//     document.body.appendChild(script);
// }

// function goodmorning(error, src){
//     if(error){
//         console.log(error);
//         return;
//     }
//     console.log("goodmorning => " + src);
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js", goodmorning);

// this is called "callback-based" style of async 
// programmning. a funciton htat does something
// asynchronously should provide a callback argument
// where we put the function to run after its complete

// Callback Hell & Pyramid of Doom

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = function () {
//         console.log("script loaded => " + src);
//         callback(null, src);
//     }
//     script.onerror = function (error) {
//         console.log("failed to load script with src=" + src);
//         callback(new Error("failed to load script with src=" + src));
//     }
//     document.body.appendChild(script);
// }

// function goodmorning(error, src) {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     console.log("goodmorning => " + src);
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
//     if (error) {
//         console.log(error);
//         sendEmergencyMessageToCeo();
//         return;
//     }
//     loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
//         if (error) {
//             console.log(error);
//             sendEmergencyMessageToCeo();
//             return;
//         }
//         loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
//             if (error) {
//                 console.log(error);
//                 sendEmergencyMessageToCeo();
//                 return;
//             }
//             loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
//                 if (error) {
//                     console.log(error);
//                     sendEmergencyMessageToCeo();
//                     return;
//                 }
//                 loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src){})
//             })
//         })
//     })
// })

// Whem we have callback inside callbacks , the code gets difficult to manage => pyramid of doom

// Promises => Solution of Pyramid doom / Callback hell

// A promise is a promise of a code execution 
// The code either executes or fails, in both the cases the subscriber will be notified

// The syntex of a promise is looks like this : 

// let promise = new Promise(function(resolve, reject) {
//     // code
// }

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("promise created");
//         resolve(1);
//     }, 3000);
// })

// console.log(promise)


// promise .then() and .catch()

// let p1 = new Promise((resolve, reject)=>{
//     console.log("promise is pending");
//     setTimeout(() => {
//         console.log("I am a promise and I am resolved");
//         resolve(true)
//     }, 3000);
// })

// let p2 = new Promise((resolve, reject)=>{
//     console.log("promise is pending");
//     setTimeout(() => {
//         console.log("I am a promise and I am rejected");
//         // resolve(true)
//         reject(new Error("I am a promise and I am rejected"));
//     }, 1000);
// })

// console.log(p1, p2)

// To get the value
// p1.then((value)=>{
//     console.log(`value is ${value}`);
// })

// To catch the errors
// p2.catch((error)=>{
//     console.log(new Error("some error occurred in p2"));
// })

// p2.then((value)=>{
//     console.log(value)
// },(error)=>{
//     console.log(new Error("some error occurred in p2"));
// })

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("done")
//     }, 1000);
// });

// promise.then(alert) // it will alert("done")

// let promise = new Promise(function(resolve, reject){
//     let script = document.createElement("script");
//     script.src = "https: //cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"
//     document.body.appendChild(script);
//     resolve(script);
// })

// promise.then((value)=>{
//     console.log(value)
// })
// promise.catch((err)=>{
//     console.log("its error bor")
// })

// let p1 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         console.log("Resolve after 2 seconds")
//         resolve(56)
//     }, 2000);
// })

// Promises chanining =>

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(()=>{resolve("promise 2")}, 1000)
//     })
//     return p2
// }).then((value)=>{
//     console.log("we are done " + value)
//     return 2
// }).then((value)=>{
//     console.log("Now we are pakka done " + value)
// })


// Quick Quiz : => 

// const loadScript = (src) => {
//     return new Promise((resolve, reject) => {
//     let script = document.createElement("script");
//     script.src = src
//     document.body.appendChild(script);
//     script.onload = () =>{
//         resolve("script loaded successfully" + src);
//     }
//     script.onerror = () => {reject(0)}
// })
// }

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")

// p1.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log("we are sorry but we are having a problems loading the script")
// })

// Attaching Multiple Handlers to a Promise // run independently

// let p1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log("hey I am resolved")
//         resolve(1)
//     }, 2000);
// });

// p1.then(()=>{
//     console.log("Congratulations this promise is fulfilled")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(4)
//         }, 4000);
//     })
// }).then((value)=>{console.log(value)})

// p1.then(()=>{
//     console.log("Hurray")
// })

// Promise API

// let promise1 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve("value 1")
//     }, 7000);
// })

// let promise2 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         reject(new Error("this is an error"))
//     }, 2000);
// })

// let promise3 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve("value 3")
//     }, 3000);
// })

// let promise4 = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         resolve("value 4")
//     }, 4000);
// })

// promise1.then((value)=>{
//     console.log(value)
// })

// promise2.then((value)=>{
//     console.log(value)
// })

// promise3.then((value)=>{
//     console.log(value)
// })

// promise4.then((value)=>{
//     console.log(value)
// })


// There are 6 Static methods of promise class : 

// 1. Promise.all(promises) -> waits for all promises to be resolved and returns the array of their results . 
//  If any one fails , it becomes the error & all other results are ignored.

// let promise_all = Promise.all([promise1, promise2, promise3, promise4]);
// promise_all.then((value)=>{
//     console.log(value)
// })

// 2. Promise.allSettled(promises) -> waits for all the promisess to settle and returns their results as an arrya 
//  of objects with status and value.

// let promise_all_settled = Promise.allSettled([promise1, promise2, promise3, promise4]);
// promise_all_settled.then((value)=>{
//     console.log(value)
// })


// 3. Promise.race(promises) -> waits for the first promise to settle and its result/ error 
// becomes the outcome

// let promise_race = Promise.race([promise1, promise2, promise3, promise4]);
// promise_race.then((value)=>{
//     console.log(value)
// })

// 4. Promise.any(promises) -> waits for the first promise to fulfill (& not rejected), and 
//  its result becomes the outcome and throws aggregate Error if all the promises are rejected.

// let promise_any = Promise.any([promise1, promise2, promise3, promise4]);
// promise_any.then((value) => {
//     console.log(value)
// })

// 5. Promise.resolve(value) -> Makes a resolved promise with the given value

// let Promise_resolve = Promise.resolve([promise1, promise2, promise3, promise4]);
// Promise_resolve.then((value)=>{
//     console.log(value)
// })

// 6. Promise.reject(error) -> Makes a rejected promise with the given error.

// let promise_reject = Promise.reject([promise1, promise2, promise3, promise4]);
// promise_reject.then((value)=>{
//     console.log(value)
// });


// Async / Await

// There is a special syntex to work with promise in javascript
// A function cna be made async by using async keyword like this :

// async function always returns a promise.
// Other values are wrapped in a promise automatically

// we can do something like this : 

// async function func() {

//     let delhiWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("32 Deg")
//         }, 3000);
//     })

//     let bangloreWeather = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("21 Deg")
//         }, 5000);
//     })

//     // delhiWeather.then(alert)
//     // bangloreWeather.then(alert)

//     console.log("fetching delhi weather");
//     let delhiW = await delhiWeather
//     console.log("delhi weather fetched..." + delhiW);
//     console.log("fetching banglore weather");
//     let bangloreW = await bangloreWeather
//     console.log("banglore weather fetched..." + bangloreW);

//     return [delhiW, bangloreW]
// }

// const cherry = async () => {
//     console.log("This is extra function called Cherry!");
// }

// const main1 = async () => {
//     console.log("Welcome to Weather Control Room")
//     let a = await func()
//     let b = await cherry()


// }

// main1();

// Error Handling: try and catch => 

// The try... catch Syntex
// The try catch syntex has two main blocks : 
// try and then catch

// try{
//     console.log(rahul) // it will try this if error
// }catch(err){
//     console.log("Balle Balle") // then this code will executes
// }

// setTimeout will not stop the script
// normally if error then that will stop the script

/*
try catch works synchronously
if an exception happened in schedule code,
like in setTimeout, then try ...catch won't catch it

try {
    setTimeout(() => {
        console.log(rahul) // script dies and catch won't work
    }, 100);
} catch (err) {
    console.log(err) 
}

That's because the function itself is executes later
when the engine has already left try ...catch construct.

*/

// The Error Object & Custom Errors =>

// The Error Object
// For all the build in errors, the error object has two main properties : 

// try {
//     let age = prompt("Enter your age: ");
//     age = Number.parseInt(age);
//     if (age > 120) {
//         throw new ReferenceError("This is probably not true"); // this is costum ReferenceError
//         // throw new SyntaxError("This is probably not true"); // this is costum SyntaxError
//     }
// } catch (err) {
//     // console.log(err)
//     console.log(err.name)
//     // console.log(err.message)
//     // console.log(err.stack)
// }

// console.log("The script is still running")

// The Finally Clause =>

// try {
//     let a = 0;
//     // console.log(program)
//     console.log("Program run successfully")
//     return
// } catch (err) {
//     console.log("This is an error")
//     console.log(p)
// } finally {
//     console.log("I am a good boy")
//     // close the file
//     // Exit the loop
//     // write to the log file
// }

// console.log("it will run")
// // finally always run if code successfully runs or code fails finally will always run

// Practice Set 9 ==========>

// 1. Solution

// function loadScript(src){
//     let promise = new Promise(function(resolve, reject){
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = resolve(1);
//         document.body.appendChild(script)
//     })
//     promise.then(alert("Script loaded successfully"))
//     promise.then(console.log("script loaded successfully : " + src));
// }

// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js')

// 2. Solution

// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = () => {
//             resolve(src)
//         };
//         document.body.appendChild(script);
//     })
// }

// const main1 = async () => {
//     console.log(new Date().getMilliseconds())
//     let a = await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js')
//     console.log(a)
//     console.log(new Date().getMilliseconds())
// }

// main1();

// 3. Solution

// let promise = async () => {

//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             reject(new Error('This is an error'));
//         }, 3000);
//     });
// }

// let a = async () => {
//     try{
//         let b = await promise()
//         console.log(b)
//     }catch(err){
//         console.log(err.message)
//     }
// }

// a()

// 4. Solution

// const p1 = async () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(10)
//         }, 2000);
//     })

// }
// const p2 = async () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(20)
//         }, 1000);
//     })

// }
// const p3 = async () => {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(30)
//         }, 3000);
//     })

// }

// const run = async () => {
//     console.time("run")
//     let a1 = await p1();
//     let a2 = await p2();
//     let a3 = await p3();
//     console.log(a1, a2, a3);
//     console.timeEnd("run")
// }

// const run = async () => {
//     console.time("run");
//     let a1 = p1();
//     let a2 = p2();
//     let a3 = p3();
//     let a1a2a3 = await Promise.all([a1,a2,a3])
//     console.log(a1a2a3)
//     console.timeEnd("run")
// }
// run()