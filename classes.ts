interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

// User Class
class User implements UserInterface {
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

  payInvoice() {
    console.log(this.name + ' has paid invoice.')
  }
}

// Instantiate New Class
let john = new User('John Doe', 'jdoe@gmail.com', 34);

john.register();

// Child Class Member (Inherits from User Class)
class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice()
  }
}

let mike: User = new Member(1, 'Mike Smith', 'mike@gmail.com', 33);

mike.payInvoice();
