var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
        console.log('User Created: ' + this.name);
    }
    return User;
}());
// Instantiate New Class
var john = new User('John Doe', 'jdoe@gmail.com', 34);
