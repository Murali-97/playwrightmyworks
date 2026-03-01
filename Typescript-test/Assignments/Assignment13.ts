

function palindrom(palinvale:string){

   const val= palinvale.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
 //  console.log(val);
   let reverval:String="";
   for(let i=val.length-1;i>=0;i--){
      
       reverval+=val.charAt(i);

   }
   
  // console.log("reverse vale : "+ reverval);

   if(val==reverval){
    console.log(val +" is a palindrome");
}
else{
    console.log(val +" is not a palindrome");
}
}


palindrom("A man, a plan, a canal: Panama");