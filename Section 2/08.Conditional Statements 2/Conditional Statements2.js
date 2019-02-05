// conditional statments 2

//the ternary operator and switch statements
var firstName = 'John';
var age = 16;

age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + 'drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(drink);

// switch

var job = 'teacher';
switch(job){
    case 'teacher':
        console.log(firstName + ' teacher kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' driver an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
       break;
    default: console.log(firstName + ' does something else.');
}
    age = 10
switch(true){
        
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teacher.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + 'is a young man.');
        break;
    default:
        console.log(firstName + 'is a man.');
}
    
// Thruthy and Falsy Value and Equality Operators

//falsy values: undifined, null, 0, '', NaN
//truthy values: NoT falsy values


var height;
height = 0;

if (height || height === 0){
    console.log('Variable is defined');
}else{
    console.log('Variable has NOT been defined');   
}
height = 23;
//Equality Operators
if(height == '23') {
    console.log('The == operator does type coercion');
}

    



