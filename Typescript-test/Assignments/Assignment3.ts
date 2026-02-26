let studentnames: String[]=["suresh","mahesh","naresh"];
let studentmarks: number[]=[85,90,92];
let additionalmarks: number[]=[];
let totalmarks: number=0;
let averagemarks: number=0;
for(let i=0;i<studentmarks.length;i++){
    studentmarks[i]+=10;
    additionalmarks.push(studentmarks[i]);
    console.log(studentnames[i]+":"+studentmarks[i]);
    totalmarks+=studentmarks[i];
       
}
console.log("Total Marks: "+totalmarks);
averagemarks=totalmarks/studentmarks.length;
console.log("Average Marks: "+averagemarks);