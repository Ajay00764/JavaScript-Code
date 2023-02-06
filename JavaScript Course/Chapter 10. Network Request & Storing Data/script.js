// Fetch API 

// let p = fetch('https://api.publicapis.org/entries',{ headers : {
//     Authetication : 'secret'
// }})

// p.then((response)=>{
//     console.log(response.ok)
//     console.log(response.status)
//     console.log(response.headers)
//     return response.json()
// }).then((response)=>{
//     console.log(response)
// })


// Post Request 

// let options = {
//     method : 'POST',
//     headers : {
//         'Content-Type' : 'application/json',
//     },
//     body: JSON.stringify({
//         title: "harry",
//         bhat : "bhai",
//         userId : 1000
//     }),
// }

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//     .then((response)=>{response.json()})
//     .then((json)=>{console.log(json)});

// const createTodo = async (todo) => {
//     let options = {
//             method: "POST",
//             headers: {
//                     "Content-type": "application/json"
//             },
//             body: JSON.stringify(todo),
//     }
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json()
//     return response
// }

// const getTodo = async (id) => {
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
//     let r = await response.json()
//     return r
// }

// const mainFunc = async () => {
//     let todo = {
//             title: 'Harry2',
//             body: 'bhai2',
//             userId: 1100,
//     }
//     let todor = await createTodo(todo)
//     console.log(todor)
//     console.log(await getTodo(101))
// }

// mainFunc()

// let p = fetch('https://jsonplaceholder.typicode.com/posts')

// p.then((response)=>{
//     console.log(response.ok)
//     console.log(response.status)
//     return JSON.stringify(response)
// }).then((response)=>{
//     console.log(response)
// })

// Fetch API

// let p = fetch('https://wordsapiv1.p.mashape.com/words/inevitable/memberOf')

// p.then((response)=>{
//     console.log(response.ok)
//     console.log(response.status)
//     return response.json();
// }).then((response)=>{
//     console.log(response)
// })


// Chapter 10. Network Request and Storing data

// Fetch API 

// let promise = fetch('https://kontests.net/api/v1/all')

// promise.then((response) => {
//     console.log(response.ok)
//     console.log(response.status)
//     return response.json();
// }).then((response) => {
//     let body = document.body;
//     for (item in response) {
//         body.innerHTML = body.innerHTML + `<ul class="container">
//         <li>
//             <img src="/programming.png" height="200px" width="350px" style="border:2px solid white">
//         </li>
//         <li>
//             Name : ${response[item].name}]}
//         </li>
//         <li>
//             Start Time : ${response[item].start_time}
//             </li>
//         <li>
//             End Time : ${response[item].end_time}}
//         </li>
//             <button><a href="${response[item].url}">Visit Site</a></button>
//     </ul>`
//     }
// })
