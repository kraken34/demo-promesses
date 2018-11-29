const req = require('request-promise-native')

function recupererTalks(callback) {
    return Promise.all(
        ['http://2018.breizhcamp.org/json/talks.json',
        'http://2018.breizhcamp.org/json/others.json']
        .map(url => req(url, {json:true})))     
}

recupererTalks().then(
    (tabResult) => console.log('DATA OK', tabResult.reduce((e1, e2) => e1.length + e2.length)),
    (errKO) => console.log('DATA KO', errKO)
)





$promesseTalks
.then(function(dataOK){
    // cas resolve
})
.catch(function(errKO) {
    // cas reject
})

