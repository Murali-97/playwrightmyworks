
//which calculates x raised to the power n 


 function powerofvalue(x:number,n:number):number{
  if(n==0) return 1;
     let powervalue=1;
if(n<0)
  x=1/x;
   n=-n;
    for(let i=1;i<=n;i++){
     
        powervalue*=x;

        //2,4,8,16,32,64,128,256,512,1024
        
      //  x=powervalue;
    }
return powervalue;

}
console.log(powerofvalue(2.00000,0));