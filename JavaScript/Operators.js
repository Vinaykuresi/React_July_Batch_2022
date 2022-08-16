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

// for loop