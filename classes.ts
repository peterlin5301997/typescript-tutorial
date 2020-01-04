class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User Created: ' + this.name);
  }

  register() {
    console.log(this.name + ' is now registered.');
  }
}

// Instantiate New Class
let john = new User('John Doe', 'jdoe@gmail.com', 34);

john.register();
