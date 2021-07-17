//  const request = require('postman-request')

//  const url = 'http://api.weatherstack.com/current?access_key=78d78baa8c4fe756939620698fb2eaff&query=12.96991,77.59796'

//  request({url: url, json: true },(error, response) =>{
//     if(error){
//         console.log('you are not connected with internet')
//     }
//     else{
//         console.log('It is currently ' + response.body.current.temperature + ' degrees out. There is a ' + response.body.current.precip + '% chance of rain.')
//     }
// })
   
// const geocodeURL ='https://api.mapbox.com/geocoding/v5/mapbox.places/Bengaluru.json?access_token=pk.eyJ1IjoibmlyYWo4MCIsImEiOiJja3I1eW8yZTQzYTIxMm9xYWZraHNibTRlIn0.i7TY5aciOYSd_Khy2zbpkQ&limit=1'
// request({ url: geocodeURL, json: true }, (error, response) => {
//  if (error) {
//  console.log('Unable to connect to location services!')
//  } else if (response.body.features.length === 0) {
//  console.log('Unable to find location. Try another search.')
//  } else {
//  const latitude = response.body.features[0].center[0]
//  const longitude = response.body.features[0].center[1]
//  console.log(latitude, longitude)
//  }
   
//  })

const request = require('postman-request')
const geocode = require('./utils/geocode')

geocode('Ara Bihar', (error, data) => {
 console.log('Error', error)
 console.log('Data', data)
})
