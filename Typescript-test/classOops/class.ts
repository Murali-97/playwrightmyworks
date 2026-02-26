

class employee{

    name :String;
    age : number;

    constructor(){
        this.name="murali";
        this.age=26;
    }
    employemethod(): void{
console.log(this.name);
console.log(this.age);

    }
}

class employeedetails{

name:string;
age:number;

constructor(){

    this.name="krishna";
    this.age=25;
}

employeedata():void{

    console.log(this.name);
    console.log(this.age);
}


}

const obj1= new employee();
const obj2= new employeedetails();

export{obj1,obj2}