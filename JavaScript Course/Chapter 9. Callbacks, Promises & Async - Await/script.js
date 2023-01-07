// synchronous actions

// console.log("This will print first")
// console.log("This will print second")
// console.log("This will print last")

// Asynchronous actions

// console.log("This will print first")
// setTimeout(() => {
//     console.log("this will print after 1 sec")
// }, 1000);
// console.log("This will print before settimeout function")

// Callback function

// function loadScript(src, callback){
//     let script = document.createElement("script")
//     script.src = src;
//     script.onload = ()=>{callback(null, src)}
//     script.onerror = () =>{callback(new Error("Script failed to load : " + src))}
//     document.body.appendChild(script);
// }

// function ajay(error, src) {
//     if(error){
//         console.log(error)
//     }else{
//         console.log("Script Loaded Successfully : " + src);
//     }
// }

// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js', ajay)

// Callback Hell / Pyramid Of Doom 

// function loadScript(src, callback){
//     let script = document.createElement("script")
//     script.src = src;
//     script.onload = ()=>{callback(null, src)}
//     script.onerror = () =>{callback(new Error("Script failed to load : " + src))}
//     document.body.appendChild(script);
// }

// loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js', ((error, src)=>{
//     if(error){
//         console.log(error);
//     }else{
//         loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js', ((error, src)=>{
//             if(error){
//                 console.log(error);
//             }else{
//                 loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js', ((error, src)=>{
//                     if(error){
//                         console.log(error);
//                     }else{
//                         loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js', ((error, src)=>{
//                             if(error){
//                                 console.log(error);
//                             }else{
//                                 loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js', ((error, src)=>{
//                                     if(error){
//                                         console.log(error);
//                                     }else{
//                                         loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js')
//                                     }
//                                 }))
//                             }
//                         }))
//                     }
//                 }))
//             }
//         }))
//     }
// }))


// Promises 

// Syntax of Promises 

// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('12')
//     }, 1000)
// })

// let promise2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         reject(new Error("Some error occurred"))
//     }, 2000);
// })

// Consumers : then & catch

// promise.then((value)=>{
//     console.log(value)
// })

// promise2.catch((err)=>{
//     console.log(err)
// })

// LoadScript Using Promises 

// function loadScript (src) {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script")
//         script.src = src
//         script.onload = () => {
//             resolve(src)
//         }
//         script.onerror = () =>{
//             reject(new Error("Script failed to load : " + src))
//         }
//         document.body.appendChild(script);
//     }).then((x)=>{
//         console.log("Script loaded successfully : " + x)
//     }).catch((x)=>{
//         console.log(x)
//     })
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")


// Promises Chaining

// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('12')
//     }, 1000)
// })

// promise.then((value) => {
//     console.log(value)
//     return value - 2
// }).then((value) => {
//     console.log(value)
//     return value * value
// }).then((value) => {
//     console.log(value)
//     return 10
// }).then((value) => {
//     console.log(value + ' x ' + value + " = " + value * value)
// }).catch((err) => {
//     console.log(err)
// })


// Attaching Multiple Handlers

// let promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve(22)
//     }, 2000);
// })

// promise.then((value) => {
//     console.log(value)
// })

// promise.then((value)=>{
//     console.log(value + value)
// })

// promise.then((value)=>{
//     console.log(value - value)
// })

// promise.then((value)=>{
//     console.log(value * value)
// })


// Promise API

// let p1 = new Promise((resolve, reject)=>{
//     resolve("value 1")
// })

// let p2 = new Promise((resolve, reject)=>{
//     resolve("value 2")
// })

// let p3 = new Promise((resolve, reject)=>{
//     resolve("value 3")
// })

// let promise_all = Promise.all([p1, p2, p3]);
// promise_all.then((x)=>{
//     console.log(x)
// })

// let promise_allSettled = Promise.allSettled([p1, p2, p3]);
// promise_allSettled.then((x)=>{
//     console.log(x)
// })

// let promise_race = Promise.race([p1,p2,p3]);
// promise_race.then((x)=>{
//     console.log(x)
// })

// let promise_any = Promise.any([p1, p2, p3]);
// promise_any.then((x)=>{
//     console.log(x)
// })

// let promise_resolve = Promise.resolve(6);
// promise_resolve.then(alert)

// let promise_reject = Promise.reject(new Error("Some error"));
// promise_reject.catch(alert)


// Async / Await

// async function ajay () {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("value 1")
//         }, 1000);
//     })
// }

// async function rahul () {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve("value 2")
//         }, 2000);
//     })
// }

// async function boys () {
//     let a = await rahul();
//     console.log(a)
//     let b = await ajay();
//     console.log(b)
// }

// boys();


// Error handling

// try{
//     console.log(ajay)
// }catch(err){
//     console.log(err)
// }

// The error Object

// try{
//     what 
// }catch(err){
//     console.log(err.name)
//     console.log(err.message)
// }

// Throwing Custom Error

// let age = prompt("Enter your age : ");

// if(age>= 150){
//     // throw new Error("You are too old to go on marse");
//     // throw new SyntaxError("you are too old")
//     throw new ReferenceError("this age for human is not possible")
// }


// The Finally Clause 

// try{
//     console.log(sldkjls)
//     console.log("This will run when there is no error in try")
// }catch(x){
//     console.log(x)
//     console.log("This will run when an error is encountered")
// }finally{
//     console.log("This will run in both the cases ")
// }


// Practice Set Chapter 9 : 

// 1.Solution

// function loadScript(src){
//     return new Promise((resolve, reject)=>{
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = () => {resolve(src)};
//         script.onerror = () => {reject(new Error("Some Error occurred While loading script"))};
//         document.head.appendChild(script);
//     }).then((x)=>{
//         console.log("Script Loaded Successfully : "+x)
//     }).catch(alert);
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js")

// 2.Solution

// async function loadScript(src){
//     return new Promise((resolve, reject)=>{
//         let script = document.createElement('script');
//         script.src = src;
//         script.onload = () => {resolve(src)}
//         script.onerror = () => {reject(new Error("Some error occurred"))}
//         document.body.appendChild(script);
//     })
// }

// async function ajay () {
//     let a = await loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js')
//     console.log("Script loaded successfully : " + a)
// }

// ajay()

// 3.Solution

// async function ajay () {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             reject(new Error("I am An Error!!"))
//         }, 3000);
//     })
// }

// async function rahul () {
//     try{
//         let a = await ajay()
//     }catch(err){
//         console.log(err.name)
//         console.log(err.message)
//     }
// }

// rahul()

// 4.Solution

// async function p1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("1")
//         }, 1000);
//     })
// }

// async function p2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("2")
//         }, 2000);
//     })
// }

// async function p3() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("3")
//         }, 3000);
//     })
// }

// async function rahul() {
//     console.time("run")
//     // let a1 = await p1();
//     // let a2 = await p2();
//     // let a3 = await p3();
    
//     // console.log(a1,a2,a3); // this will take 6 seconds

//     let a1 = p1();
//     let a2 = p2();
//     let a3 = p3();
    
//     let promise_all = await Promise.all([a1,a2,a3]);
//     console.log(promise_all) // this will take just 3 seconds

//     console.timeEnd("run")
// }

// rahul()