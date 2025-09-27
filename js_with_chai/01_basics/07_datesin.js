// Dates 

let  myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())

// let mycreatedDate=new Date(2023,0,23,5,3)
let mycreatedDate=new Date("01-14-2023")

// console.log(mycreatedDate.toLocaleString())

let mytimeStamp= Date.now()

// console.log(mytimeStamp)
// console.log(mycreatedDate.getTime())
// console.log(Math.floor(Date.now()/100))

let  newDate= new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDate())


 newDate.toLocaleString('default',{
weekday: "long",
})

