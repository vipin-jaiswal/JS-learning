let score ="33"

// const {score}=req.body
// console.log(typeof score);
// console.log(typeof (score));

// let valueInNumber=Number(score)
// console.log(typeof valueInNumber);

/*
"33"=>33
"33abc"=>NaN
true=>1,false=>0
*/

let isloggedIn=1
let booleanIsLoggedIn=Boolean(isloggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

// 1=>true 0=>false 
// ""=>false
// "vipin"=>true


let someNumber =33
let stringNumber=String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//    ***************************** Operations ***************************** 

let value=3
let negvalue= -value
// console.log(negvalue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1="hello"
let str2=" vipin"
let str3=str1+str2
console.log(str3)


// console.log("1"+2)
// console.log(1+"2")
// console.log("1"+2+2)
// console.log(1+2+"2")

console.log(+true)
console.log(+"")

let num1,num2,num3
num1=num2=num3=2+2

let counter=100
counter++;
console.log(counter)

// prefix and postfix
let x = 3;
const y = x++;// in this line xis assing to the y and than increse 

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;//in this line a is increse and than assing to the b

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

