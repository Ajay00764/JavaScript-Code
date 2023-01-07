let a = ("Initializing Hack Program...");
let b = ("Hacking Ashish's username...");
let c = ("username found aashish17...");
let d = ("connecting to facebook...");

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");

const func = async () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(box1.innerHTML = a)
        },1000)
    })
    promise.then(()=>{
        setTimeout(() => {
        box2.innerHTML = b;
        }, 2000);
    }).then(()=>{
        setTimeout(() => {
        box3.innerHTML = c;
        }, 3000);
    }).then(()=>{
        setTimeout(() => {
        box4.innerHTML = d;
        }, 4000);
    }).then(()=>{
        setTimeout(() => {
            hr.style.width = "80%"
        }, 5000);
    }).then(()=>{
        setTimeout(() => {
        box5.innerHTML = "Hacking Successful !!"
        }, 8000);
    })
}

func()