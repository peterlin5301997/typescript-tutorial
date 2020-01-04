var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created: ' + this.name);
    }
    User.prototype.register = function () {
        console.log(this.name + ' is now registered.');
    };
    return User;
}());
// Instantiate New Class
var john = new User('John Doe', 'jdoe@gmail.com', 34);
john.register();
