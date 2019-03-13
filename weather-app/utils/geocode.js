const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiaGlsbGpha2UyMyIsImEiOiJjanQ1NnRvODIwMzlmNDVwMzY4M280YTZhIn0.4Xn3Vv7UKlqg8AWDKG2zLA'
    
    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!')
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another location', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitud: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode