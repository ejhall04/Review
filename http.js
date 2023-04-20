const request = require('request')
request('https://www.google.com/', (error, res, body) => {
    console.error(error)
    console.log(res.statusCode)
    console.log(body)
})