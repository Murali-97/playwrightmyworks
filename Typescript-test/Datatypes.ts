
//Number

let age:number=28;
let percentage:number=85.5;
console.log("Age of a person: "+age);   
console.log("Percentage of a person: "+percentage);   


//Boolean

let isStudent:boolean=true;
let haslicense: boolean=false;
console.log("IS the person a student? :"+isStudent);
console.log("Does the person have a driver's license? :"+haslicense);

//String

let names:String ="john";
let city:String='New York';
let country:String=`USA`;
console.log("Name of a person: "+names);
console.log("City of a person: "+city);
console.log("Country of a person: "+country);

//Undefined

let myVariable:undefined;
console.log("Value of myVariable: "+myVariable);

//Null

let myNullVariable:null=null;
console.log("Value of myNullVariable: "+myNullVariable);

//uniontypes

let myUnionVariable:string|number|boolean|undefined|null;
myUnionVariable="Hello";
console.log("Value of myUnionVariable: "+myUnionVariable);
myUnionVariable=25;
console.log("Value of myUnionVariable: "+myUnionVariable);
myUnionVariable=true;
console.log("Value of myUnionVariable: "+myUnionVariable);
myUnionVariable=undefined;
console.log("Value of myUnionVariable: "+myUnionVariable);
myUnionVariable=null;
console.log("Value of myUnionVariable: "+myUnionVariable);

//symbol

const countrycode=Symbol("countrycode");

interface person{
name:String;
age:number;
[countrycode]:String;

}

let person1:person={
    name:"Alice",
    age:30,
    [countrycode]:"US"
};
console.log("Name of the person: "+person1.name);
console.log("Age of the person: "+person1.age);
console.log("Country code of the person: "+person1[countrycode]);   

//array

let numbers:number[]=[1,2,3,4,5];
let namesArray:String[]=["Alice","Bob","Charlie"];
console.log("Numbers array: "+numbers);
console.log("Names array: "+namesArray);

//uniontype

let myUnionType:(string|number)[]=[66,"Hello",25,"World",30,50,60];
console.log("Union type array: "+myUnionType);

//object

interface empdetails{

    empid:String;   
    empname:String; 
    Havingvisa:boolean;
    address:{
        city:String;
        zipcode:number;
        state:String;
        country:String;

    }

}

let empinfo:empdetails={

empid:'101',
empname:"raghu",
Havingvisa:false,
address:{
city:'hyd',
zipcode:988444,
state:"AP",
country:'India'
}
}

console.log(empinfo.empid);
console.log(empinfo['empname']);
console.log(empinfo.address.zipcode);
console.log(empinfo.address['country']);

//tuple

let mytuple:[number,string,boolean]=[1,"Hello",true];
console.log(mytuple[0]);
console.log(mytuple[1]);
console.log(mytuple[2]);

//function

let add=(a:number,b:number):number=>{
  //  return a+b;
  let sum=a+b;
  return sum;
}

//map

let mymap: Map<String,number>=new Map();
mymap.set("one",1);
mymap.set("two",2); 
mymap.set("three",3);
console.log("Value of one: "+mymap.get("one"));
console.log("Value of two: "+mymap.get("two"));
console.log("size of the map: "+mymap.size);
console.log("Does the map contain key 'one'? "+mymap.has("one"));
mymap.delete("one");
console.log("Does the map contain key 'one' after deletion? "+mymap.has("one"));    
console.log("Size of the map after deletion: "+mymap);

//set

let myset:Set<number>=new Set();
myset.add(1);
myset.add(2);
myset.add(3);   

console.log("Set contains 2? "+myset.has(2));
myset.delete(2);
console.log("Set contains 2 after deletion? "+myset.has(2));
console.log("Size of the set: "+myset.size);    

//any

let myanyVariable:any="Hello";
console.log("Value of myanyVariable: "+myanyVariable);
myanyVariable=25;
myanyVariable=true;
console.log("Value of myanyVariable after reassignment: "+myanyVariable);



