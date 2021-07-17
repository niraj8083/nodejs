const path = require('path')

 const express = require('express')

// console.log(__dirname) //directory name
// console.log(__filename) //file name

console.log(__dirname) //directory name
console.log(path.join(__dirname,'../public')) //file name
 
const app = express()

const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

app.get( '' , (req, res) => {
    res.send('He hddfs!')
})
//app.com
//app.com/help
//app.com/about

// app.get('/help' , (req, res) => {
//     res.send('help page')
// })

// app.get('/about' , (req, res) => {
//     res.send('about page')
// })

app.get('/weather', (req, res) => {
    // Provide an object to send as JSON
    res.send([{
            forecast: 'It is snowing'
        },
        {
            Location: 'Philadelphia'
        }]
    )
})
   

app.get('/weatherr', (req, res) => {
    res.send('<h1>Your weather</h1>')
   })

app.listen(3000, () =>  {
    console.log('server is up on port 3000')
})