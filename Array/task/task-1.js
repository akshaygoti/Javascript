// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451

// example 1
// this is arrow

let x = function(x){
    x = x+""
    return Number(x.split("").reverse().join(""));
}

console.log(x(8765));



// this is arrow:-

// let add = (n)=>{
//     n = n+""
//     return Number(n.split("").reverse().join(""));
// }
// console.log(add(54321));