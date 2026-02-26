

let numberss: number[]=[1,2,3,4,5];
let fruits: string[]=["Apple","Banana","Orange"];

//Accessing array elements
console.log("First number: "+numberss[0]);
console.log("Second fruit: "+fruits[1]);

//Adding elements to an array

numberss.push(6);
fruits.push("Grapes");
console.log("Updated numbers array: "+numberss);
console.log("Updated fruits array: "+fruits);

//removing elements from an array

numberss.pop();
console.log("After removing last number: "+numberss);

//Add element at the beginning of the array

numberss.unshift(0);
console.log("After adding 0 at the beginning: "+numberss);

//Remove element from the beginning of the array

numberss.shift();
console.log("After removing first number: "+numberss);

//finding the index of an element

let indexOfBanana:number=fruits.indexOf("Banana");
console.log("Index of Banana: "+indexOfBanana);

//Removing an element by index
numberss.splice(2,1);
console.log("After removing element at index 2: "+numberss);

//copying an array
let slicenumberss:number[]=numberss.slice(1,4);
console.log("Sliced numbers array (index 1 to 3): "+slicenumberss);

//concatenating arrays

let moreNumbers:number[]=[7,8,9];
let combinedNumbers:number[]=numberss.concat(moreNumbers);
console.log("Combined numbers array: "+combinedNumbers);

//iteraating over an array
console.log("Iterating over fruits array:");
for(let fruit of fruits){
    console.log(fruit);
}   

numberss.forEach((num,index)=>{
    console.log("Index: "+index+", Number: "+num);
});

numberss.forEach((numberss)=>{
    console.log("Number: "+numberss);           
})

//mapping an array

let squrednumbers:number[]=numberss.map(num=>num*num);
console.log("Squared numbers array: "+squrednumbers);   

let squrednumberss:number[]=numberss.map(num=>num*num-num);
console.log("Squared numbers array: "+squrednumberss); 