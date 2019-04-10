class Computer {
    constructor(brand, size, age, name) {
        this.brand = brand
        this.size = size
        this.owner = {
            age: age,
            name: name
        }
    }
}

export const dannyLaptop = new Computer('Apple', '12 in', 29, 'Danny') 
export const ryanLaptop = new Computer('Microsoft', '15.5 in', 30, 'Ryan')
export const mikeDesktop = new Computer('Linux', '32 in', 28, 'Mike')

