//LOOPS
//1. FOR LOOP:
{
let sum = 0;
for(let i=0; i<=5; i++){
    sum = sum+i;
}
console.log(sum);
}

//2. WHILE LOOP:
{
let sum =0;
let i=0;
while(i<=5){
    sum = sum+i;
    i++;
}
console.log(sum);
}

//3. DO-WHILE LOOP:
{
let sum =0;
let i=0;
do{
    sum = sum+i;
    i++;
}while(i<=5)
    console.log(sum);
}

//4.FOR-OF LOOP:(USED FOR ARRAYS AND STRING'S)
let str ="Geetika Sharma";
for(let i of str){
    console.log(i);
}

//5. FOR-IN LOOP:(USED FOR OBJECT'S)
let student = {
    name:"Geetika",
    age:20,
    roll_no:303311321001,
};
for(let i in student){
    console.log(i,":",student[i]);
}

/* Practice question 1
    Print all even no. from 0 to 100.*/
for(let i=2; i<=100; i=i+2){
    console.log(i);
}

/* Practice question 2:
    create a game where you start with a random game no. ask the user to keep gussing the no. until the user enters the correct no. 
*/
for(let i=0; i<50; i++){
    let game_no = prompt("enter your no.");
    if(game_no==25){
        console.log("you won");
        i=50;
    }
}

//STRING:

//create string:
let str1 ="   geetika sharma   ";
let str2 ='geetika';

// every string in js have a properties and functions which are known as methods.

//print string:
console.log(str);

//print length of string:
console.log(str.length);

//print string index element:
console.log(str[0]);
console.log(str[2]);

//template literals:
let sentence = `this is a template literal(special sring)`
console.log(sentence);
let obj={
    item:"pen",
    price: 10,
};

//string interpolation:
str3 = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(str3);

//escape charecters:
console.log("geetika \n sharma"); //next line
console.log("geetika \t sharma"); //tab space(8spaces)
console.log("geetika \t sharma".length);

// string methods:
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.trim());//remove white spaces from start and end but not in between.
console.log(str1.slice(2,5));
console.log(str1.concat(str2));//joins two strings
console.log(str1.replace('e','$'))// replace e by $

/* Practice Question:
    prompt the user to enter their full name. generate a username for them based on the input start username with @, followed by their full name and ending with the fullname length.
    eg: username = "geetikasharma", username should be "@geetikasharma13"
*/
let str4 = prompt("enter your full name without white spaces");
console.log('@'+ str4.concat(str4.length));