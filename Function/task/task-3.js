// 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'


function uppercase(num,){

    const array1 = num.split(" ");  
    const newarray1 = [ ];

        for(let x = 0; x < array1.length; x++){
        newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
      }

    return newarray1.join(" ")
    
    };

  console.log(uppercase("the quick brown fox"));    
  