//  js SetTimeout -->

// The settimeout() method executes a block after the specified time. The method executes the code only once -->

{
    //setTimeout(function,milliseconds);
    //setimeout(hello(),5000);
    //function- a function containing a block of code
    //millseconds-the time after which the function is executed
}

//The seTimout() method returns an intervalID, which is a positive intenger.

//Disply a Text once after 3 second

{
    //program to display a text using settimeout method
    function greet(){
        console.log('hello world');
    }
    greet();
    let id = setTimeout(greet,2000);
}

// javascript clearTimeout()

