var rows = 10
var star = ""

for(var row=rows; row >= 1; row--){
    for(var col=1; col <= row; col++){
        star += "*"
    }
    star += "\n"
}

console.log(star)