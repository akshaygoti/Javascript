/* This Function */
// Block of code that performs a sprcific task , can invoked whenever needed.
// Javascript function are defined with the function keyword.
// you can use  function declaration or a function expression.


// function myfunction(a, b){
//  return a * b;
// }

// myfunction(10,5);


// Function Declaration

// function myFunction(a, b) {
//     return a * b;
// }

// myFunction(10,2) // 20

//Function Expression or  anonymous function

// X = function (a,b){
//     return a*b;
// }
// let y = X   (20*2); //10

// let product = function (a,b){
//     return a*b;
// }
// console.log(product(a,b));

// Z = function (a,b){
//     return a-b;
// }
// let x = Z(10-5) //5


// basic function
// function add(a,b){
//     return a+b;
// }
// console.log(5,15);

// function med(z,x){
//     return z-x;
// }
// console.log(100-90)


// Hoisting 
// hoisting(10,20);  // function call

// function hoisting(a,b){
//     console.log(a*b);
// } 

// akshay(66,2);
// function akshay(p,s){
//     console.log(p/s);
// }


// IIFE //a function that is called immediately after it is defined.

// let  x = (function hello (a,b){
//     return (a-b);  
// })(20,12);
// console.log(x);

// let y = (function world (x,y,z){
//     return (x-y-z);
// })(10,20,40);
// console.log(y);

// let z = (function sahil (a,b,c,d){
//     return(a*b*c*d);
// })(29,54,76,98);
// console.log(z)

// -----------------------**********--------------------

// 1.
//  function add(a , b){
//         return a + b;
//     }
//     console.log(add(15,5));

// 2.
// function add(c,d){
//     return c - d;
// }
// console.log(add(15,5))

// 3.
// function add(x,y,z){
//     return x*y*z;
// }
// console.log(add(10,20,30));

// 4.
// call("hello");

// function call(){
//     return a*b;
// }

// 5.
// let a;

// function hello(a){
//     if(a>0){
//         console.log("A is positive")
//     }
//     else{
//         console.log("A is nagetive");
//     }
//     return a;
// }
// console.log(hello(20));

// let z,y;

// function hello1(z,y){
//     for(z=1;z<=10;z++)
//     {
//         for(y=1;y<=10;y++)
//         {
//             consol.log(z);
//         }
//     }
//     return z;
// }
// console.log(hello1(30));     

// -------------------****************--------------------------

// Gererator Function:-

// ->A generator function is defined like a normal function, but whenever it needs to generate a value, it does so with the yield keyword rather than return. 
// ->The yield statement suspends the function’s execution and sends a value back to the caller, but retains enough state to enable the function to resume where it is left off. When resumed, the function continues execution immediately after the last yield.

// example 1
// function* powers(n) {
//     for(let current = n; ; current*= n){
//         yield current;
//     }
// }

// for (const power  of powers(2)){
//     if(power>32){
//         break;    
//     }
//     console.log(power);
// }

// example 2
// function* generate(){
//     yield 10;
//     yield 20;
//     return 30;
// }
//  let generator = generate();
//  console.log(generator.next().value);
//  console.log(generator.next().value);
//  console.log(generator.next().value);

// example 3
// function* generate(){
//     yield 'ol';
//     yield 'pl';
//     yield 'zl';
// }
// let generator = generate();
// console.log(generator.next().value);
// console.log(generator.next().value);
// console.log(generator.next().value);

// example 4
// function * generate(){
//     yield 'Physics';
//     yield 57;
//     yield 'Chemistry';
//     yield 76;
//     yield 'Biology';
//     yield 82;
// }
// let generator = generate()
//     console.log(generator.next().value);
//     console.log(generator.next().value);
//     console.log(generator.next().value);
//     console.log(generator.next().value);
//     console.log(generator.next().value);
//     console.log(generator.next().value);

// This keyword

// ->The this keyword refers to an object.
// ->which object depends on how this is being invoked.
// ->The this keyword refers ti defferent objects depebding on how it is used.

// example 1
// const person = {
//     firstName: "Akshay",
//     lastName: "Goti",
//     age: 19,
//     id: 5566,
//     "hello":function(){
//         return this.firstName+ " " + this.lastName;
//     }
// }
// console.log(person.hello());

// example 2
// let person1 ={
//     Name: "Smit",
//     thisName: "JOhn",
//     age: 18,

//     "Name1":function(){
//         return this.Name + " " + this.thisName;
//     }
// }
// console.log(person1.Name1());

// example 3
// let person2={
//     number1: 10,
//     number2: 20,
//     number3: 30,

//     "number":function(){
//         return this.number1 + " " + this.number3;
//     }
// }
// console.log(person2.number());


// Function :-

function add(...args){
    let sum = 0;
    for (let i=0;i<args.length;i++)
            sum = sum + args[i] ;
    return sum;
};

console.log(add(10,20,30));