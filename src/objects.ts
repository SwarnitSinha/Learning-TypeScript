let car : { 
    readonly id:number, 
    car_name:string,
    car_model:string,
    discontinue : (date:Date) => void
} = {
    id : 1,
    car_name : 'fast_horse',
    car_model: 'Farari',
    discontinue : (date: Date)=>{
        console.log(date);

    }
}
car.car_model = 'suzuki';
car.car_name = 'suzuki';
console.log(car.car_name)