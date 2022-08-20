// global variable
var global = 10
function normal(){
    // local variable
    var local = 20
    console.log(global)
    console.log(local)
    function nested_function(){
        // nested varaible
        var nested = 30
        console.log(global)
        console.log(local)
        console.log(nested)
    }

    nested_function()
    // console.log(nested)
}

normal()

console.log(global)
// console.log(local)
// console.log(nested)