/*********************
* Arrays
*/

var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990,1969,1948);

console.log(names[2]);
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); // add to the end
john.unshift('Mr.');// add to the front
console.log(john);

john.pop(); // remove from the end
john.shift(); //remove from the front

john.indexOf(1990); // return the position of the element
// return -1 if the element don't exist


var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';

console.log(isDesigner);

var isTeacher = john.indexOf('teacher') === -1 ? 'John is NOT a designer' : 'John IS a teacher';
console.log(isTeacher);