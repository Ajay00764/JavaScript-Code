// ------------------------------- Prototype and __proto__ -------------------------------

// const a = {
//     name : "Ajay",
//     language : "JavaScript",
//     age : 20
// }
// const p = {
//     run : ()=>{
//         alert("run")
//     }
// }
// p.__proto__ = {
//     name2 : "Rahul"
// }
// a.__proto__ = p // a will getting propertys and methods of p 
// a.run() // getting value / methods with prototype 
// console.log(a.name2)


// ------------------------------- Classes And Objects -------------------------------

// class RailwayForm {
//     // class methods
//     submit(){
//         console.log(this.name + ": your form is submitted for train no : " + this.trainno)
//     }
//     cancel(){
//         console.log(this.name + ": this form is cancelled for train no : " + this.trainno)
//     }
//     fill(givenname, trainno){
//         this.name = givenname
//         this.trainno = trainno
//     }
// }

// let ajay = new RailwayForm
// ajay.fill("Ajay", 315434)

// let rohan = new RailwayForm
// rohan.fill("Rohan", 222420)
// let rohan2 = new RailwayForm
// rohan2.fill("Rohan", 2229211)

// ajay.submit()
// rohan.submit()
// rohan2.submit()
// rohan.cancel()


// ------------------------------- constructors // runs by default -------------------------------

// class RailwayForm {
//     // class methods
//     constructor(givenname, trainno){
//         console.log("CONSTRUCTOR CALLED..." + givenname +" "+ trainno)
//         this.name = givenname
//         this.trainno = trainno
//     }
//     submit(){
//         console.log(this.name + ": your form is submitted for train no : " + this.trainno)
//     }
//     cancel(){
//         console.log(this.name + ": this form is cancelled for train no : " + this.trainno)
//     }
// }

// // create and fill a form for ajay
// let ajay = new RailwayForm("Ajay", 315434)

// // create and fill a form for rohan
// let rohan = new RailwayForm("Rohan", 222420)
// let rohan2 = new RailwayForm("Rohan", 2229211)

// ajay.submit()
// rohan.submit()
// rohan2.submit()

// rohan.cancel()

// class RailwayForm {
//     constructor(givenname , trainno, address){
//         console.log("constructor called" + givenname + " " + trainno + " " + address)
//         this.name = givenname;
//         this.trainno = trainno;
//         this.address = address
//     }

//     preview(){
//         alert(`${this.name} : your form is for train no ${this.trainno} and your address is ${this.address}`)
//     }
//     submit(){
//         alert(`${this.name} : your form is sumbitted for train no ${this.trainno}`)
//     }
//     cancel(){
//         alert(`${this.name} : your form is cancelled for train no ${this.trainno}`)
//         this.trainno = 0
//     }
// }


// let AjayForm = new RailwayForm("Ajay", 223344, "420, Pacific Ocean, Ocean, Bihar - 000555")

// AjayForm.preview()
// AjayForm.submit()
// AjayForm.cancel()


// ------------------------------- Inheritance And Extence Keyword -------------------------------

// class Animal {
//     constructor(name, color){
//         this.name = name
//         this.color = color
//     }
//     run(){
//         console.log(this.name + " is running")
//     }
//     shout(){
//         console.log(this.name + " is Barking!")
//     }
// }

// class Monkey extends Animal {
//     eatBanana(){
//         console.log(`${this.name} is eating banana`)
//     }
//     hide(){
//         console.log(`${this.name} is hiding`)
//     }
// }

// let ani = new Animal("Bruno", "white")
// let m = new Monkey("Chimpu", "orange")

// ani.shout()
// m.eatBanana()
// m.hide()


// ------------------------------- method Overriding -------------------------------

// class Employee {
//     login(){
//         console.log(`Employee has logged in`)
//     }

//     logout(){
//         console.log(`Employee has logged out`)
//     }

//     requestLeaves(leaves){
//         console.log(`Employee has request ${leaves} leaves - Auto approved`)
//     }
// }

// class Programmer extends Employee {
//     requestCoffee(x){
//         console.log(`Employee has requested ${x} coffees`)
//     }

//     requestLeaves(leaves){
//         super.requestLeaves(4)
//         console.log("One extra is granted")
//         // console.log(`Employee has request ${leaves + 1} leaves (One Extra)`)
//     }
// }


// let e = new Programmer()
// e.login()
// e.requestLeaves(3)


