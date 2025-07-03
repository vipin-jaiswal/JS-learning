// primitive
// 7 type  :  String, Number, Boolea, undefind, symbol, Bigint

const score =100
const scorevalue=100.3

const isloggedI =false
const outsideTemp =null
let userEmail;
const id =Symbol('123')
const anotherId =Symbol('123')

// console.log(id===anotherId)

const bigNumberb=32469785234n



// Non primitive reference type  : array, Objects, Function
   
  const heros =["saktiman","naagraj","doga"]
  let myobj={
    name:"vipin",
    age:22,
    sub:"math"
  }
//   console.log(myobj)


const myfunction=function(){
    // console.log("hello world");
}
myfunction()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive), heap(non-primitive)

let mynameis="vipin jaiswal"
let anothername=mynameis
anothername="chaiaurcode"

console.log(mynameis)
console.log(anothername)



let userone = {
  email:"hackless3666@gmail.com",
  upi:"7987120500@okhdfc"
}

let usretwo=userone

usretwo.email= "vipin78040@gmail.com"

console.log(userone)
console.log(usretwo)