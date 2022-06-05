let cars = [
    { model: "Jeep", price: 50000, carMileage: 40000 },
    { model: "Audi", price: 46000, carMileage: 80000 },
    { model: "BMW", price: 32000, carMileage: 340000 },
    { model: "Kia", price: 67500, carMileage: 70000 },
    { model: "Geely", price: 22000, carMileage: 49000 },
];


function getAveragePriceCarWithCarMileageLessFiftyHundreds(cars) {
    let carsWithCarMileageLessFiftyHundreds = cars.filter(({ carMileage }) => carMileage < 50000);
    return carsWithCarMileageLessFiftyHundreds.reduce((arr, { price }) => arr + price, 0) / carsWithCarMileageLessFiftyHundreds.length;
}

let averagePriceCarWithCarMileageLessFiftyHundreds = getAveragePriceCarWithCarMileageLessFiftyHundreds(cars);
console.log(averagePriceCarWithCarMileageLessFiftyHundreds);


function getModelCarsWithCarMileageLessFiftyHundreds(cars) {
    return cars
        .filter(({ carMileage }) => carMileage < 50000)
        .map(({ model }) => model);
}

let ModelCarsWithCarMileageLessFiftyHundreds = getModelCarsWithCarMileageLessFiftyHundreds(cars);
console.log(ModelCarsWithCarMileageLessFiftyHundreds);