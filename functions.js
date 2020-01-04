console.log('');
// Number Functions
function getSum(num1, num2) {
    return num1 + num2;
}
console.log('Number Functions');
console.log('getSum(1,4):', getSum(1, 4));
console.log('getSum function only takes in numbers and returns a number.');
var mySum = function (num1, num2) {
    // if datatype is a string, parse them into integers
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log('mySum(\'3\',5):', mySum('3', 5));
console.log('mySum function takes in any (string or number) variable and returns a number.');
console.log('');
// String Functions
function getName(firstname, lastname) {
    if (lastname == undefined) {
        return firstname;
    }
    return firstname + lastname;
}
console.log('String Function');
console.log('getName(\'John\', \'Doe\'):', getName('John', 'Doe'));
console.log('getName(\'John\'):', getName('John'));
console.log('getName function returns fullname (firstname + lastname) but also returns just the firstname if there is no lastname');
console.log('');
// Void Function
function myVoid() {
    return;
}
