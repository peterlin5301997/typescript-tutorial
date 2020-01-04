console.log('Hello World from TS');
console.log('');
// Basic DataTypes Declaration
var myString;
var myNum;
var myBool;
var myVar;
// Basic DataTypes Assignment
myString = 'Hello World';
myNum = 22;
myBool = true;
myVar = 'I can be anything';
// Print Basic DataTypes
console.log('Basic DataTypes');
console.log('String:', myString);
console.log('Number:', myNum);
console.log('Boolean:', myBool);
console.log('Any:', myVar);
console.log('');
// Array DataTypes Declaration
var strArray; // same as 'let strArray: Array<string>'
var numArray; // same as 'let numArray: Array<number>'
var boolArray; // same as 'let boolArray: Array<boolean>'
// Array DataTypes Assignment
strArray = ['Hello', 'World'];
numArray = [1, 2, 3];
boolArray = [true, false, true];
// Print Array DataTypes
console.log('Array DataTypes');
console.log('String Array:', strArray);
console.log('Number Array:', numArray);
console.log('Boolean Array:', boolArray);
console.log('');
// Special DataTypes Declaration
var myTuple;
var myVoid;
var myNull;
var myUndefined;
// Special DataTypes Assignment
myTuple = ['Hello', 4];
myVoid = null; // or 'undefined'
myNull = null; // or 'undefined'
myUndefined = null; // or 'undefined'
console.log('Special DataTypes');
console.log(myTuple);
console.log(myVoid);
console.log(myNull);
console.log(myUndefined);