// -------------------------------- Overriding Constructor -------------------------------

// class Employee {
//     constructor(name){
//         console.log(name + " Employee's constructor is here...")
//         this.name = name
//     }
//     login(){
//         console.log(`Employee has logged in`)
//     }

//     logout(){
//         console.log(`Employee has logged out`)
//     }

//     requestLeaves(leaves){
//         console.log(`Employee has request ${leaves} leaves - Auto approved`)
//     }
// }

// class Programmer extends Employee {

//     constructor(name){
//         super(name)
//         console.log(name + " Programmers's constructor is here...")
//         this.name = name
//     }

//     // constructor(...args){ --> If there is no constructor in the child class, this is created automatically !!
//     //     super(...args)
//     // }

//     requestCoffee(x){
//         console.log(`Employee has requested ${x} coffees`)
//     }

//     requestLeaves(leaves){
//         super.requestLeaves(4)
//         console.log("One extra is granted")
//         // console.log(`Employee has request ${leaves + 1} leaves (One Extra)`)
//     }
// }


// let e = new Programmer("Harry")
// e.login()
// e.requestLeaves(3)

// ------------------------------- Static Methods -------------------------------

// class Animal {
//     constructor(name){
//         this.name = Animal.capitaliz(name)
//     }
//     walk(){
//         console.log(`Animal ${this.name} is walking`);
//     }
//     static capitaliz(name){
//         return name.charAt(0).toUpperCase() + name.substr(1,name.length)
//     }
// }

// j = new Animal("jack")
// j.walk()
// // j.capitaliz("someting") --> we can not do this


// ------------------------------- Getters And Setters -------------------------------

// class Animal {
//     constructor(name) {
//         this._name = name
//     }
//     fly() {
//         console.log("Hey look at me i am flying")
//     }
//     get name(){
//         return this._name
//     }   
//     set name(newName){
//         this._name = newName;
        
//     }
// }

// class Rabbit extends Animal {
//     carrot(){
//         console.log("eating Carrot")
//     }
// }

// some = new Rabbit("rohan")
// some.fly()
// console.log(some.name)
// some.name = 'jack'
// console.log(some.name)

// ------------------------------- instanceof Operator -------------------------------

// console.log(some instanceof Animal) // return true
// console.log(some instanceof Rabbit) // return true
// let c = 23;
// console.log(c instanceof Animal) // return false


// ------------------------------- Practice Set 11 -------------------------------

// 1. Solution && 2. Solution

// class Complex {
//     constructor(real, imaginary){
//         this.real = real
//         this.imaginary = imaginary
//     }
//     add(num){
//         this.real = this.real + num.real
//         this.imaginary = this.imaginary + num.imaginary
//         return new Complex(this.real, this.imaginary)
//     }
// }

// let a = new Complex(2,4)
// let b = new Complex(6,2)

// console.log(a.add(b))
// console.log(`${a.real}+${a.imaginary}i`)

// 3. Solution

// class Human {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     walk(){
//         console.log(`${this.name} is walking`)
//     }
//     drinking(){
//         console.log(`${this.name} is drinking`)
//     }
//     studying(){
//         console.log(`${this.name} is studying`)
//     }
// }

// class Student extends Human {
//     studying(){
//         console.log(`${this.name} is trying to study`)
//     }
// }

// let ajay = new Student("Ajay", 20)
// ajay.walk()
// ajay.drinking()
// ajay.studying()


// 4. Solution

// console.log(ajay instanceof Student) // true
// console.log(ajay instanceof Human) // true


// 5. Solution

// class Complex {
//     constructor(real, imaginary){
//         this._real = real
//         this._imaginary = imaginary
//     }
//     add(num){
//         this._real = this._real + num._real
//         this._imaginary = this._imaginary + num._imaginary
//         return new Complex(this._real, this._imaginary)
//     }
//     get real (){
//         return this._real
//     }
//     set real(newReal){
//         this._real = newReal
//     }

//     get imaginary(){
//         return this._imaginary
//     }
//     set imaginary(newImaginary){
//         this._imaginary = newImaginary
//     }
// }

// let a = new Complex(2,4)
// console.log(a.real, a.imaginary)
// a.real = 10
// a.imaginary = 10
// let b = new Complex(6,2)
// console.log(a.add(b))
// console.log(`${a.real}+${a.imaginary}i`)