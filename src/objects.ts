type Car = {
    readonly id:number, 
    car_name:string,
    car_model:string,
    discontinue : (date:Date) => void
}

let car : Car = {
    id : 1,
    car_name : 'fast_horse',
    car_model: 'Farari',
    discontinue : (date: Date)=>{
        console.log(date);

    }
}
car.car_model = 'suzuki';
car.car_name = 'suzuki';
// console.log(car.car_name)

//Type Alias



//TypeScript -  Union type

let value : number | string;
value = 10
value = "10"
// console.log( value );

function fun(res : number): string | number{
    if(res<10)
        return "Returning a String"
    else
        return res;  // returning a number
}

console.log(fun(4));
console.log(fun(41));
