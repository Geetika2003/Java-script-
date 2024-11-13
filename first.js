//print geetika
console.log("geetika");
//Variables
age = 24
console.log(age)
name = " Tony stark"
console.log(name)
console.log(age+1)
console.log(name+" hello")
x =null
console.log(x)
y=undefined
console.log(y)
a=false
console.log(a)
/*var, let, const
these are the three datatypes 
var = oldest form we will never use this 
      after es6(ecma script 6 a new update in js)
      this allows the redeclaration of variables 
let = we can not redeclare the variable but we can update them 
const = varible cannot be redeclared or update

note = if i have not given value of any variable then it wil be un defined by default
       but this is not applicable for const we need to initialize them 
*/
{
    var age= 24
    var age= 26
    var age=20
    console.log(age)
}
{
    let age = 24
    age = 26
    console.log(age)
}
{
    const pi = 3.14
    console.log(pi)
}
console.log(typeof age);
console.log(typeof a);
console.log(typeof y);
console.log(typeof x);
const student = {
    fullname: "Geetika",
    marks: 20,
    cgpa: 8.2
};
student["marks"] = 23;
console.log(student);
console.log(student.cgpa);
/* practice question 1
create a const object called product to store informatiom shown in the given ppicture */
//practice question 1
const product = {
    name: "Pen",
    rating: 4,
    offer: 5,
    price:270
};
console.log(typeof product);
console.log(product);
/* practice question 2 
create a const object called profile to store information about the instagram profile
*/
const profile ={
    username: "Geetika",
    followers: 433,
    following: 300,
    posts: null,
    reels: undefined
};
console.log(typeof profile);
console.log(profile);
