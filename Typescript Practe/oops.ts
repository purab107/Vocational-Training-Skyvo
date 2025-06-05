class Car {
    model: string;
    doors: number;
    isElectric: boolean;

    constructor(model: string, doors: number, isElectric: boolean) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }

    private yeHaiElectric(condition: boolean): string {
        return condition ? "Electric" : "Not Electric";
    }

    displayMake(): void {
        console.log(`This car is ${this.model} and it has ${this.doors} number of doors and it is ${this.yeHaiElectric(this.isElectric)}`);
    }
}

const bmw = new Car('BMW', 4, true);
bmw.displayMake();
