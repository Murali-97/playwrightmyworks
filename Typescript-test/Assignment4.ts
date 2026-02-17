
 let amounts : number[]=[50000,-2000,3000,-15000,-200,-300,4000,-3000];
 let postiveamounts: number=0;
 let negativeamounts: number=0; 
 let suspiciousamounts: number=0;
 let totalamounts: number=0;
 let positivecount : number=0;
 let negativecount : number=0;
 
    for(let i=0;i<amounts.length;i++){ 


        totalamounts+=amounts[i]; 
        if(amounts[i]>10000 || amounts[i]<-10000){
            console.log("suspicious transaction : " + amounts[i]);
            suspiciousamounts+=amounts[i];
        }

    if(amounts[i]>0){
        positivecount++;
        postiveamounts+=amounts[i];
        
    }
    else{
        negativecount++;
        negativeamounts+=amounts[i];
    }
}

console.log("Total amountss: " + totalamounts);
console.log("Total Positive amoutss: " + postiveamounts);
console.log("Total Negative amoutss: " + negativeamounts);
console.log("Number of Positive Transactions: " + positivecount);
console.log("Number of Negative Transactions: " + negativecount);
console.log("Total Suspicious amoutss: " + suspiciousamounts);