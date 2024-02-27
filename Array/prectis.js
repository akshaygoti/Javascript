// Array // 

// An array is a special variable, which can hold more than one value.

// An array can hold many values under a single name, and you can access the values by referring to an index number.


// method


// Array lenght :-

// -> The length property of an array returns the length of an array (the number of array elements).

// example 1

// const car=["volvo","BMW","kia","Toyta"];
// let length = car.length;


// const menu=["Khaman","patra","Fafda"];
// let length = menu.length;

// console.log(length);

// Push

// The easiest way to **add a new element** to an array is using the push() method.

// The **push()** method returns the new array length.

// -> push e last ma eliment add kare

// example 1

// const car=["volvo","BMW","kia","Toyta"];
// car.push("Audi");


// const menu=["Khaman","patra","Fafda"];
// menu.push("Farsan");
 
// console.log(menu);

// const fruits = ["Banana", "Orange", "Apple"];
// fruits.push("Kivi");

// console.log(fruits);


// Pop

// The pop() method removes the **last element** from an **array**.

// The pop() method returns the value that was **"popped out"**.


// -> last eliment remove kare this pop

//  const car=["volvo","BMW","kia","Toyta"];
//  car.pop();
//  console.log(car);


// const fruits = ["Banana", "Orange", "Apple"];
// fruits.pop();

// console.log(fruits);

// const name=["akshay","nikhil","jayen"];
// name.pop();

// console.log(name);

// Shift

// The shift() method **removes** the **first array element** and **"shifts"** all other **elements to a lower index**.

// The shift() method returns the value that was **"shifted out"**.

// -> shift e first eliment remove lare che

// const car=["volvo","BMW","kia","Toyta"];
// car.shift();

// console.log(car);

// const fruits = ["Banana", "Orange", "Apple"];
// fruits.pop();

// console.log(fruits);


// const name=["akshay","nikhil","jayen"];
// name.pop();

// console.log(name);


// Unshift:-
//-> first eliment ne add kare.

// The unshift() method **adds a new element** to an array (**at the beginning**), and "unshifts" older elements.

// The **unshift()** method returns the new array length.


// example 1

// const demo = ["c","c++","dca","html"];
// demo.unshift("javascript");

// console.log(demo);

// example 2
// const number = [10,20,30,40];
// number.unshift(0);

// console.log(number);

// example 3
// let car = ["volvo","Audi"];
// car.unshift("BMW");

// console.log(car);


// Array Changing Elements:-

//-> index number pr add kare. remove kari ne add kare

// Array elements are accessed using their index number.

// example 1
// const car = ["ola","audi","volvo"];
// car[2]="kia";
// console.log(car);

// example 2
// const number = [10,20,30,40];
// number[3]=50;
// console.log(number);

// example 3
// const menu = ["Piza","Dosa"];
// menu[0]="Panipuri";
// console.log(menu);

// Concat(Merging):-

// The concat() method creates a new array by merging (concatenating) existing arrays.

// const Thegir = ["Sneha","Liza","Priynka"];
// const Theboy = ["John","Nikhil","Smit"];
// const allstudents = Theboy.concat(Thegir);

// console.log(allstudents);

// const baik = ["John","Nikhil","Smit"];
// const car = ["Sneha","Liza","Priynka"];
// const allbaik = baik.concat(car);

// console.log(allbaik)

// const language = ["Marathi","English","Gujrati"];
// const language1 = ["Bengali ","Hindi","Punjabi"];
// const language2 = ["Malayalam","Tamil","Urdu"];
// const Alllanguage = language.concat(language1,language2);
// console.log(Alllanguage);

// Array Splice():-

// The splice() method adds new items to an array.

// example 1

// const language = ["Hindi","Tamil","Punjabi"];
// language.splice(0,2, "English","Marathi");
// console.log(language);

// const car = ["Volvo","Audi","Toyta","Kia"];
// car.splice(1,3, "Ola","BMW")

// console.log(car);

// const number = [10,20,30,40];
// number.splice(0,1,3, 50,60,70);
// console.log(number);

// Array Slice():-

// The slice() method slices out a piece of an array into a new array.

// The slice() method creates a new array.

// The slice() method does not remove any elements from the source array.

// example 1

// const number = [10,20,30,40,50];
// const number0 = number.slice(1) 
// let lenght = number.length;
// console.log(number0);  // 20 30 40 50
// console.log(lenght); // 5

// const name = ["goti","sujal","jaydip"];
// const allname = name.slice(0);
// console.log(allname); 

// const car = ["toyta","vento","alto","audi","kia"];
// const allcar = car.slice(2);
// console.log(allcar); 

// Array Sort():-

// The sort() method sorts an array alphabetically

