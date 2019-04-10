class House {
    constructor(roof, house, year, squareFeet) {
        this.color = {
            roof: roof,
            house: house
        }
        this.year = year
        this.squareFeet = squareFeet
    }
}

export const smallHouse = new House('Black', 'White', 1990, 1200)
export const mediumHouse = new House('White', 'Pink', 1975, 3575)
export const largeHouse = new House('Grey', 'Red', 2015, 7500)


