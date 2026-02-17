
let Empnames:string[]=["Alice Johnson", "Bob Smith", "Carol Davis","David Brown","Eva Green"];
let Empsalary:number[]=[75000,68000,82000,900000,60000];
let experience:number[]=[5.1,3.2,7.1,10.2,2.4 ];
let emprating:number[]=[4.2,3.8,4.5,2.5,3.5];

function hikeamount(salary:number, experience:number, rating:number):number{

    let hike:number=0;
    if(experience >= 5 && rating >= 4.0){
        hike= (salary*15/100)+1500+5000;
    }
else if(rating >= 3.5){
    hike= (salary*10/100)+1200;
}
else{
    hike= (salary*3/100)+300;
}

return hike;
}   

for(let i=0;i<Empnames.length;i++){
    let hike:number=hikeamount(Empsalary[i], experience[i], emprating[i])
    console.log(hike);
    let hikepercengtage:number=(hike/Empsalary[i]*100);
    console.log("Employee Name: "+Empnames[i]+"; hike percentage: "+hikepercengtage);
}

