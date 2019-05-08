const https = require('https')
const url = 'https://api.darksky.net/forecast/c20d68f4a42fcc9c08b11e21e625b76f/37.8267,-122.4233'

const request = https.request(url,(response) => {

    let data = ''

    response.on('data', (chunk) => {
        data = data+chunk.toString();
    })

    response.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()