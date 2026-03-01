
class employee{

    private name!:string;
    private address!:string;

    setname(names:string){
        this.name=names;
    }

    setaddress(address:string){
        this.address=address;
    }

    getname():string{
        return this.name;
    }
    getaddress():string{
        return this.address;
    }


}

const epdata= new employee();

epdata.setname("murali");
epdata.setaddress("vizag");

console.log(`emp name is: ${epdata.getname()}`);
console.log(`emp address is: ${epdata.getaddress()}`);