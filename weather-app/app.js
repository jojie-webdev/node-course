const request = require('request')

const url = 'https://api.darksky.net/forecast/6fef77a5f2b6be36199695fa1b01841b/37.8267,-122.4233?units=us'

request({ url: url, json: true }, (error, response) => {
    // console.log(response.body.currently)
    console.log( response.body.daily.data[0].summary + " It is currently " + response.body.currently.temperature + " degress out. There is a " + response.body.currently.precipProbability + "% chance of rain." )
})

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGlsbGpha2UyMyIsImEiOiJjanQ1NnRvODIwMzlmNDVwMzY4M280YTZhIn0.4Xn3Vv7UKlqg8AWDKG2zLA'

request({ url: geocodeURL, json: true }, (error, response) => {
    // console.log(response.body.currently)
    console.log( "longitude is " + response.body.features[0].center[0] + " latitude is " + response.body.features[0].center[1]  )
})