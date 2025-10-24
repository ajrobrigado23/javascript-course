class Course {

    // Task 1 - Create a class with 3 properties on it.
    constructor(title, length, price) {
        this.title = title;
        this.length = length;
        this._price = price;
    }

    // Task 4 - getters and setters for the properties
    get price() {
        return `$ ${this._price}`;
    }

    set price(newPrice) {
        return newPrice > 0 ? newPrice : 0;
    }

    // Task 2 - Create a method on the class that calculates the amount of money spent per minute.
    calculateAmountLength() {
        return (this.length / this.price).toFixed(2) + ' m per $';
    }

    summary() {
        return `
            Course title: ${this.title}
            Length: ${this.length}
            Pice: ${this.price}
            `;
    }
}

// Task 3 - Create a subclass of the Course class.
class PracticalCourse extends Course{

    constructor(title, length, price, exercises) {
        super(title, length, price);
        this.numOfExercises = exercises;
    }
}

class TheoreticalCourse extends Course{
    constructor(title, length, price) {
        super(title, length, price);
    }

    publish() {
        console.log('Published');
    }
}

const javascript = new Course("JavaScript", 2, 100);
const java = new Course("Java", 3, 200);

console.log(javascript.calculateAmountLength());
console.log(javascript.summary());

const practice  = new PracticalCourse("Practice", 2, 100, 10);
const theory = new TheoreticalCourse("Theory", 2, 100);

theory.publish();
console.log(javascript.price = 500);