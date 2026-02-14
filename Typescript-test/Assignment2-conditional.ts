


function custmerdetails(customername : String , creditscore : number , income : number , isEmployed : boolean , debittoincomeratio : number){

// customername= customername;
// creditscore= creditscore;
// income= income; 
// isEmployed= isEmployed;
// debittoincomeratio= debittoincomeratio;

if(creditscore >750){
        console.log("customer loan is approved");
    }
    else if(creditscore > 650){

        if(income >=50000){
            console.log("customer loan is considered for approval");
            if(isEmployed==true){
                console.log("debttoincomeratio is " + debittoincomeratio);
                if(debittoincomeratio < 40){
                    console.log("customer loan is approved");
                }
                else{
                    console.log("customer loan is not approved due to high debt-to-income ratio");
                }
        }

            console.log("additional checks are performed for loan approval");
    }
}
    else if(creditscore < 650){
        console.log("customer loan is not approved");
      
     }
     
}

  
custmerdetails("John Doe", 720, 60000, true, 35.0); 