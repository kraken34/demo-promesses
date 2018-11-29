const req = require('request')

function recupererTalks(callback) {
    const url = 'http://2018.breizhcamp.org/json/talks.json'

    req(url, {json:true}, function(err, res, body){
        callback(body)
    })
}

recupererTalks(function(talks){
    console.log(talks.length, 'talks')
})


