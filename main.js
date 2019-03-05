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

console.log(`person.name: ${person.name}`);
person.sayHello();
person.sayName();

// simple constructors

function Person(name = 'not defined :( yet'){
    this.name = name;
    this.age = 20;
    this.sayName = function(){
        console.log(`sayName(): My name is ${this.name}`);
    }
}

const p = new Person('Fernando');
p.sayName();

const p2 = new Person();
p2.sayName();

// check if object is instance of another Object

console.log(`p is instance of person? ${p instanceof Person}`);
console.log(`Person is instance of Object: ${Person instanceof Object}`);
console.log(`person is instance of Person: ${person instanceof Person}`);

// loop thru object, own and not own object proreties

let ownProps = [];
for(const prop in p){
    if(p.hasOwnProperty(prop)) ownProps.push(prop);
}
console.log(`p own props ${ownProps}`);

// add default class values using prototype

Person.prototype.citizen = true;
console.log(`is p citizen? ${p.citizen}`);

// not own object properties

Person.prototype.legs = 2;
let prototypeProps = [];
for(const prop in p){
    if(!p.hasOwnProperty(prop)) prototypeProps.push(prop);
}
console.log(`Object own properties: ${prototypeProps}`);

// the constructor Property
function Citizen(name){
    this.name = name;
}

const myCitizen = new Citizen('John');

console.log(myCitizen.constructor == Citizen);