//OPERATORS:
/*1. ARITHEMATIC OPERATORS
+ ADDITION
- SUBTRACTION
* MULTIPLICATION
/ DIVISION
% MODULUS(REMINDER)
** EXPONENTIAL(A^B)
*/

/* UNARY OPERATOR
++ INCREMENT 
-- DECREMENT
*/

/* ASSIGNMENT OPERATORS
= (A=KEY)
+= (A=A+KEY)
-= (A=A-KEY)
*= (A=A*KEY)
%= (A=A%KEY)
**= (A=A**KEY)
*/

/*COMPARISION OPERATOR
== (EQUAL TO)
=== (EQUAL TO & TYPE)
!= (NOT EQUAL TO)
!== (NOT EQUAL TO TYPE)
> (GREATER THAN)
>= (GREATER THAN OR EQUAL TO)
< (LESS THAN)
<= (LESS THAN OR EQUAL TO)
*/

/* LOGICAL OPERATOR
(RETURNS TRUE OR FALSE)
&& (LOGICAL AND)
|| (LOGICAL OR)
! (LOGICAL NOT)
*/

/* TERNARY OPERATOR:
Condition ? true o/p : false o/p ;
*/
let Age = 21;
console.log(Age>=18?"Adult":"Not adult");


// CONDITIONAL STATEMENTS:

//SWITCH CASE:
const expr ="custard apple";
switch (expr){
    case "orange":
        console.log("orange");
        break;
    case "mango":
        console.log("mango");
        break;
    case "Papaya":
        console.log("Papaya");
        break;
    default:
        console.log("sorry");
        break;
}

//IF STATEMENT
let geetika= 20
if (geetika>=18){
    console.log("geetika can vote");
}

//IF-ELSE STATEMENT:
let name = prompt("enter a no. :");
if (name%5===0){
    console.log("yes");
}
else{
    console.log("no");
}

//IF-ELSE IF-ELSE STATEMENT:
let grade = prompt("enter your percentage");
if(grade >=80){
    console.log("A");
}
else if(grade>=70 && grade<80){
    console.log("B");
}
else if(grade>=60 && grade<70){
    console.log("C");
}
else if(grade>=50 && grade<60){
    console.log("D");
}
else {
    console.log("E");
}

/* practice question 1:
    get user to input a no. using prompt("enter a no."). check if the no. is multiple of 5 or not
*/
let number = prompt("enter a no.");
if(number%5==0){
    console.log("multiple of 5");
}
else{
    console.log("not a multiple of 5");
}

/* practice question 2:
    write a code which give grades to students according to their scores
    80-100 (A)
    70-79(B)
    60-69(C)
    50-59(D)
    0-49(E)
*/
let MARKS = prompt("enter your percentage");
if(MARKS >=80){
    console.log("A");
}
else if(MARKS>=70 && MARKS<80){
    console.log("B");
}
else if(MARKS>=60 && MARKS<70){
    console.log("C");
}
else if(MARKS=50 && MARKS<60){
    console.log("D");
}
else {
    console.log("E");
}