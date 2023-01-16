function sum(a:number,b=10):string{
    if(a+b>18){
        return "adult";
    }
    return "noob";
}
let result = sum(4);
console.log(result);

//How to create function in TypeScript
/*
function function_name ( arg1 : argument_type) : return_type {

    return (same value type as mentioned in return type)

}
function_name( 24 );
// we can't pass more or less no. of arguments

// we can make some arguments optional by putting '?' mark 
// or we can give some dafault value
*/