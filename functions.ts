console.log('');
console.log('TypeScript Functions');

function getSum(num1:number, num2:number):number {
  return num1 + num2;
}

console.log('getSum(1,4):', getSum(1,4));
console.log('getSum function only takes in numbers and returns a number.');

let mySum = function(num1:any, num2:any): number {

  // if datatype is a string, parse them into integers
  if (typeof num1 == 'string') {
    num1 = parseInt(num1);
  }
  if (typeof num2 == 'string') {
    num2 = parseInt(num2);
  }

  return num1 + num2;
}

console.log('mySum(\'3\',5):', mySum('3',5));
console.log('mySum function takes in any (string or number) variable and returns a number.')
