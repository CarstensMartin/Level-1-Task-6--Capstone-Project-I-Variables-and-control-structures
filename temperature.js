//TEMPERATURE METRIC CONVERTER

//Input metric to be converted
var inputmetric = prompt("In which metric is the temperature you are converting?\n C - Celsius \n F - Fahrenheit\n K - Kelvin\n Capture in Capital letter");

// make sure that the user enters a valid metric

while (!((inputmetric === "C") || (inputmetric === "F") || (inputmetric === "K"))) {
    var inputmetric = prompt("Please enter valid metric?\n C - Celsius \n F - Fahrenheit\n K - Kelvin\n Capture in Capital letter");
}

//Change to correct input name from abbreviation
switch (inputmetric) {
    case "C":
        var inputmetric = "Celsius";
        break;
    case "K":
        var inputmetric = "Kelvin";
        break;
    case "F":
        var inputmetric = "Fahrenheit";
        break;
}

// Get input value from user
// Convert to a Number value because Prompts are saved in String value and will give incorrect calculation if not converted.
let inputvalue = Number(prompt("How many " + inputmetric + " do you want to convert?"));

var outputmetric = prompt("To which metric would you like to convert the temperature?\n C - Celsius \n F - Fahrenheit\n K - Kelvin\n Capture in Capital letter");

// make sure that the user enters a valid metric

while (!((outputmetric === "C") || (outputmetric === "F") || (outputmetric === "K"))) {
    var outputmetric = prompt("Please enter valid output metric?\n C - Celsius \n F - Fahrenheit\n K - Kelvin\n Capture in Capital letter");
}

//Change to correct output name from abbreviation
switch (outputmetric) {
    case "C":
        var outputmetric = "Celsius";
        break;
    case "K":
        var outputmetric = "Kelvin";
        break;
    case "F":
        var outputmetric = "Fahrenheit";
        break;
}


// Model to convert from 1 to another

//To Celsius
let FtoC = ((inputvalue - 32) * 5 / 9);
let KtoC = (inputvalue - 273.15);

//To Fahrenheit
let CtoF = ((inputvalue * 9 / 5) + 32);
let KtoF = ((inputvalue * 9 / 5) - 459.67);

//To Kelvin
let CtoK = (inputvalue + 273.15);
let FtoK = ((inputvalue + 459.67) * 5 / 9);

// Calculate and display answer on consol
if ((inputmetric == "Celsius" && outputmetric == "Celsius")) {
    console.log(inputvalue + inputmetric + " is " + inputvalue + outputmetric);
}
else if ((inputmetric == "Celsius" && outputmetric == "Fahrenheit")) {
    console.log(inputvalue + inputmetric + " is " + CtoF + outputmetric);
}
else if ((inputmetric == "Celsius" && outputmetric == "Kelvin")) {
    console.log(inputvalue + inputmetric + " is " + CtoK + outputmetric);
}
else if ((inputmetric == "Fahrenheit") && (outputmetric == "Fahrenheit")) {
    console.log(inputvalue + inputmetric + " is " + inputvalue + outputmetric);
}
else if ((inputmetric == "Fahrenheit") && (outputmetric == "Celsius")) {
    console.log(inputvalue + inputmetric + " is " + FtoC + outputmetric);
}
else if ((inputmetric == "Fahrenheit") && (outputmetric == "Kelvin")) {
    console.log(inputvalue + inputmetric + " is " + FtoK + outputmetric);
}
else if ((inputmetric == "Kelvin") && (outputmetric == "Kelvin")) {
    console.log(inputvalue + inputmetric + " is " + inputvalue + outputmetric);
}
else if ((inputmetric == "Kelvin") && (outputmetric == "Celsius")) {
    console.log(inputvalue + inputmetric + " is " + KtoC + outputmetric)
}
else if ((inputmetric == "Kelvin") && (outputmetric == "Fahrenheit")) {
    console.log(inputvalue + inputmetric + " is " + KtoF + outputmetric)
}
