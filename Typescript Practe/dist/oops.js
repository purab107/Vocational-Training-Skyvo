"use strict";
class Car {
    constructor(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    yeHaiElectric(condition) {
        return condition ? "Electric" : "Not Electric";
    }
    displayMake() {
        console.log(`This car is ${this.model} and it has ${this.doors} number of doors and it is ${this.yeHaiElectric(this.isElectric)}`);
    }
}
const bmw = new Car('BMW', 4, true);
bmw.displayMake();
