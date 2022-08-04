// we need to convert celcius into farenheit and vice-versa.

var celcius = 30
var farenheit = 98;

var temperature = "farenheit";

if(temperature == "celcius"){
    farenheit = (celcius * 1.8) + 32
    console.log("Temperature in Farenheit : ", farenheit)
}else if(temperature == "farenheit"){
    celcius = (farenheit - 32) / 1.8
    console.log("Temperature in Celcius : ", celcius)
}

// Assignment : 1
// Write a program to add, subtract, multiply and division   two numbers