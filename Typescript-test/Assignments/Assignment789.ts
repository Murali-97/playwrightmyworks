
//1. Count the total number of words in the sentence.

let sentense :String="Java programming is fun and challenging";
let countss:number=0;

let words:string[]=sentense.trim().split(" ");
countss=words.length;
console.log("Total number of words in the sentence: "+countss);

//2. Print the sentence words in reverse order.

let reversesentense:string="";
for(let i:number=sentense.length-1;i>=0;i--){
    reversesentense+=sentense[i];
    
}

//Convert the first character of each word to uppercase and print original sentence

let capitalizedSentense:string="";
let wordList:string[]=sentense.split(" "); 
for(let word of wordList){
    capitalizedSentense+=word.charAt(0).toUpperCase()+word.slice(1)+" ";
}   
console.log("Original Sentence: "+sentense);
console.log("Capitalized Sentence: "+capitalizedSentense.trim());


// Write a program to search for all occurrences of a “Java” word in the paragraph and print their
// indexes.
// 1. Find total number of occurrences
// 2. Print count and Indexes of the word

//let paragraph:string="Java is a popular programming langapplications. Java is known for its portability and performance.";
let searchwords:string="Java";
let countoccurenses:number=0;
let indexes:number[]=[];

let index:number=sentense.indexOf(searchwords);
while(index!==-1){
    countoccurenses++;
    indexes.push(index);
  index=sentense.indexOf(searchwords,index+searchwords.length);
    console.log("Found '"+searchwords+"' at index: "+index);

}
console.log("Total occurrences: "+countoccurenses);
console.log("Indexes: "+indexes.join(", "));



//Write a program to print * in triangle pattern

let rows:number=5;

for(let i:number=0;i<rows;i++){

  //  for(let j:number=0;j<=i;j++){
console.log(" ".repeat(rows-i-1)+"*".repeat(i+1));

    }
 //   console.log("* ".repeat(i+1));

