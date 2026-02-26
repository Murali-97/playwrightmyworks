
//creating a string

let singleQuoteString:string='Hello, World!';
let doubleQuoteString:string="HELLO, WORLD!";
let backtickString:string=`Hello, World!`;

//String length

const str:string="Username: Admin | Password: 12345";
console.log("Length of the string: "+str.length);

//string charAt(index)

console.log("Character at index 10: "+str.charAt(10));

//reverse a string

let reversedString:string="";
for(let i:number=str.length-1;i>=0;i--){
    reversedString+=str[i];
}

//String trim()

let stringWithSpaces:string="   Hello, World!   ";
console.log("Original string: '"+stringWithSpaces+"'");
console.log("Trimmed string: '"+stringWithSpaces.trim()+"'");

//String replace()

let originalString:string="The quick brown fox jumps over the lazy dog.";
let modifiedString:string=originalString.replace("fox","cat");
console.log("Original string: "+originalString);
console.log("Modified string: "+modifiedString);    

console.log("Original string: "+originalString.replace(/ /g,"_"));
console.log("Original string: "+originalString.replace(/ /,"-"));

console.log("Original string: "+originalString.replace(/[a-z]/g,""));
console.log("Original string: "+originalString.replace(/[a-zA-Z]/g,""));
console.log("Original string: "+originalString.replace(/[^a-zA-Z]/g,""));

//string padStart() and padEnd()

let numberString:string="42";
console.log("Original string: '"+numberString+"'");
console.log("Padded string (padStart): '"+numberString.padStart(5,"2")+"'");
console.log("Padded string (padEnd): '"+numberString.padEnd(5,"0")+"'");

//String toUpperCase() and toLowerCase()

let mixedCaseString:string="Hello, World!";
console.log("Original string: "+mixedCaseString);
console.log("Uppercase string: "+mixedCaseString.toUpperCase());
console.log("Lowercase string: "+mixedCaseString.toLowerCase());

//string substring()

let substring:string=originalString.substring(4,9);
console.log("Substring from index 4 to 9: "+substring); 

//String split()

let wordds:string[]=originalString.split(" ");
console.log("Words in the original string: "+wordds);    

//string comparison

let string1:string="Hello";
let string2:string="hello";

if(string1===string2){
    console.log("Strings are equal.");
} else {
    console.log("Strings are not equal.");
}   

//string includes()

let searchString:string="lazy"; 
if(originalString.includes(searchString)){
    console.log("The original string includes '"+searchString+"'.");
} else {
    console.log("The original string does not include '"+searchString+"'.");
}

//string startsWith() and endsWith()

if(originalString.startsWith("The",0)){
    console.log("The original string starts with 'The'.");
} else {
    console.log("The original string does not start with 'The'.");
}   

if(originalString.endsWith("dog.")){
    console.log("The original string ends with 'dog.'.");
} else {
    console.log("The original string does not end with 'dog.'.");
}   

//sring match()

let regex:RegExp=/[a-zA-Z]+/g;
let matches:string[]=originalString.match(regex) || [];
console.log("Words matched using regex: "+matches);