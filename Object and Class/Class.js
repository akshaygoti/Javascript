// class:-

// Class methods are created with the same syntax as object methods.

// Use the keyword class to create a class.

// Always add a **constructor()** method.

// Then add any number of methods.

// The call() method is a predefined JavaScript method. It can be used to invoke (call) a method with an owner object as an argument 
// (parameter). With call() , an object can use a method belonging to another object.

// example 1

// class Car{
//     cusm (name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age(){
//         const data = new Date();
//         return Date.getFullYear() - this.year;
//     }
// };

// const myCar = new Car("Ford", 2014);
// console.log(myCar.age() + 'Years old.');


// class Fortuner {
//   constructor(brand){
//     console.log("this is cunstructor");
//     this.brandmane = brand;
//   }
//   modal (){
//     console.log("Fortunerx");
//   }
//   modalx (){
//     console.log("Fortunerx+");
//   }
//   Brand(brand){
//     this.brandmane = brand;
//   }
// };

// let Toyota = new Fortuner("volvo") //cunstuctor

// console.log(Fortuner);
// // let Toyota = new Fortuner();
// // Toyota.Brand("Toyota1")

// console.log(Toyota);


// class person {
//   constructor(name){
//     this.name=name;
//   }
//   display = function(){
//     return "HEllo" + this.name ;
//   }
// };

// let obj = new person('John');

// console.log(obj);
// console.log(obj,name);
// console.log(obj.display);
// console.log(obj.display());



// call method:-


// let person ={
//   print:function(city){
//     return this.name + " " +this.surname + "\t" + city;
//   }
// };
// let nikhil={
//   name:"Nic",
//   surname: "Titari"
// }

// console.log(person.print.call(nikhil,"surat"));

// let student={
//   print:function(boy){
//     return this.name+ " " + this.surname + " " +this.std +   boy;
//   }
// };

// let Akshay ={
//   name: "Nikhil",
//   surname: "Pk",
//   std: "study in ",
// }

// console.log(student.print.call(Akshay,"Skill Qode"));

// Apply method:-

// let person = { 
//   print: function(City){
//     return this.name + " " +this.surname+" is visit in "+ City;
//   }
// };

// let viru={
//   name:"virat",
//   surname:"kohli"
// }
// console.log(person.print.apply(viru,["surat"])); //virat kohli is visit in surat