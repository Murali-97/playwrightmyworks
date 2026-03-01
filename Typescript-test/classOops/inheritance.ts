//single level inheritance


class class1{

    empname:string;
    empid:string;

    constructor(empname:string,empid:string){
        this.empname=empname;
        this.empid=empid;

    }
    empdetails(){

        console.log(this.empname);
        console.log(this.empid);

    }
}
//   let obj =new class1("murali","12345");
//     obj.empdetails();

class class2 extends class1{

    empdatas(){
        console.log(this.empname);
        console.log(this.empid);
      //  this.empdetails();

        }
}

const obj=new class2("raghu","3456");
obj.empdatas();