

//Any data type to string data type

let stdcode:number=144;
let phone=345456;
let code=String(stdcode);
console.log(stdcode+phone);
console.log(code+phone);


//Sting to integer

let balance ="Account balance is 9999";
balance=balance.replace(/[a-zA-Z]/g,"").trim();
console.log(balance);
let accountbalance=parseInt(balance);
console.log(accountbalance);

//String to Double

let percentage="percentage is 98.99";
percentage=percentage.replace(/[a-zA-Z]/g,"").trim();
console.log(percentage);
let percs=parseFloat(percentage);

console.log(percs);

//Generating unique id by converting date to String

let uniqueid=new Date().toLocaleString('en-GB');
console.log(uniqueid);


