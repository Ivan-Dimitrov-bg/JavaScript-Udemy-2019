var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assigments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 //26
console.log(x, y);

//More operators
x = x * 2;
y *= 2;
console.log(x , y);

x = x + 1;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
