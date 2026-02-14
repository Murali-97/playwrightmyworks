
 let amount: number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];
 let postiveamount: number=0;
 let negativeamount: number=0; 
 let suspiciousamount: number=0;
let totalamount: number=0;
    let positivecount : number=0;
    let negativecount : number=0;
 
    for(let i=0;i<amount.length;i++){ 


        totalamount+=amount[i]; 
        if(amount[i]>10000 || amount[i]<-10000){
            console.log("suspicious transaction : " + amount[i]);
            suspiciousamount+=amount[i];
        }

    if(amount[i]>0){
        positivecount++;
        postiveamount+=amount[i];
        
    }
    else{
        negativecount++;
        negativeamount+=amount[i];
    }
}

console.log("Total Amount: " + totalamount);
console.log("Total Positive Amount: " + postiveamount);
console.log("Total Negative Amount: " + negativeamount);
console.log("Number of Positive Transactions: " + positivecount);
console.log("Number of Negative Transactions: " + negativecount);
console.log("Total Suspicious Amount: " + suspiciousamount);