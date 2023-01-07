// Chapter 10 - Network Requests & Storing Data

// javascript can be used to send and retrieve
//  information from the network when needed(AJAX)

// Fetch API ==>

// fetch is used to get data over the network
// p is a promise 

// let p = fetch("https://goweather.herokuapp.com/weather/Ny") // without options, a get request is sent

// p.then((response) => {
//     console.log(response.status);
//     console.log(response.ok);
//     // console.log(response.url);
//     // console.log(response.type);
//     // console.log(response.headers);
//     return response.json();
// }).then((value) => {
//     console.log(value);
// })

// POST request => 

// const createTodo = async () => {

//     let options = {
//         method: 'POST',
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify({
//             title: "Ajay",
//             body: "Six pack",
//             userId: 23,
//         }),
//     }

//     let p = await fetch("https://jsonplaceholder.typicode.com/posts", options)
//     let response = await p.json()
//     return response
// }
// const getTodo = async (id) => {
//     let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
//     let r = await response.json()
//     return r
// }

// const mainFunc = async () => {
//     let todo = {
//         title: "Ajay",
//         body: "Six pack",
//         userId: 23,
//     }
//     let todor = await createTodo(todo);
//     console.log(todor)
//     console.log(await getTodo(101))
// }


// mainFunc()

// Cookies => 

