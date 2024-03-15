// This is string its method:-
// -> A javascript string is zero or more characters written inside quotes.
//   you can use single od double quotes.

// example 1
// let a = "akshay goti";
// let b = 'akshay goti';

// console.log(a,b);

// example 2
// let x = "string method'this its methods'";
// let y = 'this its methods"string method"';

// console.log(x,y);

// srting methods:-

// Types of string methods are given below:

// string length                       
// string slice ()
// string substring()
// string substr()
// string replace()
// string replaceAll()
// string toUpperCase()
// string toLowerCase()
// string concat()
// string trim()
// string trimStart()
// string trimEnd()
// string padstart()
// string padEnd()
// string charAt()
// string charCodeAt()
// string split()

// string length:-
// The length property return the length of String.

// example 1
// let txt = "Javascript World";
// let length = txt.length;

// console.log(length);

// example 2
// let data = "          string method its methods      ";
// let length = data.length;

// console.log(length);

// string Slice():-

// exapmle 1.
// let text= "apple , Banana , kiwi";
// let length = text.slice(7,13); 

// console.log(length);

// example 2
// let data = "Nikhil,Goti,Raj";
// let length = data.slice();

// console.log(length);

// let text = "Apple, Banana, Kiwi";
// let data = text.slice(-12); // Banana, Kiwi

// console.log(text);

// let text1 = "Apple, Banana, Kiwi";
// let data1 = text.slice(-12,-6); // Banana

// console.log(text);

// String replace():-

//->If the first parametrs is negative, the position is counted from the end of the string.

// example 1
// let text = "hello, how ,are, you";
// let replacestr = text.replace() ;
// console.log(replacestr);

// example 2
// let data =" 20,30,40";
// let replacestr = data.replace()
// console.log(replacestr);

// String replaceAll():-

// -> The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

// let text = "I love cats. Cats are very easy to love. Cats are very popular.";
// text = text.replaceAll("Cats", "Dogs");
// text = text.replaceAll("cats", "dogs");
// console.log(text);

// example 2
// let text = "JavaScript often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS."

// text = text.replaceAll("often","Akshay");
// text = text.replaceAll("language","Nikhil");
// console.log(text);

function sum(...omg) {
    let sum = 0;
for (let arg of omg) 
                sum += arg;
return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77); //326

console.log(x);
