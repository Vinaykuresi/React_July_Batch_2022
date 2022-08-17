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