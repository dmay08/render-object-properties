class Car {
    constructor(make, model, hp, maxSpeed) {
        this.make = make
        this.model = model
        this.horsepower = {
            hp: hp,
            maxSpeed: maxSpeed
        }
    }
}

export const lameCar = new Car('Ford', 'Taurus', 150, 110)
export const decentCar = new Car('Subaru', 'Outback', 200, 135)
export const coolCar = new Car('Porsche', 'Carrera', 320, 200)

