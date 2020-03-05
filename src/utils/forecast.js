const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/b76efc21522420bc34c16c3f538e13d1/' + lat + ',' + long +'?units=si&lang=fr'

    request({url, json: true }, (error, { body }) => {
        if(error) {
            callback("Unable to connect to weather service", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        }else {
            callback(undefined, body.daily.data[0].summary + " It is currently "+ body.currently.temperature + " degrees out. The high today is " + body.daily.data[0].temperatureHigh + " with a low of " + body.daily.data[0].temperatureLow + ". There is a "+body.currently.precipProbability +"% chance of rain.")
        }
    })

}

module.exports = forecast