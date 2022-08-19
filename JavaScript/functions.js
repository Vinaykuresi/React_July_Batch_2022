// // function keyword to define the function
// // function signature(definition)
// function add(num1, num2){ // formal arguments or Parameters
//     // execution logic
//     sum = num1 + num2

//     // returning the result
//     return sum
// }

// // function calling
// // catching the returned value in result
// result = add(10, 20) // actual arguments or Parameters

// // output printing
// console.log("The sum is : ", result)

// nested function

function greeting(greetings){

    function userName(name){
        let greet = greetings + name
        console.log(greet)
    }

    userName("Vinay")

}

// userName("Vinay")

greeting("Happy new year ")

