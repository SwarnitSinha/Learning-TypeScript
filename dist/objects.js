"use strict";
let car = {
    id: 1,
    car_name: 'fast_horse',
    car_model: 'Farari',
    discontinue: (date) => {
        console.log(date);
    }
};
car.car_model = 'suzuki';
car.car_name = 'suzuki';
// console.log(car.car_name)
//Type Alias
//TypeScript -  Union type
let value;
value = 10;
value = "10";
// console.log( value );
function fun(res) {
    if (res < 10)
        return "Returning a String";
    else
        return res; // returning a number
}
console.log(fun(4));
console.log(fun(41));
//# sourceMappingURL=objects.js.map