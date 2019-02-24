/*var john ={
    
    name: 'John',
    yearOfBirth:1990,
    job: 'teacher'
    
}*/


/************************* Lesson 1 
    var Person = function(name, yearOfBirth, job){

        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    Person.prototype.calculateAge = function(){

            console.log(2016-this.yearOfBirth);   
        }

    Person.prototype.lastName = 'Smith';

    var john = new Person('John', 1990, 'teacher');

    var jane = new Person('Jane', 1969, 'designer');

    var mark = new Person('Mark', 1948, 'retired');


    john.calculateAge();

    jane.calculateAge();

    mark.calculateAge();


    console.log(john.lastName);
    console.log(john.lastName);
    console.log(mark.lastName);

    console.log(mark.hasOwnProperty('job'));
    // will return true

    console.log(mark.hasOwnProperty('lastName'));
    // will return false

    console.log(mark instanceof Person);
    // will return true

    var x = [2,4,6]

    console.info(x)

*******************************************/



//Object.create

/*********** lesson 2
var personProto = {
    calculateAge: function(){
        console.log(2016-this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto,
{
    name: {value: 'Jane' },
    yearOfBirth: {value 1969 },
    job: { value: 'designer' }   
})

****************/

/************ Primitives vs objects  lesson 3

var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
    
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

var age = 27;
var obj = {
    
    name: 'Jonas',
    city: 'Lisbon'
}

function change(a,b){
    a= 30;
    b.city = 'San Francisco';
    
}
change(age, obj);

console.log(age);
console.log(obj.city);
*/

// A function is an instance of the Object Type;
// A Function behaves like any other Object;
// We can store function in a variable;
// We can pass a function as an argument to another function;
// We can return a function from a function

/*  ***************** lesson 4
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));   
    }
    return arrRes;
}

function calculateAge(el){
    
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHeartRate(el){
    if (el >= 18 && el <=81){         
        return Math.round(206.9 - (0.67 * el));  
    } else {
        return -1;
    }
}

//call back function
var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var hardRate = arrayCalc(ages, maxHeartRate);

var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);

**************************/

/********************** lesston 4 
//return a function


function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        };
    
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + '?');
        };
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        };
    }
}


var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');
designerQuestion('Niko');

interviewQuestion('teacher')('Ivan');

*/


/* Lesson 5 IIFE */

/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
    
}
game();
*/
/*
(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/
/* Lesson 6 Closures */

/*
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log(((retirementAge - age)) + a);
    };
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);
//retirement(66)(1990);

function interviewQuestion(job) {
    
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    };
}

interviewQuestion('teacher')('Ivan');


*/


/* Lesson 7 Bind, call and apply */

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
    
        if (style === 'formal') {
            
            console.log('Good' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a' + this.job + ' and I\'m ' + this.age + ' years old.');
            
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');
// borrow
john.presentation.call(emily, 'friendly', 'afternoon');

// it is not going to work becouse oyr f doesn't expext array but we will use this leter 
//john.presentation.apply(emily, ['friendly', 'afternoon']);


//bind returns function
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));   
    }
    return arrRes;
}

function calculateAge(el){
    
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
