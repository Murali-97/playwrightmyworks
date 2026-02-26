

//Creating Object

interface Address{
    city:String;
    zipcode:number;
    state:String;
    country:String; 
}

interface persone{
    name:String;
    age:number;
    address:Address; 
    fullname():String;   
}

let persons1 :persone={
    name:"Alice",
    age:30,
    address:{       
        city:"New York",
        zipcode:10001,
        state:"NY",
        country:"USA"
    },
    fullname ():String{
        return this.name;
    }
};
    
//Accessing Object properties

console.log("Name:" +persons1.name);
console.log("Age:" +persons1["age"]);
console.log("City:" +persons1.address.city); 

//Adding new properties to the object or modifying existing properties

persons1.email="john@gmail.com";
console.log("Email: "+persons1.email);
persons1.name="Bob";
console.log("Updated Name: "+persons1.name);



//deleting properties from the object

delete persons1.email;
console.log("Email after deletion: "+persons1.email);

//checking if a property exists in the object

console.log("Does email property exist? "+("email" in persons1));
console.log("Does name property exist? "+("name" in persons1));

//getting all keys and values of the object

console.log("Keys: "+Object.keys(persons1));
console.log("Values: "+Object.values(persons1));    

//getting object entries

console.log("Entries: "+Object.entries(persons1));

//cloneing an object

let clonedPerson={...persons1};
console.log("cloned person: "+clonedPerson);

//merging two objects

let additionalInfo={hobby:"Reading", profession:"Engineer"};
let mergedPerson={...persons1,...additionalInfo};
console.log("Merged Person: "+mergedPerson);

//iterating over object properties

for(let key in persons1){
console.log(`${key}: ${persons1[key]}`);

}

//check object types
console.log("Is persons1 an object? "+(typeof persons1==="object"));    
console.log("Is persons1 an instance of persone? "+(persons1 instanceof Object));
console.log(typeof persons1.name);
console.log(typeof persons1);



