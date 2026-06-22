// find BMI of user via weight and height
/*
weight in kg/(height in m)^2>> BMI
*/

// calculate BMI, fat rate

const uIn = require("prompt-sync")();

const findFatRate = (weight,height,gender,age) => {
    const bmi = identify(weight,height)
    if(gender=="male")
        return (1.20*bmi) + (0.23*age) - 10.8 - 5.4
    else
        return (1.20*bmi) + (0.23*age) - 5.4
}

const identify = (weight,height) => {
    const bmi = weight / (height * height);
    return bmi;
}

const classify = (weight, height) => {
    const bmi = identify(weight,height);
    if(bmi < 18.5) return "Underweight";
    else if(bmi >= 18.5 && bmi < 24.9) return "Normal weight";
    else if(bmi >= 25 && bmi < 29.9) return "Overweight";
    else return "Obese";
}

// Main Section
console.log("Welcome to JAIN Health Foundation");
const weight = parseFloat(uIn("Let us know your weight"))
const height = parseFloat(uIn("Let us know your height"))
const status = classify(weight,height)
const age = parseInt(uIn("Let us know your age "))
const gender = uIn("Let us know your gender ")
const fatRate = findFatRate(weight,height,gender,age)
console.log(status+" "+fatRate)