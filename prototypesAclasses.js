/*
Every js object has a prototype chain.  
Classes provide a clean OOP syntax for creating objects with shared methods.
Key concepts:
constructor
inheritance with extends
super
getters / setters
static methods.
*/

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    speak() {
        return `${this.name} says ${this.sound}!`;
    }
    static kingdom() {
        return "Animalia";
    }    
}

class Dog extends Animal {
    constructor(name) {
        super(name, "Woof");
        this.tricks = [];
    }
    learn(trick) {
        this.tricks.push(trick);
    }
    get trickCount() {
        return this.tricks.length;
    }    
}

const rex = new Dog("Rex");
console.log(rex.speak());  // "Rex says Woof!"
rex.learn("sit");
rex.learn("stay");
console.log(rex.trickCount); //2
console.log(rex instanceof Animal); //true
console.log(Animal.kingdom());   // "AnimaliaS"