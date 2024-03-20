let srting =prompt("please enter a string");
const reg=/[aeiou]/gi;   //reguler expretion
let chars = srting.match(reg);
document.write(chars.join(','));
document.write(chars.length);