//simple object
let person = {
    name: 'John',
    sayHello(){
        console.log('hello, world!');
    },
    sayName(){
        console.log(`My name is ${this.name}`);
    }
};

console.log(person.name);
person.sayHello();
person.sayName();

// simple constructors

function Person(name = 'not defined :( yet'){
    this.name = name;
    this.age = 20;
    this.sayName = function(){
        console.log(this.name);
    }
}

const p = new Person('Fernando');
p.sayName();

const p2 = new Person();
p2.sayName();

//Object Oriented Programming: Extend Constructors to Receive Arguments