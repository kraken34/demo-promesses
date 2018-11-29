const req = require('request')

function recupererTalks(callback) {

    return new Promise(function(resolve, reject){
        // resolve => exprimer le succès
        // reject => exprimer l'échec

        const url = 'http:/breizhcamp.org/json/talks.json'

        req(url, {json:true}, function(err, res, body){
           
            if(err) {
                reject(err)
            } else {
                resolve(body)
            }
        })

    })
}

const $promesseTalks = recupererTalks()

$promesseTalks.then(function(dataOK){
    // cas resolve
    console.log('DATA OK', dataOK.length)
}, function(errKO){
    // cas reject
    console.log('DATA KO', errKO)
})

$promesseTalks
.then(function(dataOK){
    // cas resolve
})
.catch(function(errKO) {
    // cas reject
})

