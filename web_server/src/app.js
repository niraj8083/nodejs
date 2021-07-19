const path = require('path')

//  const express = require('express')

// // console.log(__dirname) //directory name
// // console.log(__filename) //file name

// console.log(__dirname) //directory name
// console.log(path.join(__dirname,'../public')) //file name
 
// const app = express()

// const publicDirectoryPath = path.join(__dirname,'../public')
// app.use(express.static(publicDirectoryPath))

// app.get( '' , (req, res) => {
//     res.send('He hddfs!')
// })
// //app.com
// //app.com/help
// //app.com/about

// // app.get('/help' , (req, res) => {
// //     res.send('help page')
// // })

// // app.get('/about' , (req, res) => {
// //     res.send('about page')
// // })

// app.get('/weather', (req, res) => {
//     // Provide an object to send as JSON
//     res.send([{
//             forecast: 'It is snowing'
//         },
//         {
//             Location: 'Philadelphia'
//         }]
//     )
// })
   

// app.get('/weather', (req, res) => {
//     res.send('<h1>Your weather</h1>')
//    })

// app.listen(3000, () =>  {
//     console.log('server is up on port 3000')
// })

const path = require('path') //path is core node modeule so that we can export directly html css file from a seperate folder
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index',{
        title: 'weather',
        name:'Niraj'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Niraj'
    })
})

app.get('/help', (req, res) => { //'/help' this is for help is the page we are working with
    res.render('help', { //'help' this is for the help.hbs
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Niraj'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'error! You must provide a valid location address'
        })
    }

    //

    geocode(req.query.address, (error, {latitude, longitude, location} = {} ) => {
        if(error){
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({error})
            }
            
            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
    //

    // console.log(req.query.address)
    // res.send({
    //     forecast: 'It is snowing',
    //     location: 'Philadelphia',
    //     address: req.query.address
    // })
})

app.get('/products', (req, res) => {
    if(!req.query.search){ //yadi search query galat rahega to error print
        return res.send({
            error: 'You must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Niraj',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Niraj',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000, () => { //app.listen... to startup the server
    console.log('Server is up on port 3000.')
})