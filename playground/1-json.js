const fs = require('fs')

const book = {
    title: 'Rich dad poor dad',
    author: 'Ryan Holiday'
}

//const bookJSON = JSON.stringify(book)
//console.log(bookJSON)

//const parseData=JSON.parse(bookJSON)
//console.log(parseData.author)

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json',bookJSON)

const dataBuffer = fs.readFileSync('1-json.json') //read the json file in a variable and getting binary data in output
const dataJSON = dataBuffer.toString() //converted data into string formate
const data = JSON.parse(dataJSON) //passed data into object
console.log(data.title) //printed the title property of the data