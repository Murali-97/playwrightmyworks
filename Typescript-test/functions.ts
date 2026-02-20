
// function without parameters and without return type

function welcome(){
console.log("Welcome to TypeScript");
}

welcome();

//function with parameters and without return type

function sum(a:number, b:number){

    console.log("The sum of "+a+" and "+b+" is: "+(a+b));
}

sum(50,10);
//function without parameters and with return type

function getcurrentyear():number{
    return new Date().getFullYear();

}   
console.log("Current Year: "+getcurrentyear());

//function with parameters and with return type

function addition(x:number, y:number):number{
    return x+y;
}

console.log("The addition of 5 and 10 is: "+addition(5,10));


//function with optional parameters

function employeedetails(name:string, age:number, department?:string){

    console.log("Employee Name: "+name);
    console.log("Employee Age: "+age);
    if(department){
        console.log("Employee Department: "+department);
    }   
}

employeedetails("John Doe", 30);
employeedetails("Jane Smith", 25, "Marketing");

//function with default parameters

function calculatearea(radius:number, pi:number=3.14):number{
    return pi*radius*radius;
}           

console.log("Area of a circle with radius 5: "+calculatearea(5));
console.log("Area of a circle with radius 5 and pi value 3.14159: "+calculatearea(5,3.14159));      


//function with rest parameters

function findmaximum(...numbers:number[]):number{
    return Math.max(...numbers);
}   

console.log("Maximum number among 5, 10, and 15: "+findmaximum(5,10,15));
console.log("Maximum number among 3, 7, 2, and 9: "+findmaximum(3,7,2,9));  


//arrow function

let greet = (name:string):string => {
    return "Hello, "+name+"!";
}   

console.log(greet("Alice"));


//anonymous function

setTimeout(function(){
    console.log("This message is displayed after 2 seconds.");
}   ,2000); 

const multiply = function(x:number, y:number):number{
    return x*y;
}

