const name="vipin"
const repocount=50

console.log(name +repocount +"value");
console.log(`hello my name is ${name} and my repo count is ${repocount }`);

const gamename= new String('hitesh-hc')

console.log(gamename[2])
console.log(gamename.toUpperCase())
console.log(gamename.indexOf('p'))

const newString =gamename.substring(0, 4)
console.log(newString)
const anotherString =gamename.slice(-6, 4)
console.log(anotherString)

const newStringone="   vipin    "
console.log(newStringone)
console.log(newStringone.trim())

const url= "https://vipin.com/hitesh%20jaiswal"
console.log(url.replace('%20','-'))

const myname ="vipin rohit priyashu nitish abhishek manish rupa krisna"
const allnam=(myname.split(' '))
console.log(allnam[5].split(""))


// const palindrom="A man, a ulan, a canal: Panama"
// const newpalindrom =palindrom.replaceAll(/[ ,:]/g, '' ).toLowerCase()

// let s=0;
// let e=newpalindrom.length;
// while(newpalindrom[s]<newpalindrom[e]){
//     if(newpalindrom[s]!=newpalindrom[e]){
//         console.log("not palindrom")
//     }
//     s++;
//     e--;

// }







