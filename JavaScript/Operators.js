// operators
// Arithematic Operator
undefined
num = 10
10
num2 = 20
20
sum = num + num1
VM890:1 Uncaught ReferenceError: num1 is not defined
    at <anonymous>:1:13
(anonymous) @ VM890:1
sum = num + num2
30
num = sum - num2
10
mul = num * sum
300
div = mul / num2
15
mod = ++div % 4
0
++mod
1
mod++
1
console.log(num--)
undefined
num
9
mod
2
console.log(num-- + ++mod) -> 9-- + ++2 -> 9 + 3 -> 11
undefined
num-- + ++mod -> 8-- + ++3 -> 8 + 4 -> 12
12
num
7
num++ * --num2 
133

"Vinay "+"Kumar"
'Vinay Kumar'
"Vinay "-"Kumar"
NaN

Assignment : 
5 + 4 * 9 % (3 + 1) / 6 - 1

Assignment Operator :
var num = 0
undefined
num += 10
10
# num = num + 10
VM478:1 Uncaught SyntaxError: Invalid or unexpected token
num -= -12
22
# num = num -(-12)
VM602:1 Uncaught SyntaxError: Invalid or unexpected token
# num = num + 12
VM662:1 Uncaught SyntaxError: Invalid or unexpected token
num *= num/-2
-242
# num = (num * num)/-2 -> -(num * num)/2
VM916:1 Uncaught SyntaxError: Invalid or unexpected token
num %= 11
-0
num *=(-num)*(+2)%2
-0
# num = num * -(num) * 2 %2 
VM1329:1 Uncaught SyntaxError: Invalid or unexpected token
# num = -0 * 0 * 2 % 2
VM1441:1 Uncaught SyntaxError: Invalid or unexpected token

Relational Operator : 
var num = 20
undefined
var num1 = 30
undefined
var num2 = -6
undefined
num = num1 > -(num2-25)
false
num = num <= true 
true
num == num1 == num2 * true + 30
false
1 > 1
false
console.log(true > false != true != (-30) * true > false + 234)

// Strict Equality and Strict InEquality : 
console.log(true == 1)
console.log(true === 1)

console.log("1" == 1)
console.log("1" === 1)
console.log(true === (true !== false))

// Logical Operators : 
!(10 > 20)
true
10 >= 5 && 20 > 20
false
10 >= 5 || 20 > 20
true

// Type Of : 
console.log(typeof("Vinay"))
console.log(typeof(10.5))
console.log(typeof(10 > 20))
console.log(typeof(undefined))
console.log(typeof(null))
console.log(typeof({name : "Vinay"}))
console.log(typeof([1, 2]))
string
number
boolean
undefined
object
object
object

// Type of Operator : 
console.log(typeof("Vinay"))
console.log(typeof(10.5))
console.log(typeof(10 > 20))
console.log(typeof(undefined))
console.log(typeof(null))
console.log(typeof({name : "Vinay"}))
console.log(typeof([1, 2]))

// Conditional Operator : 
console.log(10 > 20 ? true : false)

// if else
if(10 > 20){
    console.log(true)
}else{
    console.log(false)
}

// Switch temperature
var performanceRating = 5;

switch(performanceRating){
    case 5:
        console.log("Excellent")
        break;
    case 4:
        console.log("Good")
        break;
    case 3:
        console.log("Average")
        break;
    case 2:
        console.log("Intermediate")
        break;
    default:
        console.log("Poor")
        break;
}

// if else ladder
if(temperature <= 20) {
    console.log("Cool")
}else if(temperature > 20 && temperature <=30){
    console.log("Normal")
}else if(temperature > 30 && temperature <= 40){
    console.log("hot")
}else{
    console.log("Very Severe")
}

// for loop limit model : 
const prompt = require('prompt-sync')();

var totalBags = 40;

for(var remainingbags = totalBags; remainingbags >0;){
    
    const bags = Number(prompt('No. of Bags collected ? : '));
    if(bags <= remainingbags){
        console.log("No.of bags collected : ", bags);
        remainingbags -= bags
        console.log("No.of remamining bags : ", remainingbags)
    }else{
        console.log("The remaining left bags are only : ", remainingbags)
    }   
}

// star pattrens : 
rows = 5
for(let i = 0; i < rows; i++){
    var star = ""
    for(let j = 0; j<=i; j++){
        star += "*"
    }
    console.log(star)
}

*
**
***
****

// three loops : 
var star = ""
for(var row = 1; row <= rows; row++){
    for(var col = 0; col < rows-row ; col++){
        star += " "
    }
    for(var col = 0; col < row; col++){
        star += "*"
    }
    star += "\n"
}

// two loops
var stars = "*****"
var star = ""
for(var row = 1; row <= rows; row++){
    for(var col = 0; col < rows-row ; col++){
        star += " "
    }
    star += stars.slice(0,row)
    star += "\n"
}

console.log(star)


//      *
//     **
//    ***
//   ****
//  *****

Assignments : 
// *****
// ****
// ***
// **
// *

//    *
//   ***
//  *****
// *******

// for loop using prompt
const prompt = require('prompt-sync')();

const rows = Number(prompt('Enter the number of Rows : '));

var star = ""
for(var row = 1; row <= rows; row++){
    for(var col = 0; col < rows-row ; col++){
        star += " "
    }
    for(var col = 0; col < row; col++){
        star += "*"
    }
    star += "\n"
}

console.log(star)

// While Loop : 
var totalBags = 50;

while(totalBags > 0){
    const pickedUpBags = Number(prompt('Enter the no.of bags Picked Up : '));
    if(pickedUpBags <= totalBags){
        totalBags -= pickedUpBags
        console.log("The remaining bags left are : ", totalBags)
    }else{
        console.log("The picked up bags ", pickedUpBags, " shouldn't be greater than toal no of bags : ", totalBags)
    }
}

// Infinte Loops : 
var num = 10
var count = 0

while(count < num){
  console.log("The count value : ", count)
  count--
}

for(; count < num; count--){
  console.log("The count value : ", count)
}

// pyramid : 
const rows = Number(prompt("Enter the No of Rows : "));

var row = 1
var col = 1

var star = ""
while(row <= rows){
    while(col <= rows - row){
        star += " "
        col++
    }
    col = 1
    while(col <= (2*row-1)){
        star += "*"
        col++
    }
    star += "\n"
    row++
    col = 1
}

console.log(star)


//   *
//  ***

// do while : 
var num = 10
var count = 0

while (count > num) {
    count++
    console.log("The count value : ", count)
}

do {
    console.log("The count value : ", count++)
    console.log("The count value : ", count)
} while (count > num)


