// ***Boolean Logic***

var firstName = 'John';
var age = 16;

if(age < 13){
    console.log(firstName + 'is a boy.');
}else if(age >= 13  && age < 20){//between 13 and 20 === age >= 13 and age < 20
    console.log(firstName + ' is a teenager.');
}else if(age >= 20  && age < 30){
    cosole.log(firstName + ' is a young man.');
}else{
    console.log(firstName + 'is a man.');
}