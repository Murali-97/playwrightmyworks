 

 let n:number=5;

 for(let i=1;i<=n;i++){
let line:string="";
    for(let j=i;j<n;j++){
line+=" ";
 
    }
     for(let k=1;k<=i;k++){

    line+=k+" ";
  
  }
 
  console.log(line);
 }

 for (let i = n - 1; i >= 1; i--) {
    let line: string = "";

    // Spaces
    for (let j = i; j < n; j++) {
        line += " ";
    }

    // Numbers
    for (let k = 1; k <= i; k++) {
        line += k + " ";
    }

    console.log(line);
}
