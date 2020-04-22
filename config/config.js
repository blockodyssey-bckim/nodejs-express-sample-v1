
var { log } = require('../common/debug')

//json config
var config = {};
try {
    if(process.env.NODE_ENV == 'development') {
        config = require('../env/dev.env.json')
    } else if(process.env.NODE_ENV == 'production') {
        config = require('../env/prod.env.json')
    }
} catch (error) {
    log.error('Not found env.json:', error)
}

module.exports = config