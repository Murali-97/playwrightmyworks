

let numb: number = 7;
let counts: number = 0;

for(let i:number=1;i<=numb;i++){

    if(numb%i==0){
        counts++;
    }
    
}
if(counts==2){
    console.log(numb+" is a prime number.");
}   else{
    console.log(numb+" is not a prime number.");
}