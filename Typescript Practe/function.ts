function add(x: number, y:number) : number{
    return x+y;
}

let mul = function(x: number, y: number){
    console.log("mul is : " + (x*y));
}

function printName(firstname: string, lastname?: string){
    console.log(firstname+ " " + lastname);
};

let sum = add(2,3);
console.log(sum);
mul(2,3);
printName("Peter", "Parker");
printName("Bruce")