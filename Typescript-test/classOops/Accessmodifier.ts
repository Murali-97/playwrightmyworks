
class emploee{

public  name:String;
protected age:number;
private   ssn:string

    constructor(nname:string,age:number, sssn:string){

        this.name=nname;
        this.age=age;
        this.ssn=sssn;

    }

    empdetails():void{
console.log(this.name);  //Allowed same class
console.log(this.age);   //Allowed same class
console.log(this.ssn);   //Allowed same class

    }
}


class person extends emploee{

    gender:String;

    constructor(name:string,age:number,sasn:string,gender:String){
        super(name,age,sasn);
        this.gender=gender;
    }

    persondetails():void{
     
     console.log(this.name);  //Allowed child class
     console.log(this.age);   //Allowed child class
   //  console.log(this.ssn);   //not allowed child class  
    }
}


   const  per=new person("murali",25,"acesss","male");
   
     console.log(per.name);  //Allowed outside class
//   console.log(per.age);   //not Allowed outside class
//   console.log(per.ssn);   //not Allowed outside class 