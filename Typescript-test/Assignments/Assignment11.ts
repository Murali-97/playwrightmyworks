
//which calculates x raised to the power n 


 function powerofvalue(x:number,n:number):number{
     let powervalue=1;

    for(let i=1;i<=n;i++){
     
        powervalue*=x;

        //2,4,8,16,32,64,128,256,512,1024
        
      //  x=powervalue;
    }
return powervalue;

}
console.log(powerofvalue(2.00000,10));