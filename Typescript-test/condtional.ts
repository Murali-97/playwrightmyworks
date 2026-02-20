
//if/else statement

let agee: number = 20;

if (agee >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}   

//switch statement

let day: number = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

//for loop

for (let i = 0; i < 5; i++) {
    console.log("Iteration: " + i);
}       

//while loop

let count: number = 0;  
while (count < 5) {
    console.log("Count: " + count);
    count++;
}   

//do-while loop

let num: number = 0;
do {
    console.log("Number: " + num);
    num++;
} while (num < 5);      

//for-in loop

let person = {
    name: "John",
    age: 30,
    city: "New York"
};  
for (const key in person) {
    const typedKey = key as keyof typeof person;
    console.log(key + ": " + person[typedKey]);
}   

//for-of loop

let numbersArray: number[] = [1, 2, 3, 4, 5];
for (const num of numbersArray) {
    console.log("Number: " + num);
}

export{};