//TypeScript is a Superset of JavaScript
let x : number = 31;

// Array

// let Array_name : Array_Type = value;
// let arr: number[] = [2, 23, 24]; 

let arr: number[] = [];//Array of Type -> NUMBERS
arr[0] = 2;

let arr2 = [];  // Array of TYPE -> ANY
arr2[0] = 2;
arr2[1] = "any string";  // this is possible


//TUPLE - when you know all the data types and no. of element 
//        in an array.

const tup:[number,string] = [1, "swarnit"];

const tup2 : [number, string, string, number] = [1,'Swarnit','Sinha',23];
// console.log(tup2);

let values:any = []
console.log(values.length);
const data = {
    names:"sadf",
    ...(values.length && {values:values})
}
console.log({data});
//but if you have more than two elements 
// then we can use it as key-value pair

// const tup3:[number,Array<any>] = [1,['Swarnit','Sinha',23]];
// console.log("tup3 ",tup3);