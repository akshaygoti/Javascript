// Set

// A JavaScript Set is a collection of unique values.

//   Method                 Description
// 1. new set()    Creates a new Set
// 2. add()        Adds a new element to the Set
// 3. delete()     Remove an element from a Set 
// 4. has()        Returns true if a value exists in the Set 
// 5. clear()      Removes all elements from a Set 
// 6. forEach()    Invokes a callback for each element in the Set     
// 7. values()     Returns an iterator with all the values in a Set 
// 8. entries()    Returns an iterator with all the values in a Set 
// 9. Size()       Returns a number of elements in a Set 

const demo = new Set(["a","b","c"]);

console.log(demo);

// This Add method
const x = new Set()
x.add("a");
x.add("b");
x.add("c","pink");

// This values method
// x.values();
// console.log(x);

// This size method
// let Size = x.size;

// Thsi Delette method
// x.delete("b");
// console.log(x);

// This forEach Method
let txt ="";
x.forEach((value)=>{
    txt += value +"\t";
});
 console.log(txt);

// This has method
// x.has("a"); //true
// x.has("n"); //false
// console.log(x);
