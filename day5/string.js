const str='jija ji le li na  jija   '
const b='8465'
console.log(str.toLowerCase())
console.log(str.toUpperCase())
console.log(str.length)
console.log(str)
console.log(str.trim())
// trimstart,trimend
console.log(str.includes('ji'));
console.log(str.indexOf('le'))
console.log(str.replace('jija','dewar'))
console.log(str.replaceAll('jija','dewar'))
console.log(str.concat(' '+ b))
console.log(b.padStart(16,'*'))
console.log(b.padEnd(16,'*'))
console.log(str.charAt(9))
console.log(str.split(" "))
const newstr='last four digit of my account number is'.concat(' '+b)
const newstr2=`My account number is ${b.padStart(16,'*')}`
const bankbalance = 5856;
const newstr3= `I have ₹${bankbalance} in my account`
console.log(newstr)
console.log(newstr2)
console.log(newstr3)
