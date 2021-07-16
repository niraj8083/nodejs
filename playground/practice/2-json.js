const fs = require('fs')

const dataBuffer = fs.readFileSync('2-json.json') //read the json file in a variable and getting binary data in output
const dataJSON = dataBuffer.toString() //converted data into string formate
const data = JSON.parse(dataJSON) //passed data into object
console.log(data.age) //printed the title property of the data

data.name = 'niraj' //overriding
data.age = 22 //overriding

const vari = JSON.stringify(data)

console.log(vari) //checking after overriding

const vari2 = vari.toString() //converted data into string formate
const data2 = JSON.parse(vari2) //passed data into object
console.log(data2.age) //printed the title property of the data
