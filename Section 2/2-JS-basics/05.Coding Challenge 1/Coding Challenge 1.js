var firtName = "Mark";
var secondName = "John";

var firstPersonMass = 71;
var firstPersonHeight = 1.71;
var firstPersonBMI = firstPersonMass / (firstPersonHeight * firstPersonHeight);

var secondPersonMass = 72;
var secondPersonHeight = 1.72;
var secondPersonBMI = secondPersonMass / (secondPersonHeight * secondPersonHeight);

var firstPersonHasHigherBMIthenSecondOne  =  firstPersonBMI > secondPersonHeight;

console.log("BMI " + firtName + ":" + firstPersonBMI);
console.log("BMI " + secondName + ":" + secondPersonBMI);
console.log("Is Mark's BMI higher than John's ? " + firstPersonHasHigherBMIthenSecondOne);