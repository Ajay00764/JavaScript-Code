// console.log(document) // shows like dom tree
// console.dir(document) // shows like an object

// console.log(document.getElementsByTagName("div"))
// console.log(document.body.nodeName)

// innerHTML an outerHTML

// console.log(document.body.innerHTML) // shows innerHTML
// console.log(document.body.outerHTML) // shows targetd tag + innerHTML  

// console.log(document.body.firstChild.nodeValue)

// console.log(document.body.textContent)  // return text - all tags and comments

// document.body.hidden = true; // for hide elements

// Attribute methods

// let box = document.getElementById("box")
// let a = box.hasAttribute("class") // method to check for existence of an attribute
// let a = box.getAttribute("class") // returns the value of an attribute
// let a = box.setAttribute("style", "color : blue") // set the value of an attribute
// let a = box.removeAttribute("class") // removes the attribute
// let a = box.attributes
// console.log(a)


// Insertion method

// let div = document.createElement("div");
// div.className = "alert";
// div.id = "ajay"
// div.innerHTML = "<span>hello</span>";
// let body = document.body;

// body.append(div) // append at the end of the node
// body.prepend(div) // insert at hte beginning of the node
// body.before(div) // insert before the node
// body.after(div) // insert after node
// body.replaceWith(div)// replace node with the given node

// insertAdjecentHTML / text / elements

// let body = document.body;

// body.insertAdjacentHTML("beforebegin","<div>beforebegin</div>");
// body.insertAdjacentHTML("afterbegin","<div>afterbegin</div>");
// body.insertAdjacentHTML("beforeend","<div>beforeend</div>");
// body.insertAdjacentHTML("afterend","<div>afterend</div>");

// node removal
// document.body.remove() // removes the node
// let box = document.getElementById("box");
// classname and classList

// box.className = "red" // replace with whole class value
// box.classList.add("red"); // add new class with previous class and also removes it
// box.classList.remove("red"); // add new class with previous class and also removes it
// box.classList.toggle("red") // adds the class if it doesn't exist otherwise removes it.
// let n = box.classList.contains("container") // returns booleans (true, false)
// console.log(n)


// Settimeout 
// console.log("start")
// let a = setTimeout(() => {
//     console.log("hey ajay");
// }, 2000);
// console.log("end")

// clearTimeout(a) // will clearTimeout timeout will not run

// setInterval

// let a = setInterval(() => {
//     console.log("Ajay")
// }, 1000);

// clearInterval(a); // will clear setinterval interval will nor be called

// Browser events

// An event is a signal that something has happened 
// All the DOM nodes generate such signals.

// Some important DOM events are : 

// Mouse Events : click , context menu (right click), mouseover
// mouseout, mousedown, mouseup, mousemove

// KeyboardEvent : keydown, keyup, keypress

// form element events : submit, focus, etc.

// document events : DOMCONTEXTLOADED

// Handling events : Events can be handled throught HTML attributes

//  <input value="hey" onclick="alert('hey')" onkeypress="alert('hey') type="button">

// elem.onclick = function(){alert("you can do this too")}

// NOTE : Adding a handler with javascript  overwrites the existing handler

// addEventListener and remove event listeners

// addEventListener is used to assign multiple handlers to an event.

// Element.addedEventListener(event, handler)

// Element.removeEventListener(event, handler) // handler must be the same funciton object for this to work

// The Event object

// WHEN AN EVENT HAPPENS, THE BROWSER CREATES AN EVENT OBJECT, PUTS DETAILS INTO IT AND
// PASSES IT AS AN ARGUMENT TO THE HANDLER

// elem.onclick = function (event){
    // ...
// }
             
// event.type: Event type
// event.currentTarget: Element that handled the event
// event.clintx/event.clintY: coordinates of the cursor position


// Practice Set 8

// 1. Sulution

// red.addEventListener("click", (()=>{
//     alert("hey I am red")
// }))

// blue.addEventListener("click", (()=>{
//     alert("hey I am blue")
// }))

// green.addEventListener("click", (()=>{
//     alert("hey I am green")
// }))

// 2. Sulution

// google.addEventListener("click", (()=>{
//     google.href = "https://www.google.com"
// }))

// youtube.addEventListener("click", (()=>{
//     youtube.href = "https://www.youtube.com"
// }))

// 3. Solution

// setInterval(() => {
//     document.getElementsByClassName("bb")[0].classList.toggle("red")
// }, 1000);

// Practice set 8;

// 1. Solution

// let red = document.getElementById('red').onclick = function(){
//     alert("I am red")
// }
// let blue = document.getElementById('blue').onclick = function(){
//     alert("I am blue")
// }

// 2. Solution

// document.getElementById("google").onclick = function(){
//     location.href = "https://www.google.com"
// }
// document.getElementById("youtube").onclick = function(){
//     location.href = "https://www.youtube.com"
// }

// 3. Solution

// document.getElementById("google").addEventListener("click", ()=>{
//     location.href = "https://www.google.com";
// })
// document.getElementById("youtube").addEventListener("click", ()=>{
//     location.href = "https://www.youtube.com";
// })

// 4. Solution

// setInterval(() => {
//     console.log(document.getElementById("google").innerHTML)
// }, 1000);

// 5. Solution

// let box = document.getElementsByClassName("bb")[0];

// setInterval(() => {
// box.classList.toggle("red")
// }, 1000);