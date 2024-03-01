// using object literal
// const person ={
//     fname:"molk",
//     lname:"john",
//     age: 19,
//     eyeColor: "blue"
// };

// // using new object keyword
// const persone = new Object();
// persone.fname = "johan";
// person.lname = "Don";
// person.age = 50;
// person.eyeColor = "blue";

// console.log(person);

// objectName.property // person.age
// objectName["property"] // person["age"]
// objectName[expression] // x = "age"; person[x]



// const student ={
//     Name:"Jon mark",
//     marks:31,
//     printMarks: function () {
//         console.log("marks = ".this.marks);
//     },
// };

// prototyape:-

// const employee ={
//     text(){
//         console.log("this rate is 20%");
//     },
// };

// const Karan1 = {
//     salary:10000,
//     text (){
//         console.log("this rate is 10%");
//     }
// };
// const Karan2 = {
//     salary:30000,
//     text (){
//         console.log("this rate is 15%");
//     }
// };
// const Karan3 = {
//     salary:60000,
//     text (){
//         console.log("this rate is 20%");
//     }
// };
// const Karan4 = {
//     salary:40000,
//     text (){
//         console.log("this rate is 10%");
//     }
// };
// const Karan5 = {
//     salary:90000,
//     text (){
//         console.log("this rate is 20%");
//     }
// };

// Karan1.__proto__=employee;
// Karan2.__proto__=employee;
// Karan3.__proto__=employee;
// Karan4.__proto__=employee;
// Karan5.__proto__=employee;

// console.log(Karan1);
// console.log(Karan2);
// console.log(Karan3);
// console.log(Karan4);
// console.log(Karan5);

// *if object & prototype have same method object's method be used. 


const p0 ={
    p : "ok",
    p1 : "ok2",
    p2 : "ok3",
};

// method
// console.log(p0.p1); // 1

// console.log(p0["p"]); //2

// let b = p0.p2;
// console.log(b); // 3