// {
//     const Data = new Map([
//        ["option-1" , 20],
//         ["option-2" , 40],
//         ["option-3" , 60],
//         ["option-4" , 80]
//     ])
   
//     document.getElementById("new").innerHTML = Data.get("option-4");
// }
// {

//     const Data = new Map([
//             ["option-1" , 20],
//             ["option-2" , 40],
//             ["option-3" , 60],
//             ["option-4" , 80]
//         ])
    
//         document.getElementById("new").innerHTML = Data.get("option-1");
// }

{

    //  The set() method can also be used to change existing Map values */

    //  const newmap = new Map();

    //  newmap.set("item-1" , "car");
    //  newmap.set("item-2" , "bus");
    //  newmap.set("item-3" , "truck");
    //  newmap.set("item-4" , 50 )

    //  document.getElementById("set1").innerHTML =newmap.get("item-2");
    //  console.log(newmap);

}

{
    /* The get() method gets the value of a key in a Map */

    //  const newmap = new Map([
    //     ["item-1" , "car"],
    //     ["item-2" , "bus"],
    //     ["item-3" , "truck"]
    // ]);

    // newmap.set("item-1" , "truck");

    // document.getElementById("set2").innerHTML = newmap.get("item-1");
}

//      Map         //

{
    // const numbers = [4, 9, 16, 25];

    // document.getElementById("demo").innerHTML = numbers.map(Math.sqrt);
}


{
    // const numbers = [65,44,56,40];
    // const newArr =  numbers.map(myfunction);

    // document.getElementById("demo").inertHTML = newArr;

    // function myFunction(num) {
    //     return num * 10;
    //   }
}

{

//     const    map1 = new Map();

//     map1.set('x',10);
//     map1.set('y',20);
//     map1.set('z',30);

//     map1.set('x', 970);

//     console.log(map1.get('x'));

//     // size
//     console.log(map1.size);


//     console.log('z');
//     console.log(map1.size);

}


// let num = 321;
// let rimind = 0;

// while(num>0);
// {
//     rimind=num%10;

//     console.log(rimind);

//     num =  Number.parseInt(num/10);
// }


// --------------------- This is Map part ---------------------//


const car = new Map([
    ["Maruti Swift",100],
    ["Toyota Fortuner",200],
    ["Mahindra XUV700",300],
    ["Hyundai Creta",400]
]);

console.log(car);

// This set method

// const car = new Map();
// car.set("Maruti Swift", 500);
// car.set("Toyota Fortuner", 600);

// console.log(car)

// This Get method
// car.get("Maruti Swift");     

// This Delete methos
// const deleteMaruti = car.delete("Maruti Swift");
// const deleteHyundai = car.delete("Hyundai Creta");

// This has method 
// car.has("Maruti Swift"); // true
// car.has("Kiwi"); // false

// This forEach method
let txt = "";

car.forEach((value, key)=>{
			txt += key + " => " + value +"\n";
});