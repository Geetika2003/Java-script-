//create arrays:
let heroes = ["ironman","hulk","thor","captin america"];
let marks = [40,50,60,70,90,59,69,70];
let info = ["rahul", 86, "delhi"];

//print array:
console.log(info);
console.log(marks);
console.log(heroes);

//length of array:
console.log(heroes.length);
console.log(info.length);
console.log(marks.length);

//array indices:
console.log(heroes[2]);

//print array elements using loop:

//using for loop
for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}

//using for-of
for(let hero of heroes){
    console.log(hero);
}

//using for-in
for(let hero in heroes){
    console.log(hero);
}

/* Practice question 1:
    For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
    find average marks of the entire class.
*/
let arr = [85, 97, 44, 37, 76, 60];
let sum=0;
for(let i=0; i<arr.length; i++){
    sum=sum+arr[i];
}
let avg_marks = sum/arr.length;
console.log(avg_marks);

/*Practice Question 2:
    For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
    all the items have an offer of 10% off on gthem. change the array to store final price after applying offer.
*/
let arr1 = [250, 645, 300, 900, 50];
for(let i=0; i<arr1.length; i++){
    arr1[i]=arr1[i]-(arr1[i]/10);
}
console.log(arr1);

//ARRAY METHODS:

//push(): add to end
arr1.push(340);
console.log(arr1);

//pop(): Delete element from end
arr1.pop();
console.log(arr1);

//tostring(): convert array to string
console.log(arr1.toString());

//concat(): joins multiple array
let arr2 = heroes.concat(arr1);
console.log(arr2);

//unshift(): add elementys at start
console.log(heroes.unshift("antman"));

//shift(): delete element from start and end
console.log(heroes.shift());

//Slice(): returns a piece of array
console.log(heroes.slice(1,3));

//splice(): change original array (add, remove, replace)
console.log(heroes.splice(1,3,'geetika','yash','sweta'));
console.log(heroes);


/* practice question 1:
    Create an array to store companies -> "bloomberg", "microsoft", "uber", "google", "ibm", "netflix"
    A. Remove the first company from the array
    B. remove uber and add ola in its place
    C. add amazon at the end
*/
{
let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
companies.splice(0,1,);
console.log(companies);
}

{
let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
companies.splice(2,1,"ola");
console.log(companies);
}

{
let companies = ["bloomberg", "microsoft", "uber", "google", "ibm", "netflix"];
companies.splice(6,0,"amazon");
console.log(companies);
}