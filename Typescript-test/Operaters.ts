
//Arthametic Operators

let a=10;
let b=5;    
console.log("Addition: "+(a+b));
console.log("Subtraction: "+(a-b));
console.log("Multiplication: "+(a*b));
console.log("Division: "+(a/b));
console.log("Modulus: "+(a%b)); 

//Assignment Operators

let c=20;
c+=5;   
console.log("Addition Assignment: "+c);
c-=5;   
console.log("Subtraction Assignment: "+c);      
c*=5;
console.log("Multiplication Assignment: "+c);
c/=5;
console.log("Division Assignment: "+c);
c%=5;
console.log("Modulus Assignment: "+c);      

//Comparison Operators

let x=10;
let y=20;
console.log("Equal to: "+(x==y));       
console.log("Not equal to: "+(x!=y));
console.log("Greater than: "+(x>y));
console.log("Less than: "+(x<y));
console.log("Greater than or equal to: "+(x>=y));
console.log("Less than or equal to: "+(x<=y));

//Logical Operators

let p=true;
let q=false;
console.log("AND: "+(p&&q));
console.log("OR: "+(p||q));
console.log("NOT: "+(!p));

//increment and Decrement Operators

let nums=5;  
console.log("Original number: "+nums);
console.log("Post-increment: "+(nums++));
console.log("After post-increment: "+nums);
console.log("Pre-increment: "+(++nums)); 
console.log("After pre-increment: "+nums);
console.log("Post-decrement: "+(nums--));
console.log("After post-decrement: "+nums);
console.log("Pre-decrement: "+(--nums)); 
console.log("After pre-decrement: "+nums);   

//ternary operator

let ages=18;
let eligibility=ages>=18?"Eligible to vote":"Not eligible to vote";
console.log(eligibility);   
