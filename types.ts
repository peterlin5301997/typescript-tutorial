console.log('Hello World from TS');
console.log('');

// Basic DataTypes Declaration
let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

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
let strArray: string[];   // same as 'let strArray: Array<string>'
let numArray: number[];   // same as 'let numArray: Array<number>'
let boolArray: boolean[]; // same as 'let boolArray: Array<boolean>'

// Array DataTypes Assignment
strArray = ['Hello', 'World'];
numArray = [1,2,3];
boolArray = [true, false, true];

// Print Array DataTypes
console.log('Array DataTypes');
console.log('String Array:', strArray);
console.log('Number Array:', numArray);
console.log('Boolean Array:', boolArray);
console.log('');
