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

// multiple prototype properties

Citizen.prototype = {
    constructor: Citizen, /* always add the constructor to the prototype object */
    country: 'Germany',
    getPassportNumber: function(){
        return this.passport;
    },
    passport: Math.floor((Math.random() * 10000000) + 1),
}

const c1 = new Citizen('Joe');
console.log(c1.getPassportNumber(), c1.name, c1.constructor);

// type of object property

/* since myCitizen was instanciated before the object was modified, 
   is not the same type anymore */
console.log(`Citizen prototype? ${Citizen.prototype.isPrototypeOf(myCitizen)}`);
console.log(`Citizen prototype? ${Citizen.prototype.isPrototypeOf(c1)}`);

// Inheritance

function Vehicle(plate) { this.plate = plate; }
Vehicle.prototype = {
    constructor: Vehicle,
    start: function(){
        console.log('brrrummmm');
    },
    getPlate: function(){
        if(this.plate) return this.plate;
        this.setPlate('use setPlate to set a new plate');
        return this.getPlate();
    },
    setPlate(plate){
        this.plate = plate;
    }
}

const myCar = Object.create(Vehicle.prototype);
myCar.start();
myCar.setPlate('10ERRT');
console.log(myCar.getPlate());

// child's prototype to an instance of parent

function Car() { }
Car.prototype = Object.create(Vehicle.prototype);
const myNewCar = new Car();
myNewCar.setPlate('8080RRP');
console.log(myNewCar.getPlate());

// overwrite parent's methods

function Bike() { }
Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.getPlate = function() { return 'not available D:'; }

const myBike = new Bike();
console.log(myBike.getPlate());

// mixins 
let colorMixin = function(obj, color){
    obj.color = color;
}

colorMixin(myBike, 'red');
console.log(myBike.color);

// closures to protect object attributes
function Account(){
    let accNumber = 100057892234;
    this.getAccountNumber = function(){
        return accNumber;
    }
}

let myAccount = new Account();
console.log("this should not be available: ", myAccount.accNumber);
console.log("this should: ", myAccount.getAccountNumber());

// immediately invoked function
(function(){ console.log('ES5 :)'); })();
(() => (console.log("ES6 executed immediately and no name")))();