var debug = require('debug')
var LOG_PREFIX = require('../config/config').LOG_PREFIX

module.exports = {
    log : {
        info:  debug(`${LOG_PREFIX}:info`),
        debug: debug(`${LOG_PREFIX}:debug`),
        error: debug(`${LOG_PREFIX}:error`)
    }
}