// example 1

// const number = [20,30,50,10,2,9];
// number.sort();
// const length = number.length
// console.log(number);
// console.log(length);

// const Car = ["volvo","BME","Audi","Kia"];
// Car.sort();
// const length = Car.length
// console.log(Car);
// console.log(length);

// Numeric Sort:-

// const points = [40, 100, 1, 5, 25, 10, 50, 66, 3];

// points.sort(function(a, b){
// 				return a - b;
// });

// console.log(points); //1, 3, 5, 10, 25, 40, 50, 66, 100


// Array Reverse():-

// The reverse() method reverses the elements in an array.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// fruits.reverse();

// console.log(fruits);
// // Orange, Mango, Banana, Appl

// const car = ["volvo","BMW","kia"]
// car.reverse();
// console.log(car);

// Array Max():-

// The Math.max.apply to find the highest number in an array.

// example 1

// function myArrayMax(arr) {
//     return Math.max.apply(null, arr);
// }

// const points = [40, 100, 1, 5, 25, 10];
// myArrayMax(points);

// console.log(points);
// The highest number is 100.


// Array Min():-

// The Math.min.apply to find the lowest number in an array.

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}

const points = [40, 100, 1, -5, 25, 10];
myArrayMin(points);
console.log();
// The lowest number is -5.


// Array forEach():-

// The forEach() method calls a function (a callback function) once for each array element.

// example 1

// const number = [10,20,30,40,50];
// let txt = "";
// number.forEach(myFunction); 
//     function myFunction(value,index,array){
//         txt  += value + " ";
//      }
//      console.log(number);

// Array map

// The map() method creates a new array by performing a function on each array element.

// The map() method does not execute the function for array elements without values.

// The map() method does not change the original array.

// example 1

//const name1= [10,30,50,3,6,9,];
// const name2= name1.map(myFunction);

// function myFunction(val,index,array) {
//     // return value + 10;
//     // return value - 1;
//     return value * 3;
// }
// console.log(name2);

// const name1= [10,30,50,3,6,9,];
// const result = name1.map((val,index) =>{
//     return val * 2;
// })

// console.log(result);


// Array filter():-

// The filter() method creates a new array with array elements that pass a test.

// example 1

// const digit = [25,301,57,78,10,56,32,13,65,20,200,54,7,100,299];
// const digit0=(digit.length);
// const digit1 = digit.filter((val,index) =>{
//     return val >90;
// })
// console.log(digit1);
// console.log(digit0);

// Array reduce():-

// The **reduce()** method runs a function on each array element to produce (reduce it to) a single value.

// The **reduce()** method works from left to right in the array. See also **reduceRight()**.

// example 1

// const number =[25,301,57,78,10,56,32,13,65,20,200,54,7,100,299,7,87,32];
// const number0=[number.length]
// const sum =number.reduce(function(total,val){
//     return total+val;
// },0);
// console.log(number);
// console.log(sum);
// console.log(number0);

// Array reduceRight():-

// The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

// The reduceRight() works from right to left in the array.

// example 1
//  const number = [25,301,57,78,10,56,32,13,65,20,200,54,7,100,299,7,87,32];
//  const sum = number.reduceRight(function(total,val){
//     return total + val;
// },0);

// console.log(sum);

// Array every():-

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// const numbers = [45, 4, 9, 16, 25];
// const allOver18 = numbers.every(function (val){
// 			return val > 45;
// });

// console.log(allOver18);

// Array some():-

// The **some()** method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise, it returns false.

// It doesn't modify the array.

// example 1

// const number = [54,4,89,90,54];
// const someOver18 = number.some(function (val){
//     return val > 18;
// });


// Array find():-

// The **find()** method returns the first element in the provided array that satisfies the provided testing function.

// If no values satisfy the testing function, **undefined** is returned.

// const numbers = [54,4,89,90,54];
// const first = numbers.find(function (val){
// 			return val > 18;
// });

// console.log(numbers);

// Array findIndex():-

// The findIndex() method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// example 1

// const numbers = [54,4,89,90,54];
// const firstIndex = numbers.findIndex(function (val){
// 			return val > 18;
// });

// Array entries():-

// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

// example 1

// const array1 = ['a', 'b', 'c'];
// const iterator1 = array1.entries();
// console.log(iterator1.next().value); // [0, "a"]
// console.log(iterator1.next().value); // [1, "b"]

// Array includes():-

// The Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).

// The Array.includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.includes("Mango"); // true

// Array copyWithin():-


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.copyWithin(2, 0)); // Banana, Orange, Banana, Orange


const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits.copyWithin(2, 0, 2));
// Banana, Orange, Banana, Orange, Kiwi, Papaya